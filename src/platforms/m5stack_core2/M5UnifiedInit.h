#pragma once

#include <M5Unified.h>

// Core2 v1.1 uses an AXP2101 PMIC. Raw M5GFX autodetect powers the panel logic but
// not the display rails at full voltage, so the glass stays black. M5Unified's
// Power_Class configures the AXP2101 correctly (this is what the working Evil-M5Project
// uses on this exact unit). M5.begin() owns the internal I2C (AXP2101 + FT6336 touch),
// so nothing else may drive Wire on GPIO21/22.
namespace M5StackCore2Unified {

// Idempotent: brings up M5Unified (power + display + touch) exactly once.
inline void ensureBegun() {
  static bool begun = false;
  if (begun) {
    return;
  }
  begun = true;
  auto cfg = M5.config();  // default config, matching the working Evil-M5Project
  M5.begin(cfg);
  M5.Display.setRotation(1);  // landscape 320x240, buttons at the bottom (standard M5 hold)
}

}  // namespace M5StackCore2Unified
