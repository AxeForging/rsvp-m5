# RSVP M5

<p align="center">
  <img src="docs/assets/rsvp-demo.gif" alt="RSVP M5 flashing one word at a time, focus letter highlighted" width="720">
</p>

RSVP M5 is an open-source M5Stack reading device that shows text one word at a time using RSVP, Rapid Serial Visual Presentation. It is designed for small screens, SD card libraries, fast reading, and a simple browser-first workflow for converting and uploading books.

RSVP M5 is an [AxeForge](https://tools.axeforge.io) project built for M5Stack Core2 hardware, with a CJK-capable font pipeline, a device-hosted Wi-Fi companion, and a browser-first workflow for converting and uploading books.

## What You Need

- An M5Stack Core2 v1.1 device.
- A USB-C data cable.
- A microSD card.
- Chrome or Edge on a desktop computer for browser flashing and the web converter.
- A phone, tablet, or computer browser for the device-hosted companion page over Wi-Fi.

## Supported Hardware

RSVP M5 targets a single board:

- [M5Stack Core2 v1.1](https://shop.m5stack.com/products/m5stack-core2-esp32-iot-development-kit-v1-1) — classic ESP32 with an AXP2101 PMIC, ILI9342C LCD, FT6336 capacitive touch, and three capacitive front buttons.

## Quick Start

1. Flash the firmware from the browser.
2. Format the SD card and create the library folders.
3. Convert books or articles to `.rsvp`.
4. Copy or upload files to the device.
5. Pick a book or article from the device menu and start reading.

## Flash The Firmware

Use the hosted flasher:

<https://axeforging.github.io/rsvp-m5/>

Open it in Chrome or Edge on desktop, connect the Core2 over USB, and follow the installer prompts. The flasher uses ESP Web Tools and Web Serial, so it must run from HTTPS or localhost.

The flasher installs the latest published GitHub Release for the M5Stack Core2.

Make sure your USB cable is a data cable.

## Prepare The SD Card

Use a microSD card formatted as FAT32.

- 8 GB to 32 GB cards are the safest choice.
- 64 GB cards can work, but they usually need to be reformatted as FAT32 with a single partition.
- exFAT is not the recommended format for this firmware.

Create these folders on the card:

```text
/books/books
/books/articles
/config
```

Books go in `/books/books`. Articles go in `/books/articles`. Older libraries with files directly inside `/books` are still read for compatibility, but the split folders are the recommended layout for `v0.0.8`.

If the device cannot see the SD card, the most common causes are:

- The card is exFAT instead of FAT32.
- The card has multiple partitions.
- The folders are missing or named differently.
- The card was removed without ejecting it from the computer.
- The card is slow, worn out, or unreliable.

The device includes an `SD card check` tool under `Settings` to help diagnose card size, mount status, write access, and folder layout.

## Convert Books And Articles

The recommended conversion workflow is still the browser converter on the hosted flasher page:

<https://axeforging.github.io/rsvp-m5/>

Use the converter to turn supported files into `.rsvp`, then upload or copy the `.rsvp` files to the device.

Supported converter inputs include:

- `.epub`
- `.txt`
- `.md` / `.markdown`
- `.html` / `.htm` / `.xhtml`

The firmware can still open `.txt` files and has an on-device EPUB fallback, but the browser converter is the best path for large books, cleaner formatting, and fewer surprises.

## Add Files To The Device

### Option 1: Copy To The SD Card

Power the device off, remove the SD card, copy files from your computer, then reinsert the card.

Use this layout:

```text
/books/books/my-book.rsvp
/books/articles/my-article.rsvp
```

On first open, the firmware may create `.ridx` and `.rdat` sidecar files next to a book. These are the SD-backed word index and normalized word data used for long books. Leave them on the card; they are rebuilt automatically if the source book changes.

Large books now load through the same indexed reading path as smaller books, with progress messages while indexes and time estimates are prepared. If a book cannot be prepared, the device should return to the menu with a readable reason instead of silently failing.

### Option 2: Web Companion

The device hosts its own browser companion page over Wi-Fi.

1. Swipe down from the top edge to open the main menu, then choose `Sync`.
2. The device shows the Wi-Fi network name and the browser URL.
3. Connect a browser to the device:
   - **Station mode (default):** once home Wi-Fi is saved, the device joins your network on the next Sync, so your phone keeps its internet. Open the `http://192.168.x.y` URL shown on the device, or `http://rsvp-m5.local`, from any browser on the same network.
   - **Access-point mode (first run / fallback):** if no home Wi-Fi is saved yet, the device makes its own `RSVP-M5-XXXXXX` network. Join it and the captive portal usually opens the page automatically; otherwise open `http://192.168.4.1`. Save your home Wi-Fi under `Settings` so the next Sync uses station mode.

The web companion has pages for:

- `Books`: upload book `.rsvp` files and view the book library.
- `Articles`: write, paste, edit, preview, and upload articles.
- `Settings`: edit device settings and save home Wi-Fi credentials.
- `RSS`: manage RSS feed URLs.
- `Help`: quick notes for connection, conversion, SD cards, and RSS.

## Home Wi-Fi, RSS, And OTA

The device can save home Wi-Fi credentials for features that need internet access, such as RSS feed checks and OTA firmware updates.

You can set Wi-Fi credentials from:

- The web companion `Settings` page.
- The on-device Wi-Fi settings page.
- Advanced users can still use `/config/ota.conf`.

Saving home Wi-Fi also makes Sync join your network in station mode, so the companion is reachable
over the LAN while your phone keeps its internet.

RSS feeds are managed from the web companion, then checked from the device with
`Articles -> Update RSS`. New articles are saved into `/books/articles`.

RSS support in `v0.0.8` includes:

- RSS and Atom feed parsing.
- Redirect handling for common `301`, `302`, `303`, `307`, and `308` responses.
- Live on-device progress while feeds are checked.
- Duplicate skipping.
- Feed item author, creator, or website name used as the article source.
- Larger feed downloads than earlier test builds.
- Better handling for feeds that send usable complete items before timing out.
- Longer full-text article bodies before on-device truncation.

Some feeds still block embedded clients, require JavaScript, return very large pages, or publish summaries instead of full articles. Those are feed or website limitations rather than SD card problems.

OTA updates use GitHub Releases. Open `Settings -> Firmware update` on the device after Wi-Fi is configured.
By default the updater follows the latest release; advanced `/config/ota.conf` setups can set
`github_tag` to pin checks to one release tag.

## Device Controls

The current UI is built around edge gestures, a small top-level menu, and quick settings. On paused
reader screens, subtle handles at the top and bottom edges hint that those menus are available.

### Hardware Buttons

The Core2 has three capacitive buttons below the screen:

- Left button: slower. Decreases WPM; hold to keep decreasing.
- Center button: play/pause. Hold to enter standby/screensaver.
- Right button: faster. Increases WPM; hold to keep increasing.
- Swipe down from the top edge: open the main menu, which includes Sync and Power off.
- Swipe up from the bottom edge: open quick settings.
- Swipe right in menus: go back one level, or close the top-level menu.

### Reader Controls

- Tap the rewind edge: left by default, or top-right when Reader controls is set to Rewind top-right. Rewinds to the start of the current sentence, or the previous sentence if you are already at the start.
- Swipe left or right while paused: scrub through nearby text.
- Tap after scrubbing: return to RSVP view.
- Hold and move vertically in the scrub preview: browse through surrounding text.
- Swipe up while paused: increase WPM.
- Swipe down while paused: decrease WPM.
- Tap the bottom-right footer label: switch between progress, chapter time remaining, book time remaining, and battery display modes.
- Tap the top-right battery label: switch between percentage, time remaining, and voltage.

Pause behavior is configurable. In `Settings -> Word pacing`, choose whether reader shortcuts pause instantly or at the end of the sentence.

### Quick Settings

Open quick settings by swiping up from the bottom edge.

```text
Brightness
Theme
Focus Timer
Sync
```

`Brightness` cycles through the brightness presets. `Theme` cycles Dark, Light, Night, and Yellow.
`Focus Timer` opens the orientation-based timer. `Sync` starts the device-hosted companion page for
browser sync.

USB mass-storage transfer is not available on the Core2, so copy `.rsvp` files with Wi-Fi Sync or
directly to the SD card.

### Main Menu

Open the main menu with a top-edge swipe.

```text
Resume
Chapters
Books
Articles
Settings
Power off
```

Swipe up or down to move through the menu. Tap to select. Swipe right to go back one level or close
the top-level menu. Submenus keep an on-screen `Back` item at the top.

### Books And Articles

`Books` shows files from `/books/books`.

`Articles` opens a small submenu for browsing saved articles or updating RSS feeds.

Both pages show readable titles, progress, and saved position where available. Select an item to load it into the reader.

### Chapters

The `Chapters` page lists chapter markers from the current book when available. Select a chapter to
jump to it. Use the on-screen `Back` item or a right swipe to return to the main menu.

### Settings

Settings are grouped by how people actually use the device.

`Display` includes:

- Display theme.
- Brightness.
- Left/right handed layout.
- Reader controls layout, including an option to put rewind in the top-right corner.
- Language.
- Screen saver: Life, Maze, Voronoi, or Screen off.
- Standby timer.
- Footer and battery label behavior.
- Optional battery, chapter, and book percentage labels while actively reading.
- Menu repeat speed.

`Typography` includes:

- Font size.
- Typeface.
- Phantom words.
- Red focus highlight.
- Tracking.
- Anchor position.
- Guide width.
- Guide gap.
- Typography preview and reset.

`Word pacing` includes:

- RSVP or scroll reading behavior.
- Instant pause or sentence-end pause.
- Long-word delay.
- Complexity delay.
- Punctuation delay.
- Pacing reset.

`Wi-Fi` includes:

- Saved network selection.
- Choose or forget network.
- Auto OTA.
- OTA owner/source.
- OTA release tag.

`Battery` includes:

- CPU speed for RSVP, scroll, paused, menu, and standby states.
- Auto-dim delay.
- Auto-dim brightness level.

`Firmware update` checks GitHub Releases and installs newer firmware when available. `SD card
check` also lives under Settings.

### Companion Sync

Use this page to reach the device-hosted web companion from a browser.

1. Swipe down from the top edge and choose `Sync`.
2. Connect to the network shown on the device: your home Wi-Fi in station mode, or the device's own `RSVP-M5-XXXXXX` network on first run.
3. Open the URL shown on the device, or let the captive portal open it for you.
4. Use the web companion in your browser.
5. Exit from the device when finished.

When Companion Sync exits, the device reloads settings and refreshes the library.

### RSS Feeds

Use the web companion to manage feed URLs. Then open `Articles -> Update RSS` on the
device.

The device shows live progress as it checks feeds. Saved articles appear in `Articles`.

If a feed cannot be downloaded, the reader shows a plain-English reason such as `Feed not found`, `Site blocked reader`, or `Site took too long`.

RSS checks can continue in the background, while installable firmware updates still ask for confirmation before the device changes itself.

### Focus Timer

The Focus Timer uses the device orientation to guide work and break blocks.

1. Swipe up from the bottom edge.
2. Choose `Focus Timer`.
3. Choose a timer category.
4. Place or flip the device as prompted.
5. Follow the on-screen timer.
6. Use Back or a right swipe to exit the timer page.

Touch-and-hold during an active timer cancels the current timer block.

### SD Card Check

Run `Settings -> SD card check` if books or articles do not appear. It checks whether the card
mounts, whether it can write, and whether the expected library folders exist.

If the old folder layout needs repair, the device now asks before changing the card.

## Character Support

`v0.0.8` includes the long-book and unsupported-character improvements from earlier releases. Common punctuation is normalized, ellipses and hyphenated sentence breaks are handled more carefully, and many accented Latin characters render directly or fall back to readable plain Latin equivalents.

The current renderer is best for English and European Latin-script languages. Complex scripts still need additional font and shaping work.

## Build From Source

Firmware builds with PlatformIO. The default environment is `m5stack_core2`, so a plain build
targets the Core2:

```bash
pio run
```

You can also name the environment explicitly:

```bash
pio run -e m5stack_core2
```

Firmware environments:

- `m5stack_core2`: M5Stack Core2 v1.1 firmware. This is the default env.
- `native_test`: host-side unit tests. Run them with `pio test -e native_test`.

Board-independent app code uses the stable `src/board` API and `src/input/Input.*`. Board-specific
wiring, rails, buses, and chip choices live under `src/platforms/<board>`, while reusable chip code
lives under `src/drivers`.

Upload to a connected device:

```bash
pio run -t upload
```

Monitor serial output:

```bash
pio device monitor
```

The hosted flasher page in `web/` is static. Its in-browser book converter
(`web/generated/converter/`) is a prebuilt JavaScript bundle committed to the repo, so the page
needs no build step.

To export browser-flasher and OTA firmware assets for a release:

```bash
python3 tools/export_web_firmware.py --version v0.0.8
```

That writes:

```text
web/firmware/rsvp-m5-core2.bin
web/firmware/rsvp-m5-core2-ota.bin
web/firmware/manifest.json
```

`rsvp-m5-core2.bin` is the full flash image, `rsvp-m5-core2-ota.bin` is the OTA update image, and
`manifest.json` is the single ESP Web Tools manifest for the Core2 (chip family ESP32).

## Project Status

RSVP M5 targets the M5Stack Core2 exclusively, and development tracks that single build.

The most recent reader work focuses on touch ergonomics and more resilient RSS downloads:

- Restricts top and bottom edge menu swipe areas toward the middle of the display so WPM changes are
  less likely to open menus by mistake.
- Adds right-swipe Back navigation throughout menus, including text entry.
- Adds a Reader controls setting that can put rewind in the top-right corner for one-handed use,
  while moving the battery label to the top-left.
- Exposes the Reader controls setting on device and in the device-hosted web companion.
- Raises RSS feed and article size limits for longer full-text feeds.
- Accepts usable partial RSS or Atom downloads when complete items arrive before a slow feed times
  out.

The next areas of work are:

- More capable article extraction for sites that do not expose full RSS content.
- A fuller browser-hosted companion experience for desktop and mobile.
- More font and script support.

## Acknowledgements

RSVP M5 began from [RSVP Nano](https://github.com/ionutdecebal/rsvpnano) by the RSVP Nano contributors, and their MIT-licensed code lives on in this project. Thanks to them for the foundation.

## License

MIT. See [LICENSE](LICENSE). © 2026 AxeForging and RSVP Nano contributors. Part of the [AxeForge](https://tools.axeforge.io) toolset.

The embedded OpenDyslexic and Atkinson Hyperlegible typeface assets are included under the SIL Open Font License. See [third_party/opendyslexic/OFL.txt](third_party/opendyslexic/OFL.txt) and [third_party/atkinson-hyperlegible/OFL.txt](third_party/atkinson-hyperlegible/OFL.txt).
