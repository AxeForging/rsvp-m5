#pragma once

#include <Arduino.h>
#include <driver/gpio.h>

#include "board/BoardTypes.h"

// M5Stack Core2 v1.1 wiring. This unit has an AXP2101 PMIC (not the AXP192 of the
// original Core2); display, power (AXP2101) and touch are driven through M5Unified, so
// the display/power constants below are informational. SD (VSPI) and the touch IRQ pin
// are still used directly. This header is the single place to tweak the board.
namespace M5StackCore2::Buttons {
// Core2 has no runtime-usable BOOT/EN button; the power button is on the AXP2101
// PEK. UI is touch/gesture driven, so there is no GPIO "primary" control.
constexpr int kBootPin = -1;
constexpr int kPowerPin = -1;
constexpr int kKeyPin = -1;
constexpr uint16_t kDebounceMs = 12;  // capacitive buttons don't bounce; keep slower/faster snappy
constexpr uint16_t kShortPressMaxMs = 700;
constexpr uint16_t kLongPressMs = 900;
}  // namespace M5StackCore2::Buttons

namespace M5StackCore2::DisplayWiring {
// ILI9342C on VSPI. Reset + backlight are owned by the AXP2101, so both are -1.
constexpr int kCsPin = 5;
constexpr int kDcPin = 15;
constexpr int kSclkPin = 18;
constexpr int kMosiPin = 23;
constexpr int kMisoPin = 38;
constexpr int kResetPin = -1;
constexpr int kBacklightPin = -1;
constexpr uint16_t kPanelWidth = 320;   // ILI9342C is landscape-native.
constexpr uint16_t kPanelHeight = 240;
constexpr uint16_t kColumnOffset = 0;
constexpr uint16_t kRowOffset = 0;
constexpr size_t kTxChunkBytes = 32 * 1024;
constexpr uint8_t kMadctl = 0x08;  // BGR landscape; flip here if rotated/mirrored.
constexpr bool kInvert = false;    // bring-up: try INVOFF (flip if colors negate).
constexpr Board::UiOrientation kDefaultUiOrientation = Board::UiOrientation::Landscape;
}  // namespace M5StackCore2::DisplayWiring

namespace M5StackCore2::ImuWiring {
constexpr uint8_t kAddress = 0x68;  // MPU6886 (driver stubbed for now).
constexpr bool kReleaseBusBeforeRead = false;
}  // namespace M5StackCore2::ImuWiring

namespace M5StackCore2::Power {
constexpr bool kReleaseBusBeforeRead = false;
constexpr uint8_t kInitialBacklightPercent = 80;
constexpr bool kRequestPmuShutdownOnPowerOff = true;   // AXP2101 can hard power off.
constexpr bool kReleaseBatteryHoldBeforeDeepSleep = false;
}  // namespace M5StackCore2::Power

namespace M5StackCore2::Storage {
// microSD shares the LCD VSPI bus; only CS differs.
constexpr int kSclkPin = DisplayWiring::kSclkPin;
constexpr int kMosiPin = DisplayWiring::kMosiPin;
constexpr int kMisoPin = DisplayWiring::kMisoPin;
constexpr int kCsPin = 4;
constexpr uint32_t kDefaultFrequencyHz = 20000000;
}  // namespace M5StackCore2::Storage

namespace M5StackCore2::System {
// AXP2101 + MPU6886 + FT6336 + RTC all sit on the internal I2C bus (Wire).
constexpr int kSystemI2cSdaPin = 21;
constexpr int kSystemI2cSclPin = 22;
constexpr uint32_t kSystemI2cClockHz = 400000;
constexpr uint32_t kSystemI2cTimeoutMs = 10;
constexpr int kTouchResetPin = -1;  // Reset shared with system; not a GPIO.
constexpr int kTouchIrqPin = 39;    // Input-only GPIO (external pull-up on board).
constexpr uint32_t kTouchI2cClockHz = kSystemI2cClockHz;
constexpr uint32_t kTouchI2cTimeoutMs = kSystemI2cTimeoutMs;
constexpr int kDeepSleepWakePin = kTouchIrqPin;
constexpr gpio_num_t kDeepSleepWakeGpio = GPIO_NUM_39;
}  // namespace M5StackCore2::System

namespace M5StackCore2::TouchWiring {
constexpr uint8_t kAddress = 0x38;  // FT6336U.
constexpr bool kReleaseBusBeforeRead = false;
constexpr uint8_t kReleaseConfirmSamples = 2;
constexpr uint8_t kMaxConsecutiveReadFailures = 5;
constexpr uint32_t kPollIntervalMs = 8;  // ~125 Hz touch sampling (was 50 Hz) for snappier taps/scrub
constexpr uint32_t kFailureBackoffMs = 250;
constexpr uint32_t kRecoveryRetryMs = 1000;
constexpr uint32_t kRecoveryEventIgnoreMs = 0;
}  // namespace M5StackCore2::TouchWiring
