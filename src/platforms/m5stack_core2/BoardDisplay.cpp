#include "board/BoardDisplay.h"

#include "platforms/m5stack_core2/M5StackCore2.h"
#include "platforms/m5stack_core2/M5UnifiedInit.h"

// Display via M5Unified's M5.Display (M5GFX under the hood, but M5.begin() first
// configures the AXP2101 rails this Core2 v1.1 needs). See M5UnifiedInit.h.
namespace {

uint8_t gBrightnessPercent = 80;

uint8_t brightnessByte() { return static_cast<uint8_t>((gBrightnessPercent * 255) / 100); }

}  // namespace

namespace Board::Display {

bool begin() {
  M5StackCore2Unified::ensureBegun();
  M5.Display.setBrightness(brightnessByte());
  Serial.printf("[display] Core2 M5Unified ready %dx%d\n", M5.Display.width(), M5.Display.height());
  return true;
}

void holdBacklightOffForDeepSleep() { M5.Display.setBrightness(0); }

// Portrait == RSVP's identity map (logical == physical); the Core2 panel is already
// landscape (320x240) so no rotation is needed. rotatedUiOrientation flips it 180.
Board::UiOrientation defaultUiOrientation() { return Board::UiOrientation::Portrait; }

Board::UiOrientation rotatedUiOrientation() { return Board::UiOrientation::PortraitFlipped; }

size_t txChunkBytes() { return M5StackCore2::DisplayWiring::kTxChunkBytes; }

void setBacklight(bool on) { M5.Display.setBrightness(on ? brightnessByte() : 0); }

void setBrightness(uint8_t percent) {
  gBrightnessPercent = percent > 100 ? 100 : percent;
  M5.Display.setBrightness(brightnessByte());
}

void sleep() { M5.Display.sleep(); }

void wake() { M5.Display.wakeup(); }

bool pushColors(uint16_t x, uint16_t y, uint16_t width, uint16_t height, const uint16_t *data) {
  // DisplayManager::panelColor() already byte-swaps to panel (big-endian) order, so
  // writePixels must NOT swap again (swap=false) -- a second swap renders wrong/black.
  M5.Display.startWrite();
  M5.Display.setAddrWindow(x, y, width, height);
  M5.Display.writePixels(data, static_cast<size_t>(width) * height, false);
  M5.Display.endWrite();
  return true;
}

void drawJpeg(const uint8_t *data, size_t len) {
  // M5GFX decodes the baseline JPEG (TJpgDec) and blits it. The image is authored at the
  // panel size, so it fills the screen from the origin in the current rotation. Clear to black
  // first so any decode gap (or a smaller/transparent-origin image) shows on the panel bg.
  M5.Display.fillScreen(0);  // black
  M5.Display.drawJpg(data, static_cast<uint32_t>(len), 0, 0, M5.Display.width(), M5.Display.height());
}

}  // namespace Board::Display
