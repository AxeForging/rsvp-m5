#include "board/BoardDisplay.h"
#include "board/BoardPower.h"
#include "board/BoardSystem.h"

#include <driver/gpio.h>
#include <esp_sleep.h>
#include <esp_system.h>

#include "platforms/m5stack_core2/M5StackCore2.h"
#include "platforms/m5stack_core2/M5UnifiedInit.h"

namespace Board {

namespace {

const char *resetReasonName(esp_reset_reason_t reason) {
  switch (reason) {
    case ESP_RST_POWERON: return "poweron";
    case ESP_RST_EXT: return "external";
    case ESP_RST_SW: return "software";
    case ESP_RST_PANIC: return "panic";
    case ESP_RST_INT_WDT: return "interrupt_watchdog";
    case ESP_RST_TASK_WDT: return "task_watchdog";
    case ESP_RST_WDT: return "watchdog";
    case ESP_RST_DEEPSLEEP: return "deep_sleep";
    case ESP_RST_BROWNOUT: return "brownout";
    case ESP_RST_SDIO: return "sdio";
    case ESP_RST_UNKNOWN:
    default: return "unknown";
  }
}

}  // namespace

namespace System {

void begin() {
  // M5.begin() owns the internal I2C bus and configures the AXP2101 power rails,
  // display and FT6336 touch. Everything else (battery, touch, display) goes through
  // M5.* -- no separate Wire master on GPIO21/22.
  M5StackCore2Unified::ensureBegun();
}

void lightSleepUntilBootButton() {
  // Wake on touch interrupt (GPIO39 pulled low when the panel is touched).
  gpio_wakeup_enable(M5StackCore2::System::kDeepSleepWakeGpio, GPIO_INTR_LOW_LEVEL);
  esp_sleep_enable_gpio_wakeup();
  Serial.flush();
  esp_light_sleep_start();
  gpio_wakeup_disable(M5StackCore2::System::kDeepSleepWakeGpio);
  esp_sleep_disable_wakeup_source(ESP_SLEEP_WAKEUP_GPIO);
}

void holdBacklightOffForDeepSleep() {
  Board::Power::prepareDeepSleepPowerHold();
  Board::Display::holdBacklightOffForDeepSleep();
}

void deepSleepUntilConfiguredWake() {
  // Classic ESP32 deep sleep uses ext0 (RTC GPIO), not the S3/C6 gpio-wakeup API.
  esp_sleep_enable_ext0_wakeup(M5StackCore2::System::kDeepSleepWakeGpio, 0);
  esp_deep_sleep_start();
}

const char *wakeLabel(bool) { return "Touch to start"; }

void logStartupDiagnostics() {
  const esp_reset_reason_t resetReason = esp_reset_reason();
  const esp_sleep_wakeup_cause_t wakeupCause = esp_sleep_get_wakeup_cause();
  Serial.printf("[diag] reset=%s(%d) sleep_wake=%d\n", resetReasonName(resetReason),
                static_cast<int>(resetReason), static_cast<int>(wakeupCause));

  const Board::Power::DiagnosticSnapshot power = Board::Power::diagnosticSnapshot();
  if (!power.available) {
    Serial.println("[diag] power_snapshot=unavailable");
    return;
  }
  Serial.printf("[diag] power_snapshot=vbus:%u\n", power.externalPowerPresent ? 1 : 0);
}

}  // namespace System

}  // namespace Board
