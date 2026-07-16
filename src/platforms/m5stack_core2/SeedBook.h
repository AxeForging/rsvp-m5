#pragma once
// One-shot demo seed so a freshly-flashed device has something to read. A single "language
// sampler" that shows every script the reader can display -- English, Japanese, Chinese, Korean --
// so CJK rendering is visible out of the box. Content is original onboarding text (safe to ship).
// Seeded as a normal .txt under /books/books, so it reads through the real pipeline and the user can
// delete it any time. kVersion drives one-time re-seeding when the content changes (see
// StorageManager::seedSampleBook); bump it whenever kText changes.
namespace SeedBook {
inline constexpr int kVersion = 2;
inline constexpr const char* kFileName = "Welcome to RSVP M5.txt";
inline constexpr const char* kText = R"RSVP_SEED(
Welcome to RSVP M5

This reader shows one word at a time so your eyes stay still and your mind moves fast. Press the center button to play or pause. Press left to slow down and right to speed up. Swipe down from the top edge to open the menu.

This welcome book is a language sampler: it shows every script the reader can display. To read your own books, copy .rsvp or .txt files onto the SD card, or use Sync to send them over Wi-Fi. You can delete this sampler any time to free space.

English

Take it slowly at first. Comfort matters more than the number on the screen. When a sentence slips past you, tap to rewind and read it again. The right speed is the fastest one that still feels easy.

Japanese

日本語も読めます。速読は、目を動かさずに一語ずつ読む技術です。漢字、ひらがな、カタカナが画面にきれいに表示されます。まずはゆっくり始めて、慣れてきたら少しずつ速くしましょう。

Chinese

中文也能阅读。快速阅读是一种一次显示一个字的技术，让眼睛保持不动，让思绪更快。简体汉字会清晰地显示在屏幕上。先慢慢来，习惯以后再加快速度。

Korean

한국어도 읽을 수 있습니다. 속독은 눈을 움직이지 않고 한 번에 한 단어씩 읽는 기술입니다. 한글이 화면에 또렷하게 표시됩니다. 처음에는 천천히 시작하고, 익숙해지면 조금씩 빠르게 읽어 보세요.

That is the end of the language sampler. Open the menu to load a book of your own, and happy reading.
)RSVP_SEED";
}  // namespace SeedBook
