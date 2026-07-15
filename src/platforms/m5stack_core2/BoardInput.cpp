#include "board/BoardInput.h"

#include "platforms/m5stack_core2/M5StackCore2.h"
#include "platforms/m5stack_core2/M5UnifiedInit.h"

// Touch via M5Unified's M5.Touch (FT6336 on the AXP2101-shared internal I2C). M5.begin()
// set it up; M5.update() refreshes it. Coordinates are already in the display's rotated
// (landscape 320x240) space, which matches the RSVP touch surface.
namespace Board::Input {

bool begin() { return true; }

void end() {}

void cancel() {}

::Input::ControlTiming controlTiming() {
  return {M5StackCore2::Buttons::kDebounceMs, M5StackCore2::Buttons::kShortPressMaxMs,
          M5StackCore2::Buttons::kLongPressMs};
}

// The Core2's 3 capacitive buttons (left->right) map to distinct reader actions:
//   A (left)   = Slower (Key -> WPM down, via RSVP_SIDE_BUTTONS_ADJUST_WPM)
//   B (center) = Play/Pause (Primary, long-press = standby)
//   C (right)  = Faster (Power -> WPM up; long-press keeps speeding up)
// Menu + power off are reached by swiping down from the top edge (ENABLE_TOP_EDGE_MENU_SWIPE).
// poll() calls currentControls() before readTouch(), so refresh M5 (buttons + touch) here.
::Input::ControlMask currentControls() {
  M5.update();
  ::Input::ControlMask controls = ::Input::InputNone;
  if (M5.BtnA.isPressed()) {
    controls |= ::Input::InputKey;  // Slower (WPM down)
  }
  if (M5.BtnB.isPressed()) {
    controls |= ::Input::InputPrimary;  // Play / Pause
  }
  if (M5.BtnC.isPressed()) {
    controls |= ::Input::InputPower;  // Faster (WPM up); long-press: power off
  }
  return controls;
}

::Input::TouchSurface touchSurface() {
  // Physical touch bounds follow M5.Display's rotation (portrait-native 240x320).
  return {static_cast<uint16_t>(M5.Display.width()), static_cast<uint16_t>(M5.Display.height())};
}

::Input::TouchTiming touchTiming() {
  ::Input::TouchTiming timing = {};
  timing.releaseConfirmSamples = M5StackCore2::TouchWiring::kReleaseConfirmSamples;
  timing.maxConsecutiveReadFailures = M5StackCore2::TouchWiring::kMaxConsecutiveReadFailures;
  timing.pollIntervalMs = M5StackCore2::TouchWiring::kPollIntervalMs;
  timing.failureBackoffMs = M5StackCore2::TouchWiring::kFailureBackoffMs;
  timing.recoveryRetryMs = M5StackCore2::TouchWiring::kRecoveryRetryMs;
  timing.recoveryEventIgnoreMs = M5StackCore2::TouchWiring::kRecoveryEventIgnoreMs;
  return timing;
}

bool beginTouch() {
  M5StackCore2Unified::ensureBegun();
  return M5.Touch.isEnabled();
}

bool touchReady() { return true; }

bool readTouch(::Input::TouchContact &contact) {
  // M5.update() already ran in currentControls() this poll cycle (poll() calls it first).
  // The Core2's 3 buttons are capacitive pads on the SAME touch panel, just below the
  // screen. A button press therefore also reports as a touch -- if we let it through, the
  // reader's tap-to-play/pause fires at the same time as the button's WPM change. Buttons
  // and screen taps are mutually exclusive here, so when any button is down the contact
  // belongs to it: report no screen touch and let currentControls() handle the button.
  if (M5.Touch.getCount() == 0 || M5.BtnA.isPressed() || M5.BtnB.isPressed() ||
      M5.BtnC.isPressed()) {
    contact = {false, 0, 0};
    return true;
  }
  const auto detail = M5.Touch.getDetail(0);
  const uint16_t x = detail.x < 0 ? 0 : static_cast<uint16_t>(detail.x);
  const uint16_t y = detail.y < 0 ? 0 : static_cast<uint16_t>(detail.y);
  contact = {true, x, y};
  return true;
}

}  // namespace Board::Input
