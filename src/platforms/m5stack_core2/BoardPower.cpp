#include "board/BoardPower.h"

#include "platforms/m5stack_core2/M5UnifiedInit.h"

// Battery / power via M5Unified's M5.Power (AXP2101 on the Core2 v1.1). M5.begin()
// in M5UnifiedInit configures the PMIC; here we just read/act through M5.Power.
namespace Board::Power {

void begin() { M5StackCore2Unified::ensureBegun(); }

void prepareDeepSleepPowerHold() {}

bool readBatteryStatus(BatteryStatus &status) {
  status = BatteryStatus{};
  const int32_t level = M5.Power.getBatteryLevel();      // 0..100, or -1 if unknown
  const int32_t millivolts = M5.Power.getBatteryVoltage();
  if (level < 0 && millivolts <= 0) {
    return false;
  }
  status.voltage = millivolts > 0 ? static_cast<float>(millivolts) / 1000.0f : 0.0f;
  status.percent = level < 0 ? 0 : static_cast<uint8_t>(level > 100 ? 100 : level);
  status.present = millivolts > 2500;
  return status.present;
}

DiagnosticSnapshot diagnosticSnapshot() {
  DiagnosticSnapshot snapshot;
  snapshot.available = true;
  snapshot.externalPowerPresent = M5.Power.isCharging() == m5::Power_Class::is_charging_t::is_charging;
  return snapshot;
}

bool externalPowerPresent() {
  return M5.Power.isCharging() == m5::Power_Class::is_charging_t::is_charging;
}

bool releaseBatteryPowerHold() {
  M5.Power.powerOff();
  return true;
}

bool supportsSoftwarePowerOff() { return true; }

bool powerOffUsesControllerWake() { return true; }

bool shouldRequestShutdownOnPowerOff() { return true; }

bool shouldReleaseBatteryPowerBeforeDeepSleep() { return false; }

}  // namespace Board::Power
