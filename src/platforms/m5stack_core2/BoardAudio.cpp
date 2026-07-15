#include "board/BoardAudio.h"

// NS4168 I2S speaker stub. Not needed for reading; add a driver later if the
// beep/audio cues are wanted on Core2.
namespace Board::Audio {

bool begin() { return false; }

bool beep() { return false; }

bool available() { return false; }

}  // namespace Board::Audio
