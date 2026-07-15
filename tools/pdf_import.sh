#!/usr/bin/env bash
# Convert a PDF into a .txt the RSVP M5 firmware reads directly.
# The device has no PDF support; it opens .txt (and .rsvp). pdftotext (poppler)
# gives reliable reflowed prose that the on-device text handler normalizes.
#
# Usage: tools/pdf_import.sh <input.pdf> [output.txt]
# Then copy the .txt into /books/books on the SD card.
set -euo pipefail

in=${1:?usage: pdf_import.sh <input.pdf> [output.txt]}
out=${2:-${in%.pdf}.txt}

command -v pdftotext >/dev/null || { echo "need pdftotext (install poppler-utils)"; exit 1; }

# -nopgbrk drops page-break chars; default (no -layout) reflows columns to prose.
pdftotext -nopgbrk -- "$in" "$out"
echo "Wrote: $out ($(wc -w < "$out") words)"
echo "Copy it into /books/books on the SD card, then pick it from Books on the device."
