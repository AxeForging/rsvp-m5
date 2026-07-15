#pragma once
// One-shot demo seed so a freshly-flashed device with a blank SD has something
// to read. Content is original onboarding text plus retellings of Aesop's
// fables (public domain) -- safe to ship. ponytail: drop -DRSVP_SEED_SAMPLE_BOOK
// once books are loaded via the companion page or SD card.
namespace SeedBook {
inline constexpr const char* kFileName = "Welcome to RSVP M5.txt";
inline constexpr const char* kText = R"RSVP_SEED(
Welcome to RSVP M5

This is your reader. It shows one word at a time so your eyes stay still and your mind moves fast. Press the center button to play or pause. Press left to slow down and right to speed up. Swipe down from the top edge to open the menu.

To read your own books, copy .txt or .epub files onto the SD card, or open the menu and use Sync to send them over Wi-Fi. This short sampler is only here to get you started.

Take it slowly at first. Comfort matters more than the number. When a sentence slips past you, tap to rewind and read it again. The right speed is the fastest one that still feels easy.

The Tortoise and the Hare

A hare laughed at a tortoise for being slow, so the tortoise challenged him to a race. The hare sprinted far ahead, then lay down to nap, certain he had time to spare. The tortoise never stopped. Step after step, he passed the sleeping hare and crossed the line first. Slow and steady wins the race.

The Ant and the Grasshopper

All summer the grasshopper sang while the ant carried grain to her nest. When winter came, the grasshopper was cold and hungry, and the ant had food to spare. There is a time to work and a time to play, and the wise plan for the season ahead.

The Fox and the Grapes

A hungry fox saw grapes hanging from a high vine. He jumped again and again but could not reach them. At last he walked away, muttering that the grapes were sour anyway. It is easy to despise what you cannot have.

The Boy Who Cried Wolf

A shepherd boy amused himself by crying wolf when there was none, and laughing as the villagers ran to help. When a real wolf came, he cried out in earnest, but no one believed him, and the flock was lost. A liar is not believed even when he tells the truth.

The Lion and the Mouse

A lion caught a mouse and was about to eat him, but the mouse begged for his life and was let go. Later the lion was trapped in a hunter's net. The little mouse gnawed the ropes until the lion was free. No act of kindness is ever wasted, however small.

The North Wind and the Sun

The wind and the sun argued over who was stronger, and agreed the winner would be the one who could make a traveler remove his coat. The wind blew hard and cold, but the man only wrapped his coat tighter. Then the sun shone warm and gentle, and soon the man took the coat off himself. Gentleness accomplishes what force cannot.

You have reached the end of the sampler. Open the menu to load a book of your own, and happy reading.
)RSVP_SEED";
}  // namespace SeedBook
