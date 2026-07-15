#pragma once

#include <Arduino.h>
#include <stdint.h>

// CJK (Chinese/Japanese/Korean) codepoint classification + UTF-8 helpers.
//
// The reader stores text as UTF-8 Strings and splits into whitespace-delimited "words". CJK scripts
// have no spaces and each ideograph/kana/syllable is information-dense, so we segment CJK runs into
// one codepoint per RSVP flash (see RsvpTokenizer). These helpers are the shared primitives: what
// counts as a CJK codepoint, and encode/decode between codepoints and UTF-8 bytes.
namespace CjkText {

// Readable CJK ranges (BMP + supplementary ideographs). Deliberately broad: Japanese kana, Chinese
// (Simplified + Traditional) Han, Korean Hangul + Jamo, plus the CJK symbol/punctuation blocks so
// marks like 、。！？「」 stay attached to the script instead of being dropped. Fullwidth ASCII
// (0xFF01-0xFF5E) is already folded to ASCII upstream in TextNormalizer, so its presence here only
// covers the fullwidth codepoints that survive (e.g. halfwidth katakana 0xFF61-0xFF9F).
inline bool isCjkCodepoint(uint32_t cp) {
  return (cp >= 0x1100 && cp <= 0x11FF) ||   // Hangul Jamo
         (cp >= 0x2E80 && cp <= 0x2EFF) ||   // CJK Radicals Supplement
         (cp >= 0x3000 && cp <= 0x303F) ||   // CJK Symbols and Punctuation
         (cp >= 0x3040 && cp <= 0x30FF) ||   // Hiragana + Katakana
         (cp >= 0x3100 && cp <= 0x312F) ||   // Bopomofo
         (cp >= 0x3130 && cp <= 0x318F) ||   // Hangul Compatibility Jamo
         (cp >= 0x3190 && cp <= 0x319F) ||   // Kanbun
         (cp >= 0x31A0 && cp <= 0x31BF) ||   // Bopomofo Extended
         (cp >= 0x31C0 && cp <= 0x31EF) ||   // CJK Strokes
         (cp >= 0x31F0 && cp <= 0x31FF) ||   // Katakana Phonetic Extensions
         (cp >= 0x3200 && cp <= 0x33FF) ||   // Enclosed CJK + CJK Compatibility
         (cp >= 0x3400 && cp <= 0x4DBF) ||   // CJK Unified Ideographs Extension A
         (cp >= 0x4E00 && cp <= 0x9FFF) ||   // CJK Unified Ideographs
         (cp >= 0xA960 && cp <= 0xA97F) ||   // Hangul Jamo Extended-A
         (cp >= 0xAC00 && cp <= 0xD7A3) ||   // Hangul Syllables
         (cp >= 0xD7B0 && cp <= 0xD7FF) ||   // Hangul Jamo Extended-B
         (cp >= 0xF900 && cp <= 0xFAFF) ||   // CJK Compatibility Ideographs
         (cp >= 0xFE30 && cp <= 0xFE4F) ||   // CJK Compatibility Forms
         (cp >= 0xFF61 && cp <= 0xFF9F) ||   // Halfwidth Katakana
         (cp >= 0x20000 && cp <= 0x3FFFF);   // CJK Unified Ideographs Extension B-G
}

// Append `cp` to `target` as UTF-8. Invalid/surrogate codepoints are skipped.
inline void appendUtf8(String &target, uint32_t cp) {
  if (cp < 0x80) {
    target += static_cast<char>(cp);
  } else if (cp < 0x800) {
    target += static_cast<char>(0xC0 | (cp >> 6));
    target += static_cast<char>(0x80 | (cp & 0x3F));
  } else if (cp < 0x10000) {
    if (cp >= 0xD800 && cp <= 0xDFFF) {
      return;
    }
    target += static_cast<char>(0xE0 | (cp >> 12));
    target += static_cast<char>(0x80 | ((cp >> 6) & 0x3F));
    target += static_cast<char>(0x80 | (cp & 0x3F));
  } else if (cp <= 0x10FFFF) {
    target += static_cast<char>(0xF0 | (cp >> 18));
    target += static_cast<char>(0x80 | ((cp >> 12) & 0x3F));
    target += static_cast<char>(0x80 | ((cp >> 6) & 0x3F));
    target += static_cast<char>(0x80 | (cp & 0x3F));
  }
}

// Decode one UTF-8 codepoint at `text[index]`. On success, advances `index` past the sequence, sets
// `cp`, and returns true. On any malformation (bad lead, truncated, overlong, surrogate), leaves
// `index` untouched and returns false so the caller can fall back to single-byte handling.
inline bool decodeUtf8At(const String &text, size_t &index, uint32_t &cp) {
  const size_t len = text.length();
  if (index >= len) {
    return false;
  }
  const uint8_t first = static_cast<uint8_t>(text[index]);
  uint8_t continuation = 0;
  uint32_t value = 0;
  uint32_t minimum = 0;
  if (first < 0x80) {
    cp = first;
    ++index;
    return true;
  } else if ((first & 0xE0) == 0xC0) {
    value = first & 0x1F;
    continuation = 1;
    minimum = 0x80;
  } else if ((first & 0xF0) == 0xE0) {
    value = first & 0x0F;
    continuation = 2;
    minimum = 0x800;
  } else if ((first & 0xF8) == 0xF0) {
    value = first & 0x07;
    continuation = 3;
    minimum = 0x10000;
  } else {
    return false;
  }

  if (index + 1 + continuation > len) {
    return false;
  }
  for (uint8_t i = 0; i < continuation; ++i) {
    const uint8_t next = static_cast<uint8_t>(text[index + 1 + i]);
    if ((next & 0xC0) != 0x80) {
      return false;
    }
    value = (value << 6) | (next & 0x3F);
  }

  if (value < minimum || value > 0x10FFFF || (value >= 0xD800 && value <= 0xDFFF)) {
    return false;
  }
  cp = value;
  index += 1 + continuation;
  return true;
}

}  // namespace CjkText
