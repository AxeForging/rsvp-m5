#include "board/BoardStorage.h"

#include <SD.h>
#include <SPI.h>

#include "platforms/m5stack_core2/M5StackCore2.h"

namespace Board::Storage {

fs::FS &filesystem() { return SD; }

bool mount(const char *mountPoint, int frequencyKhz) {
  const uint32_t frequencyHz = frequencyKhz > 0
                                   ? static_cast<uint32_t>(frequencyKhz) * 1000U
                                   : M5StackCore2::Storage::kDefaultFrequencyHz;
  // Shares the LCD VSPI bus; SD asserts its own CS (GPIO4).
  SPI.begin(M5StackCore2::Storage::kSclkPin, M5StackCore2::Storage::kMisoPin,
            M5StackCore2::Storage::kMosiPin, M5StackCore2::Storage::kCsPin);
  return SD.begin(M5StackCore2::Storage::kCsPin, SPI, frequencyHz, mountPoint, 5, false);
}

void end() { SD.end(); }

uint64_t cardSize() { return SD.cardSize(); }

CardType cardType() { return static_cast<CardType>(SD.cardType()); }

bool supportsFrequencySelection() { return false; }

bool setSdMmcPins() { return true; }

}  // namespace Board::Storage
