#pragma once

#include "i18n/Language.h"
#include "platforms/m5stack_core2/M5StackCore2.h"

namespace Board::Config {

constexpr const char *BOARD_ID = "m5stack_core2";
constexpr const char *BOARD_LABEL = "M5Stack Core2";
// Per-language OTA asset, so a device pulls the update built with its own bundled font.
constexpr const char *OTA_ASSET_NAME = "rsvp-m5-core2-" RSVP_LANG_SUFFIX "-ota.bin";

constexpr bool ENABLE_TOP_EDGE_MENU_SWIPE = true;
// Reader touch is deliberately minimal: tap = play/pause, top-swipe = menu, horizontal
// swipe = scrub. No bottom-edge quick-settings swipe.
constexpr bool ENABLE_BOTTOM_EDGE_QUICK_SETTINGS_SWIPE = false;
constexpr bool READER_SINGLE_TAP_PAUSES_WHILE_LOCKED = true;
constexpr bool TOUCH_READER_PLAYBACK_ENABLED = true;
constexpr bool ENABLE_RESTRUCTURED_MENU = true;

// ILI9342C is 320x240 landscape-native. We drive M5.Display at setRotation(1) (320x240,
// buttons at the bottom -- the standard M5 hold) and use the Portrait UI orientation,
// which is RSVP's IDENTITY map (logical == physical). No software rotation, so the
// dimensions match the panel exactly and the reader renders landscape with buttons down.
constexpr int PANEL_NATIVE_WIDTH = 320;
constexpr int PANEL_NATIVE_HEIGHT = 240;
constexpr int DISPLAY_WIDTH = 320;
constexpr int DISPLAY_HEIGHT = 240;
// Reader indicators sit flush in the four corners to free the middle of the screen.
constexpr int READER_CHROME_MARGIN_X = 8;
constexpr int READER_CHROME_MARGIN_TOP = 8;
constexpr int READER_CHROME_MARGIN_BOTTOM = 8;
constexpr int READER_BATTERY_MARGIN_X = 8;
constexpr int READER_BATTERY_MARGIN_TOP = 8;

}  // namespace Board::Config
