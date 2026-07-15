#include <unity.h>

#include <vector>

#include "reader/ReadingLoop.h"
#include "text/CjkText.h"
#include "text/RsvpTokenizer.h"
#include "text/TextNormalizer.h"

// UTF-8 byte sequences written explicitly so the test does not depend on the source file's encoding.
namespace {
const char *kNihon = "\xe6\x97\xa5\xe6\x9c\xac";              // 日本 (nihon)
const char *kNihongo = "\xe6\x97\xa5\xe6\x9c\xac\xe8\xaa\x9e"; // 日本語 (nihongo)
const char *kHi = "\xe6\x97\xa5";                             // 日
const char *kHon = "\xe6\x9c\xac";                            // 本
const char *kGo = "\xe8\xaa\x9e";                             // 語
const char *kZhong = "\xe4\xb8\xad";                          // 中
const char *kWen = "\xe6\x96\x87";                            // 文

std::vector<String> tokenize(const String &line) {
  std::vector<String> tokens;
  size_t count = 0;
  RsvpText::ParseStats stats;
  RsvpText::appendLineWords(
      line,
      [&](const String &token) {
        tokens.push_back(token);
        ++count;
        return true;
      },
      count, &stats);
  return tokens;
}
}  // namespace

void setUp() {}
void tearDown() {}

// Latin text must be completely unaffected by the CJK changes.
void test_latin_tokenization_unchanged() {
  const std::vector<String> tokens = tokenize("Hello world reader");
  TEST_ASSERT_EQUAL_UINT(3, tokens.size());
  TEST_ASSERT_EQUAL_STRING("Hello", tokens[0].c_str());
  TEST_ASSERT_EQUAL_STRING("world", tokens[1].c_str());
  TEST_ASSERT_EQUAL_STRING("reader", tokens[2].c_str());
}

// normalize() used to drop every CJK codepoint; it must now pass them through as UTF-8 intact.
void test_normalize_preserves_cjk() {
  const String out = RsvpText::normalizeDisplayText(kNihon);
  TEST_ASSERT_EQUAL_STRING(kNihon, out.c_str());
}

// Each CJK character is its own RSVP flash: one token per codepoint, no space needed.
void test_cjk_segments_one_char_per_token() {
  const std::vector<String> tokens = tokenize(kNihongo);
  TEST_ASSERT_EQUAL_UINT(3, tokens.size());
  TEST_ASSERT_EQUAL_STRING(kHi, tokens[0].c_str());
  TEST_ASSERT_EQUAL_STRING(kHon, tokens[1].c_str());
  TEST_ASSERT_EQUAL_STRING(kGo, tokens[2].c_str());
}

// Mixed Latin+CJK with no space between: the Latin run stays one word, the CJK splits per char.
void test_mixed_latin_and_cjk() {
  const std::vector<String> tokens = tokenize(String("AI") + kNihon);
  TEST_ASSERT_EQUAL_UINT(3, tokens.size());
  TEST_ASSERT_EQUAL_STRING("AI", tokens[0].c_str());
  TEST_ASSERT_EQUAL_STRING(kHi, tokens[1].c_str());
  TEST_ASSERT_EQUAL_STRING(kHon, tokens[2].c_str());
}

// Whitespace between CJK chars is irrelevant -- still one token per char.
void test_cjk_with_interposed_space() {
  const std::vector<String> tokens = tokenize(String(kZhong) + " " + kWen);
  TEST_ASSERT_EQUAL_UINT(2, tokens.size());
  TEST_ASSERT_EQUAL_STRING(kZhong, tokens[0].c_str());
  TEST_ASSERT_EQUAL_STRING(kWen, tokens[1].c_str());
}

void test_is_cjk_codepoint_ranges() {
  TEST_ASSERT_TRUE(CjkText::isCjkCodepoint(0x65E5));   // 日 Han
  TEST_ASSERT_TRUE(CjkText::isCjkCodepoint(0x3042));   // あ Hiragana
  TEST_ASSERT_TRUE(CjkText::isCjkCodepoint(0x30A2));   // ア Katakana
  TEST_ASSERT_TRUE(CjkText::isCjkCodepoint(0xD55C));   // 한 Hangul syllable
  TEST_ASSERT_TRUE(CjkText::isCjkCodepoint(0x4E2D));   // 中 Han
  TEST_ASSERT_FALSE(CjkText::isCjkCodepoint('A'));
  TEST_ASSERT_FALSE(CjkText::isCjkCodepoint('7'));
  TEST_ASSERT_FALSE(CjkText::isCjkCodepoint(0x00E9));  // é Latin-1
}

void test_utf8_encode_decode_roundtrip() {
  String encoded;
  CjkText::appendUtf8(encoded, 0x65E5);
  TEST_ASSERT_EQUAL_STRING(kHi, encoded.c_str());

  size_t index = 0;
  uint32_t cp = 0;
  TEST_ASSERT_TRUE(CjkText::decodeUtf8At(encoded, index, cp));
  TEST_ASSERT_EQUAL_UINT32(0x65E5, cp);
  TEST_ASSERT_EQUAL_UINT(3, index);
}

// A CJK character carries a whole morpheme, so it dwells a little longer than a bare interval.
void test_cjk_char_dwells_longer_than_interval() {
  ReadingLoop r;
  r.setWpm(300);
  r.setWords({String(kHi)}, 0);
  TEST_ASSERT_GREATER_THAN_UINT32(r.wordIntervalMs(), r.currentWordDurationMs());
}

// Control: a single Latin character has no bonus and flashes at exactly the base interval.
void test_latin_single_char_has_no_bonus() {
  ReadingLoop r;
  r.setWpm(300);
  r.setWords({String("a")}, 0);
  TEST_ASSERT_EQUAL_UINT32(r.wordIntervalMs(), r.currentWordDurationMs());
}

// The ideographic full stop 。 pauses like a sentence end and marks the sentence boundary.
void test_cjk_full_stop_pauses_and_ends_sentence() {
  const char *fullStop = "\xe3\x80\x82";  // 。 U+3002
  ReadingLoop r;
  r.setWpm(300);
  r.setWords({String(fullStop)}, 0);
  TEST_ASSERT_GREATER_THAN_UINT32(r.wordIntervalMs() * 2, r.currentWordDurationMs());
  TEST_ASSERT_TRUE(r.currentWordEndsSentence());
}

int main(void) {
  UNITY_BEGIN();
  RUN_TEST(test_latin_tokenization_unchanged);
  RUN_TEST(test_normalize_preserves_cjk);
  RUN_TEST(test_cjk_segments_one_char_per_token);
  RUN_TEST(test_mixed_latin_and_cjk);
  RUN_TEST(test_cjk_with_interposed_space);
  RUN_TEST(test_is_cjk_codepoint_ranges);
  RUN_TEST(test_utf8_encode_decode_roundtrip);
  RUN_TEST(test_cjk_char_dwells_longer_than_interval);
  RUN_TEST(test_latin_single_char_has_no_bonus);
  RUN_TEST(test_cjk_full_stop_pauses_and_ends_sentence);
  return UNITY_END();
}
