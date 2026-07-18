#!/usr/bin/env bash
# Regenerate web/library/*.rsvp + web/library/library.json from public-domain sources.
#
# Nothing raw is committed — only the .rsvp artifacts and the catalog. Re-run to rebuild:
#   ./tools/build_library.sh
# Needs: node, curl, iconv, unzip, awk, sed (all standard). Run from anywhere.
set -euo pipefail
cd "$(dirname "$0")/.."

OUT="web/library"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT
mkdir -p "$OUT"
rm -f "$OUT"/*.rsvp

ITEMS=()

# Project Gutenberg EPUBs (structured chapters + real text markers). slug|title|author|lang|id
EPUB_BOOKS=(
  "the-yellow-wallpaper|The Yellow Wallpaper|Charlotte Perkins Gilman|en|1952"
  "metamorphosis|The Metamorphosis|Franz Kafka|en|5200"
  "jekyll-and-hyde|The Strange Case of Dr Jekyll and Mr Hyde|Robert Louis Stevenson|en|43"
  "alice-in-wonderland|Alice's Adventures in Wonderland|Lewis Carroll|en|11"
  "a-christmas-carol|A Christmas Carol|Charles Dickens|en|46"
  "the-time-machine|The Time Machine|H. G. Wells|en|35"
  "aesops-fables|Aesop's Fables|Aesop|en|21"
  "frankenstein|Frankenstein|Mary Shelley|en|84"
  "dorian-gray|The Picture of Dorian Gray|Oscar Wilde|en|174"
  "sherlock-holmes|The Adventures of Sherlock Holmes|Arthur Conan Doyle|en|1661"
  "pride-and-prejudice|Pride and Prejudice|Jane Austen|en|1342"
  "tao-te-ching|道德經|老子|zh|7337"
)

# Rebuild a clean header, then keep the real book text: discard everything after the *** END ***
# marker (the license), discard everything before a *** START *** marker when one is present (the
# frontmatter), and drop spurious "@chapter … PROJECT GUTENBERG …" headings the converter
# mis-detects mid-text plus standalone "Produced by …" credit lines. START-independent so it also
# handles older EPUBs (e.g. #43) that ship an END marker but no START.
# ponytail: a real prose line that wraps to begin "Produced by " would be clipped — vanishingly rare.
strip_epub() {  # rsvp_in title author slug
  awk -v title="$2" -v author="$3" -v slug="$4" '
    /^\*\*\* *END OF TH(E|IS) PROJECT GUTENBERG/   { ended=1 }
    ended { next }
    /^\*\*\* *START OF TH(E|IS) PROJECT GUTENBERG/ { n=0; next }              # drop frontmatter before START
    /^@rsvp/ || /^@title / || /^@author/ || /^@source / { next }             # drop original header (rebuilt below)
    { buf[n++] = $0 }
    END {
      print "@rsvp 1"; print "@title " title; print "@author " author; print "@source " slug ".rsvp"; print ""
      seen = 0; blanks = 0
      for (i = 0; i < n; i++) {
        l = buf[i]
        if (l ~ /^@chapter .*PROJECT GUTENBERG/) continue
        if (l ~ /^Produced by /) continue
        if (l == "") { if (!seen) continue; if (++blanks > 1) continue } else { blanks = 0; seen = 1 }
        print l
      }
    }
  ' "$1"
}

# "words<TAB>chapters" for the catalog. English counts words; CJK (no spaces) counts characters.
counts() {  # rsvpfile lang
  local f="$1" lang="$2" words chapters
  if [ "$lang" = "en" ]; then
    words=$(grep -v '^@' "$f" | wc -w | tr -d ' ')
  else
    words=$(grep -v '^@' "$f" | tr -d '[:space:]' | wc -m | tr -d ' ')
  fi
  chapters=$(grep -c '^@chapter' "$f" || true)
  [ "${chapters:-0}" -lt 1 ] && chapters=1
  printf '%s\t%s' "$words" "$chapters"
}

add_item() {  # slug title author language words chapters source
  ITEMS+=("$(printf '    { "slug": "%s", "title": "%s", "author": "%s", "language": "%s", "words": %s, "chapters": %s, "source": "%s" }' \
    "$1" "$2" "$3" "$4" "$5" "$6" "$7")")
}

echo ">> Project Gutenberg (EPUB)"
for row in "${EPUB_BOOKS[@]}"; do
  IFS='|' read -r slug title author lang id <<<"$row"
  echo "   - $title"
  curl -sfL --max-time 90 "https://www.gutenberg.org/ebooks/$id.epub.noimages" -o "$TMP/$slug.epub"
  node web/converter_cli.cjs book "$TMP/$slug.epub" "$TMP/$slug.raw"
  strip_epub "$TMP/$slug.raw" "$title" "$author" "$slug" > "$OUT/$slug.rsvp"
  IFS=$'\t' read -r words chapters <<<"$(counts "$OUT/$slug.rsvp" "$lang")"
  add_item "$slug" "$title" "$author" "$lang" "$words" "$chapters" "Project Gutenberg"
done

# Japanese: Aozora Bunko text (Shift-JIS). Strip the header (before the 2nd ---- rule), the
# 底本 footer, ruby readings 《…》 / ｜, and ［＃…］ input notes, then convert as plain text.
echo ">> Aozora Bunko"
echo "   - 坊っちゃん"
curl -sfL --max-time 60 "https://raw.githubusercontent.com/aozorabunko/aozorabunko/master/cards/000148/files/752_ruby_2438.zip" -o "$TMP/botchan.zip"
unzip -o -d "$TMP/botchan" "$TMP/botchan.zip" >/dev/null
iconv -f SHIFT_JIS -t UTF-8 "$TMP/botchan/bocchan.txt" \
  | awk 'BEGIN{d=0} /^-{10,}/{d++; next} d>=2{print}' \
  | sed -e '/^底本：/,$d' -e 's/《[^》]*》//g' -e 's/｜//g' -e 's/［＃[^］]*］//g' \
  > "$TMP/botchan.txt"
node web/converter_cli.cjs text "$TMP/botchan.txt" "$TMP/botchan.raw" "坊っちゃん"
awk '/^@author/{next} {print} /^@title /&&!d{print "@author 夏目漱石"; d=1}' "$TMP/botchan.raw" > "$OUT/botchan.rsvp"
IFS=$'\t' read -r words chapters <<<"$(counts "$OUT/botchan.rsvp" "ja")"
add_item "botchan" "坊っちゃん" "夏目漱石" "ja" "$words" "$chapters" "Aozora Bunko"

# ---- Write catalog ----
{
  echo '{'
  echo '  "books": ['
  ( IFS=$',\n'; echo "${ITEMS[*]}" )
  echo '  ]'
  echo '}'
} > "$OUT/library.json"

echo ">> Wrote $OUT/library.json (${#ITEMS[@]} books, $(du -sh "$OUT" | cut -f1) total)"
