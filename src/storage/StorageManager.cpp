#include "storage/StorageManager.h"

#include <cstdint>
#include "board/BoardStorage.h"

#include "book/BookMetadata.h"
#include "storage/fs/SdDiagnostics.h"
#include "storage/fs/StorageFiles.h"
#include "storage/fs/StoragePaths.h"
#include "storage/index/IndexedBook.h"

#ifdef RSVP_SEED_SAMPLE_BOOK
#include "platforms/m5stack_core2/SeedBook.h"
#endif

namespace {

    constexpr uint64_t kBytesPerMegabyte = 1024ULL * 1024ULL;

#ifdef RSVP_SEED_SAMPLE_BOOK
    // Version marker in /config (not scanned as a book) records which seed version was written, so
    // an updated sampler overwrites the old one exactly once and a user deletion is not undone on
    // every boot.
    int readSeededVersion(const String& path) {
        File file = Board::Storage::filesystem().open(path.c_str(), "r");
        if (!file) {
            return 0;
        }
        const String value = file.readString();
        file.close();
        return value.toInt();
    }

    void writeSeededVersion(const String& path, int version) {
        File file = Board::Storage::filesystem().open(path.c_str(), "w");
        if (!file) {
            return;
        }
        file.print(version);
        file.close();
    }

    // Drop the bundled language sampler onto the card so the reader has content out of the box.
    // Writes once per kVersion: fresh cards and content updates get it, but once the user deletes it
    // (kVersion unchanged) it stays gone.
    void seedSampleBook() {
        const String versionPath = String(StoragePaths::kConfigPath) + "/welcome.ver";
        if (readSeededVersion(versionPath) >= SeedBook::kVersion) {
            return;
        }
        const String path = String(StoragePaths::kBookFilesPath) + "/" + SeedBook::kFileName;
        File file = Board::Storage::filesystem().open(path.c_str(), "w");
        if (!file) {
            Serial.printf("[storage] seed: could not open %s\n", path.c_str());
            return;
        }
        const size_t written = file.print(SeedBook::kText);
        file.close();
        // Overwriting an older sampler: drop its stale index/progress sidecars so the reader
        // rebuilds from the new content instead of showing the previous version.
        Board::Storage::filesystem().remove(StoragePaths::indexedIndexPathFor(path));
        Board::Storage::filesystem().remove(StoragePaths::indexedDataPathFor(path));
        Board::Storage::filesystem().remove(StoragePaths::progressSidecarPathFor(path));
        writeSeededVersion(versionPath, SeedBook::kVersion);
        Serial.printf("[storage] seeded sampler v%d (%u bytes) -> %s\n", SeedBook::kVersion,
                      static_cast<unsigned>(written), path.c_str());
    }
#endif

} // namespace

void StorageManager::ignoreStatus(void* context, const char* title, const char* line1, const char* line2,
                                  int progressPercent) {
    (void) context;
    (void) title;
    (void) line1;
    (void) line2;
    (void) progressPercent;
}

void StorageManager::setStatusCallback(StatusCallback callback, void* context) {
    statusCallback_ = callback == nullptr ? &StorageManager::ignoreStatus : callback;
    statusContext_ = callback == nullptr ? nullptr : context;
}

bool StorageManager::begin() {
    mounted_ = false;
    clearBookCache();

    statusCallback_(statusContext_, "SD", "Mounting card", "", 5);
    int mountedFrequencyKhz = 0;
    if (SdDiagnostics::mountCard(mounted_, &mountedFrequencyKhz)) {
        const uint64_t sizeMb = Board::Storage::cardSize() / kBytesPerMegabyte;
        Serial.printf("[storage] SD initialized (%llu MB, %d kHz)\n", sizeMb, mountedFrequencyKhz);
        // Auto-create the library layout so a blank card just works.
        StorageFiles::ensureDirectory(StoragePaths::kBooksPath);
        StorageFiles::ensureDirectory(StoragePaths::kBookFilesPath);
        StorageFiles::ensureDirectory(StoragePaths::kArticleFilesPath);
        StorageFiles::ensureDirectory(StoragePaths::kConfigPath);
#ifdef RSVP_SEED_SAMPLE_BOOK
        seedSampleBook();
#endif
        statusCallback_(statusContext_, "SD", "Scanning books", "", 10);
        refreshBookPaths(false);
        return true;
    }

    Serial.println("[storage] SD init failed after retries");
    return false;
}

void StorageManager::end() {
    if (mounted_) {
        Board::Storage::end();
    }
    mounted_ = false;
    clearBookCache();
}

void StorageManager::refreshBooks(bool includeMetadata) {
    refreshBookPaths(includeMetadata);
}

size_t StorageManager::bookCount() const {
    return library_.paths.size();
}

String StorageManager::bookPath(size_t index) const {
    return BookLibrary::pathAt(library_, index);
}

bool StorageManager::bookIsArticle(size_t index) const {
    return BookLibrary::isArticle(library_, index);
}

String StorageManager::bookDisplayName(size_t index) const {
    return BookLibrary::displayName(library_, index);
}

String StorageManager::bookAuthorName(size_t index) const {
    return BookLibrary::authorName(library_, index);
}

bool StorageManager::loadIndexedBook(size_t index, IndexedBookStore& store, BookMetadata& metadata,
                                     const IndexedBookLoadOptions& options) {
    if (!mounted_) {
        Serial.println("[storage] SD not mounted, cannot load indexed book");
        statusCallback_(statusContext_, "Book open failed", "SD not mounted", "Check card", 100);
        return false;
    }

    IndexedBook::OpenRequest request;
    request.loadedPath = options.loadedPath;
    request.loadedIndex = options.loadedIndex;
    request.allowIndexBuild = options.allowIndexBuild;
    request.statusCallback = statusCallback_;
    request.statusContext = statusContext_;
    return IndexedBook::load(index, library_, store, metadata, request);
}

StorageManager::DiagnosticResult StorageManager::diagnoseSdCard() {
    DiagnosticResult result = SdDiagnostics::diagnoseCard(mounted_, statusCallback_, statusContext_);
    if (!result.booksDirectory || !result.bookFilesDirectory || !result.articleFilesDirectory
        || !result.configDirectory) {
        return result;
    }

    {
        // Refresh the library view used by both diagnostics and the app facade.
        statusCallback_(statusContext_, "SD check", "Scanning /books", "", 45);
        BookLibrary::refresh(library_, true);
        result.bookCount = library_.paths.size();
        result.unsupportedCount = BookLibrary::unsupportedFileCount();
    }

    {
        // Probe every required folder before reporting the card as writable.
        SdDiagnostics::probeWritableFolders(result, statusCallback_, statusContext_);
        if (!result.writable || !result.booksWritable || !result.articlesWritable || !result.configWritable) {
            return result;
        }
    }

    if (result.bookCount == 0) {
        result.summary = "No books found";
        if (result.unsupportedCount > 0) {
            result.detail = "Use .rsvp .txt";
        } else {
            result.detail = "Upload to /books/books";
        }
        Serial.printf("[sd-check] no supported books; unsupported=%u\n",
                      static_cast<unsigned int>(result.unsupportedCount));
        return result;
    }

    result.summary = String(result.bookCount) + " books OK";
    result.detail = result.cardType + " " + String(static_cast<unsigned int>(result.sizeMb)) + " MB";
    Serial.printf("[sd-check] OK books=%u unsupported=%u writable=%u\n", static_cast<unsigned int>(result.bookCount),
                  static_cast<unsigned int>(result.unsupportedCount), result.writable ? 1 : 0);
    return result;
}

bool StorageManager::repairSdCardFolders() {
    return SdDiagnostics::repairFolderLayout(mounted_);
}

void StorageManager::refreshBookPaths(bool includeMetadata) {
    if (!mounted_) {
        clearBookCache();
        return;
    }

    statusCallback_(statusContext_, "SD", "Reading library", "", 96);
    BookLibrary::refresh(library_, includeMetadata);
}

void StorageManager::clearBookCache() {
    BookLibrary::clear(library_);
}
