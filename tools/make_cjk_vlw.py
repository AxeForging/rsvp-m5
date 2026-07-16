#!/usr/bin/env python3
"""Generate a LovyanGFX/M5GFX VLW font from Noto Sans CJK for the RSVP M5 reader.

VLW is the anti-aliased bitmap font M5GFX can loadFont() from the SD card and stream glyph-by-glyph,
so a large, complete CJK font lives on the card instead of in the (tiny) firmware image. Rendering it
at native size is crisp -- unlike scaling the bundled 24px efont, which is what looked jagged.

Format (big-endian), reversed from lgfx VLWfont::loadFont:
  header: 6 x uint32  = gCount, version(11), fontSizePt, 0, ascent, descent
  metadata: gCount x 7 x uint32, SORTED by unicode ascending (loader binary-searches):
            unicode, height, width, xAdvance, dY (baseline->glyph top, +up), dX (left bearing), 0
  bitmap:   per glyph in the same order, width*height bytes of 8-bit alpha

Usage: make_cjk_vlw.py --out cjk.vlw --size 30 [--coverage full|common]
"""
import argparse
import struct
import sys

from PIL import ImageFont
from fontTools.ttLib import TTCollection

NOTO_TTC = "/usr/share/fonts/google-noto-sans-cjk-vf-fonts/NotoSansCJK-VF.ttc"
FACE_INDEX = 0  # Noto Sans CJK JP -- one face covers Han (all), kana, Hangul, Latin

# (start, end) inclusive BMP ranges. VLW unicodes are 16-bit, so BMP only (covers all common CJK).
RANGES_BASE = [
    (0x0020, 0x00FF),  # Latin + Latin-1
    (0x2010, 0x206F),  # general punctuation (quotes, dashes, ellipsis)
    (0x3000, 0x303F),  # CJK symbols & punctuation
    (0x3040, 0x309F),  # Hiragana
    (0x30A0, 0x30FF),  # Katakana
    (0x3400, 0x4DBF),  # CJK Ext-A
    (0x4E00, 0x9FFF),  # CJK Unified Ideographs
    (0xAC00, 0xD7A3),  # Hangul syllables
    (0xF900, 0xFAFF),  # CJK compatibility ideographs
    (0xFF00, 0xFFEF),  # halfwidth/fullwidth forms
]
# "common" trims the two biggest blocks to the frequently-used sub-ranges to cut file size ~60%.
RANGES_COMMON = [
    (0x0020, 0x00FF), (0x2010, 0x206F), (0x3000, 0x303F), (0x3040, 0x309F), (0x30A0, 0x30FF),
    (0x4E00, 0x9FA5),  # CJK Unified (drop the sparse tail)
    (0xAC00, 0xD7A3),  # Hangul syllables (kept full -- Korean needs them)
    (0xFF00, 0xFFEF),
]


def codepoints(ranges, cmap):
    seen = set()
    for start, end in ranges:
        for cp in range(start, end + 1):
            if cp in cmap and cp not in seen:
                seen.add(cp)
    return sorted(seen)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--out", required=True)
    ap.add_argument("--size", type=int, default=30, help="pixel size")
    ap.add_argument("--coverage", choices=["full", "common"], default="full")
    ap.add_argument("--weight", type=float, default=500.0, help="variable-font weight axis")
    args = ap.parse_args()

    cmap = TTCollection(NOTO_TTC).fonts[FACE_INDEX].getBestCmap()
    font = ImageFont.truetype(NOTO_TTC, args.size, index=FACE_INDEX)
    try:
        font.set_variation_by_axes([args.weight])
    except Exception as exc:  # noqa: BLE001
        print(f"[warn] could not set weight axis ({exc}); using default", file=sys.stderr)

    ascent, descent = font.getmetrics()
    ranges = RANGES_BASE if args.coverage == "full" else RANGES_COMMON
    cps = codepoints(ranges, cmap)
    print(f"[vlw] {len(cps)} glyphs @ {args.size}px, ascent={ascent} descent={descent}")

    meta = bytearray()
    bitmaps = bytearray()
    kept = 0
    for cp in cps:
        ch = chr(cp)
        mask, (ox, oy) = font.getmask2(ch, mode="L")
        w, h = mask.size
        xadv = round(font.getlength(ch))
        if w == 0 or h == 0:  # whitespace etc. -- keep metrics, no bitmap
            w = h = 0
        dY = ascent - oy  # baseline (at y=ascent from line top) to glyph-bitmap top, positive up
        dX = ox
        meta += struct.pack(">IIIiiiI", cp, h, w, xadv, dY, dX, 0)
        if w and h:
            bitmaps += bytes(mask)
        kept += 1

    header = struct.pack(">IIIIII", kept, 11, args.size, 0, ascent, descent)
    with open(args.out, "wb") as fh:
        fh.write(header)
        fh.write(meta)
        fh.write(bitmaps)

    total = 24 + len(meta) + len(bitmaps)
    print(f"[vlw] wrote {args.out}: {total/1024/1024:.2f} MB "
          f"(meta {len(meta)//1024} KB, bitmaps {len(bitmaps)/1024/1024:.2f} MB)")


if __name__ == "__main__":
    main()
