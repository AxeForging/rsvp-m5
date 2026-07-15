#include "board/BoardImu.h"

#include "platforms/m5stack_core2/M5StackCore2.h"

// MPU6886 IMU stub. Core2 has an MPU6886 on the internal I2C bus; a real driver
// can be added later. Until then IMU is reported unavailable, which disables
// orientation-based features (e.g. the focus timer's flip detection).
// ponytail: add drivers/imu/mpu6886 and wire it here when orientation is wanted.
namespace Board::Imu {

namespace {
Board::UiOrientation gUiOrientation = M5StackCore2::DisplayWiring::kDefaultUiOrientation;
}  // namespace

bool available() { return false; }

const char *wireName() { return "Wire"; }

uint8_t address() { return M5StackCore2::ImuWiring::kAddress; }

Board::UiOrientation uiOrientation() { return gUiOrientation; }

void setUiOrientation(Board::UiOrientation orientation) { gUiOrientation = orientation; }

bool probeAddress(uint8_t) { return false; }

bool readRegister(uint8_t, uint8_t, uint8_t &) { return false; }

bool writeRegister(uint8_t, uint8_t, uint8_t) { return false; }

bool readRegisters(uint8_t, uint8_t, uint8_t *, size_t) { return false; }

}  // namespace Board::Imu
