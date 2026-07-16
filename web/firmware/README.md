# Firmware Assets

Per-language browser-flasher images and OTA binaries for the M5Stack Core2. Each variant bundles only
its own reading font (the linker drops the rest); `en` is the lightest and the full multi-script Noto
font downloads on demand. The web flasher's language dropdown reads `languages.json` and flashes the
matching manifest.

For each language `<lang>` in `en`, `ja`, `zh`, `ko`:

- `rsvp-m5-core2-<lang>.bin` — full browser-flasher image.
- `rsvp-m5-core2-<lang>-ota.bin` — matching OTA update binary.
- `manifest-<lang>.json` — ESP Web Tools manifest (tracked in Git; version stamped at release time).

For local exports:

```bash
python3 tools/export_web_firmware.py            # all languages
python3 tools/export_web_firmware.py --lang ja  # one language
```

The generated `.bin` files are ignored by Git; the manifests and `languages.json` are tracked.
