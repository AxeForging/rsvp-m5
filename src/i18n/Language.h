#pragma once

// Compile-time reading language, chosen at flash time via the web flasher's language dropdown.
//
// It selects which single bundled efont the CJK reader references, so the linker drops the others
// (each ~0.5-0.7 MB). `en` references none and is the lightest build; the reader renders Latin text
// and shows tofu for CJK until the complete Noto VLW is downloaded to SD (Update flow), which then
// covers every script regardless of the compiled language. The suffix also names the per-language
// OTA/flasher assets so a device updates itself with the matching variant.
#define RSVP_LANG_EN 0
#define RSVP_LANG_JA 1
#define RSVP_LANG_ZH 2
#define RSVP_LANG_KO 3

#ifndef RSVP_LANG
#define RSVP_LANG RSVP_LANG_EN
#endif

#if RSVP_LANG == RSVP_LANG_JA
#define RSVP_LANG_SUFFIX "ja"
#elif RSVP_LANG == RSVP_LANG_ZH
#define RSVP_LANG_SUFFIX "zh"
#elif RSVP_LANG == RSVP_LANG_KO
#define RSVP_LANG_SUFFIX "ko"
#else
#define RSVP_LANG_SUFFIX "en"
#endif
