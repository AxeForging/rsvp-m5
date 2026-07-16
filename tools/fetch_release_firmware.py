#!/usr/bin/env python3
from __future__ import annotations

import argparse
import json
import os
import shutil
import urllib.error
import urllib.request
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
WEB_FIRMWARE_DIR = ROOT / "web" / "firmware"
DEFAULT_REPO = "AxeForging/rsvp-m5"


def github_headers() -> dict[str, str]:
    headers = {
        "Accept": "application/vnd.github+json",
        "User-Agent": "rsvp-m5-web-firmware-fetcher",
    }
    token = os.environ.get("GITHUB_TOKEN", "").strip()
    if token:
        headers["Authorization"] = f"Bearer {token}"
    return headers


def fetch_json(url: str) -> dict:
    request = urllib.request.Request(url, headers=github_headers())
    try:
        with urllib.request.urlopen(request) as response:
            return json.load(response)
    except urllib.error.HTTPError as exc:
        body = exc.read().decode("utf-8", errors="replace").strip()
        detail = f": {body}" if body else ""
        raise SystemExit(f"GitHub API request failed with HTTP {exc.code}{detail}") from exc
    except urllib.error.URLError as exc:
        raise SystemExit(f"GitHub API request failed: {exc.reason}") from exc


def download_file(url: str, destination: Path) -> None:
    request = urllib.request.Request(url, headers=github_headers())
    try:
        with urllib.request.urlopen(request) as response, destination.open("wb") as output:
            shutil.copyfileobj(response, output)
    except urllib.error.HTTPError as exc:
        raise SystemExit(f"Asset download failed with HTTP {exc.code}: {destination.name}") from exc
    except urllib.error.URLError as exc:
        raise SystemExit(f"Asset download failed for {destination.name}: {exc.reason}") from exc


def latest_release(repo: str) -> dict:
    return fetch_json(f"https://api.github.com/repos/{repo}/releases/latest")


def find_asset(release: dict, name: str) -> dict | None:
    for asset in release.get("assets", []):
        if asset.get("name") == name:
            return asset
    return None


def committed_languages() -> list[str]:
    # The per-language manifests are tracked in git; they define which reading languages exist.
    return sorted(p.stem[len("manifest-"):] for p in WEB_FIRMWARE_DIR.glob("manifest-*.json"))


def stamp_manifest_versions(version: str) -> None:
    for path in WEB_FIRMWARE_DIR.glob("manifest-*.json"):
        manifest = json.loads(path.read_text())
        manifest["version"] = version
        path.write_text(json.dumps(manifest, indent=2) + "\n")


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Populate web/firmware from the latest published GitHub Release."
    )
    parser.add_argument(
        "--repo",
        default=os.environ.get("GITHUB_REPOSITORY", DEFAULT_REPO),
        help="GitHub repository in owner/name form.",
    )
    parser.add_argument(
        "--asset",
        action="append",
        dest="assets",
        help="Release asset to download. Repeat to request multiple assets.",
    )
    args = parser.parse_args()

    release = latest_release(args.repo)
    tag_name = str(release.get("tag_name", "")).strip()
    if not tag_name:
        raise SystemExit("Latest release is missing tag_name.")

    WEB_FIRMWARE_DIR.mkdir(parents=True, exist_ok=True)

    # The flasher serves the full per-language flash images from Pages; download whichever the
    # latest release actually carries. Missing ones (e.g. a release cut before this language existed)
    # are skipped, not fatal -- the flasher then shows that language as unavailable.
    assets = list(args.assets) if args.assets else [
        f"rsvp-m5-core2-{lang}.bin" for lang in committed_languages()
    ]
    downloaded = 0
    for asset_name in assets:
        asset = find_asset(release, asset_name)
        if asset is None:
            print(f"Skipping {asset_name}: not in release {tag_name}")
            continue
        url = str(asset.get("browser_download_url", "")).strip()
        if not url:
            print(f"Skipping {asset_name}: missing browser_download_url")
            continue
        destination = WEB_FIRMWARE_DIR / asset_name
        print(f"Downloading {asset_name} from {tag_name} -> {destination}")
        download_file(url, destination)
        downloaded += 1

    stamp_manifest_versions(tag_name)
    print(f"Web firmware updated to release {tag_name} ({downloaded} image(s))")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
