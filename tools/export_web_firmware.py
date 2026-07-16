#!/usr/bin/env python3
from __future__ import annotations

import argparse
import json
import os
import shutil
import subprocess
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
WEB_FIRMWARE_DIR = ROOT / "web" / "firmware"
BOOT_APP0_GLOB = "framework-arduinoespressif32*/tools/partitions/boot_app0.bin"
ENV = "m5stack_core2"

# Reading language chosen at flash time. Each variant bundles only its own gothic efont (the linker
# drops the rest); `en` bundles none and is the lightest. The full Noto VLW download covers every
# script on any variant. `default` is what the flasher preselects.
DEFAULT_LANG = "en"
LANGUAGES = (
    {"code": "en", "macro": "RSVP_LANG_EN", "label": "English"},
    {"code": "ja", "macro": "RSVP_LANG_JA", "label": "Japanese / 日本語"},
    {"code": "zh", "macro": "RSVP_LANG_ZH", "label": "Simplified Chinese / 简体中文"},
    {"code": "ko", "macro": "RSVP_LANG_KO", "label": "Korean / 한국어"},
)
LANG_BY_CODE = {lang["code"]: lang for lang in LANGUAGES}


def run(command: list[str], version: str | None = None, build_flags: str | None = None) -> None:
    print("+", " ".join(command))
    env = os.environ.copy()
    env.setdefault("PLATFORMIO_SETTING_ENABLE_TELEMETRY", "No")
    if version:
        env["RSVP_FIRMWARE_VERSION"] = version
    if build_flags:
        env["PLATFORMIO_BUILD_FLAGS"] = build_flags
    subprocess.run(command, cwd=ROOT, check=True, env=env)


def pio_command() -> str:
    local = Path.home() / ".platformio" / "penv" / "bin" / "pio"
    if local.exists():
        return str(local)

    found = shutil.which("pio")
    if found:
        return found

    raise SystemExit("PlatformIO Core was not found. Install it or activate the PlatformIO env.")


def git_version() -> str:
    try:
        value = subprocess.check_output(
            ["git", "describe", "--tags", "--always", "--dirty"], cwd=ROOT, text=True
        ).strip()
        return value or "dev"
    except (subprocess.CalledProcessError, FileNotFoundError):
        return "dev"


def find_boot_app0() -> Path:
    search_roots = [
        ROOT / ".pio" / "packages",
        Path.home() / ".platformio" / "packages",
    ]
    candidates: list[Path] = []
    for root in search_roots:
        candidates.extend(root.glob(BOOT_APP0_GLOB))

    if not candidates:
        raise SystemExit("Could not find Arduino ESP32 boot_app0.bin after PlatformIO build.")

    return sorted(candidates)[-1]


def load_flash_parts(env: str) -> list[tuple[int, Path]]:
    build_dir = ROOT / ".pio" / "build" / env
    parts: list[tuple[int, Path]] = [
        # Classic ESP32 (Core2) loads its 2nd-stage bootloader from 0x1000, NOT 0x0000
        # (that offset is only for ESP32-S3/C3). The merged image is written at flash 0,
        # so 0x0..0xFFF is 0xFF padding and the bootloader magic (0xE9) lands at 0x1000.
        (0x1000, build_dir / "bootloader.bin"),
        (0x8000, build_dir / "partitions.bin"),
        (0xE000, find_boot_app0()),
        (0x10000, build_dir / "firmware.bin"),
    ]

    for _, path in parts:
        if not path.exists():
            raise SystemExit(f"Missing flash part for {env}: {path}")

    return sorted(parts, key=lambda item: item[0])


def merge_firmware(env: str, output: Path) -> None:
    parts = load_flash_parts(env)
    output.parent.mkdir(parents=True, exist_ok=True)

    cursor = 0
    with output.open("wb") as merged:
        for offset, path in parts:
            if offset < cursor:
                raise SystemExit(f"Overlapping flash part for {env}: {path}")

            gap = offset - cursor
            if gap > 0:
                merged.write(b"\xFF" * gap)
                cursor = offset

            data = path.read_bytes()
            merged.write(data)
            cursor += len(data)


def export_ota_binary(env: str, output: Path) -> None:
    firmware_path = ROOT / ".pio" / "build" / env / "firmware.bin"
    if not firmware_path.exists():
        raise SystemExit(f"Missing OTA app binary for {env}: {firmware_path}")

    shutil.copy2(firmware_path, output)


def write_manifest(path: Path, version: str, binary: str, label: str) -> None:
    manifest = {
        "name": f"RSVP M5 ({label})",
        "version": version,
        "new_install_prompt_erase": True,
        "new_install_improv_wait_time": 0,
        "features": [
            "Books and articles library",
            "Device-hosted web companion",
            "RSS feed downloads",
        ],
        "builds": [
            {
                "chipFamily": "ESP32",
                "improv": False,
                "parts": [{"path": binary, "offset": 0}],
            }
        ],
    }
    path.write_text(json.dumps(manifest, indent=2) + "\n")


def write_languages_index(path: Path) -> None:
    index = {
        "default": DEFAULT_LANG,
        "languages": [
            {
                "code": lang["code"],
                "label": lang["label"],
                "manifest": f"firmware/manifest-{lang['code']}.json",
            }
            for lang in LANGUAGES
        ],
    }
    path.write_text(json.dumps(index, indent=2) + "\n")


def main() -> int:
    parser = argparse.ArgumentParser(description="Build per-language merged binaries for the web flasher.")
    parser.add_argument(
        "--skip-build",
        action="store_true",
        help="Use existing .pio build outputs instead of running PlatformIO first.",
    )
    parser.add_argument("--version", default=git_version(), help="Version string for manifests.")
    parser.add_argument(
        "--lang",
        default=",".join(lang["code"] for lang in LANGUAGES),
        help="Comma-separated reading languages to build (default: all).",
    )
    args = parser.parse_args()

    codes = [code.strip() for code in args.lang.split(",") if code.strip()]
    unknown = [code for code in codes if code not in LANG_BY_CODE]
    if unknown:
        raise SystemExit(f"Unknown language(s): {', '.join(unknown)}. Known: {', '.join(LANG_BY_CODE)}")

    pio = None if args.skip_build else pio_command()
    WEB_FIRMWARE_DIR.mkdir(parents=True, exist_ok=True)

    for code in codes:
        lang = LANG_BY_CODE[code]
        flash_binary = f"rsvp-m5-core2-{code}.bin"
        ota_binary = f"rsvp-m5-core2-{code}-ota.bin"

        if not args.skip_build:
            assert pio is not None
            # PLATFORMIO_BUILD_FLAGS injects the language selector; the .bin symbols differ per
            # language, so each build must complete and be copied out before the next overwrites it.
            run([pio, "run", "-e", ENV], args.version, f"-DRSVP_LANG={lang['macro']}")

        print(f"Exporting {lang['label']} flash image -> {flash_binary}")
        merge_firmware(ENV, WEB_FIRMWARE_DIR / flash_binary)
        print(f"Exporting {lang['label']} OTA image -> {ota_binary}")
        export_ota_binary(ENV, WEB_FIRMWARE_DIR / ota_binary)
        write_manifest(WEB_FIRMWARE_DIR / f"manifest-{code}.json", args.version, flash_binary, lang["label"])

    write_languages_index(WEB_FIRMWARE_DIR / "languages.json")
    print(f"Web firmware exported to {WEB_FIRMWARE_DIR}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
