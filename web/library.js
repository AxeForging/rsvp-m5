import {
  rsvpConvertBytesToRsvp,
  rsvpDefaultOutputMode,
  rsvpExtensionForName,
  rsvpSideCarSuffixes,
  rsvpStripExtension,
  rsvpSupportedExtensions,
} from "./generated/converter/rsvpnano_converter.mjs";

const DEFAULT_OUTPUT_MODE = rsvpDefaultOutputMode();
const SIDE_CAR_SUFFIXES = rsvpSideCarSuffixes();
const SUPPORTED_EXTENSIONS = new Set(rsvpSupportedExtensions());
const extensionForName = rsvpExtensionForName;
const stripExtension = rsvpStripExtension;

// Reading-speed baseline for the workspace's time estimates and the default preview speed. It is a
// display-only guide; the device reads at whatever WPM the user sets.
const ESTIMATE_WPM = 300;

// Free Library (starter catalog) display helpers.
const LANG_LABELS = { en: "English", ja: "日本語", zh: "中文", ko: "한국어" };
const CJK_CPM = 500; // characters/minute — CJK reading-time guide (no whitespace to count words)

const state = {
  items: [],
  starterBooks: [],
  directoryHandle: null,
  folderInventory: null,
  outputMode: DEFAULT_OUTPUT_MODE,
  isBusy: false,
  dragDepth: 0,
  nextId: 1,
  jszipPromise: null,
  previewTimer: null,
  previewWords: [],
  previewIndex: 0,
  previewWpm: ESTIMATE_WPM,
  previewPlaying: false,
};

const hasDocument = typeof document !== "undefined";

const elements = hasDocument
  ? {
      addButton: document.querySelector("#library-add-button"),
      clearButton: document.querySelector("#library-clear-button"),
      downloadButton: document.querySelector("#library-download-button"),
      dropzone: document.querySelector("#library-dropzone"),
      fileInput: document.querySelector("#library-file-input"),
      folderButton: document.querySelector("#library-folder-button"),
      folderCleanButton: document.querySelector("#library-folder-clean-button"),
      folderImportButton: document.querySelector("#library-folder-import-button"),
      folderLabel: document.querySelector("#library-folder-label"),
      folderSummary: document.querySelector("#library-folder-summary"),
      list: document.querySelector("#library-list"),
      starterList: document.querySelector("#starter-list"),
      starterSummary: document.querySelector("#starter-summary"),
      empty: document.querySelector("#library-empty"),
      status: document.querySelector("#library-status"),
      summary: document.querySelector("#library-summary"),
      summaryHeader: document.querySelector("#workspace-summary-header"),
      syncButton: document.querySelector("#library-sync-button"),
      modal: document.querySelector("#workspace-modal"),
      modalBody: document.querySelector("#workspace-modal-body"),
      modalClose: document.querySelector("#workspace-modal-close"),
    }
  : {};

if (hasDocument) {
  initialize();
}

function initialize() {
  if (!elements.addButton) {
    return;
  }

  elements.addButton.addEventListener("click", () => {
    elements.fileInput.click();
  });

  elements.fileInput.addEventListener("change", async (event) => {
    const files = Array.from(event.target.files || []);
    elements.fileInput.value = "";
    if (files.length > 0) {
      await importFiles(files, "upload");
    }
  });

  elements.clearButton.addEventListener("click", () => {
    state.items = [];
    renderLibrary();
    setStatus(
      "Library cleared",
      "The browser workspace is empty again. Add more books whenever you are ready.",
      "success",
    );
    refreshUi();
  });

  elements.downloadButton.addEventListener("click", async () => {
    await downloadLibraryZip();
  });

  elements.folderButton.addEventListener("click", async () => {
    await chooseBooksDirectory();
  });

  elements.folderImportButton.addEventListener("click", async () => {
    await importFromSelectedDirectory();
  });

  elements.folderCleanButton.addEventListener("click", async () => {
    await cleanSidecarsInSelectedDirectory();
  });

  elements.syncButton.addEventListener("click", async () => {
    await syncReadyBooksToSelectedDirectory();
  });

  elements.list.addEventListener("click", async (event) => {
    const button = event.target.closest("button[data-action]");
    if (!button) {
      return;
    }

    const itemId = Number(button.dataset.itemId);
    const item = state.items.find((entry) => entry.id === itemId);
    if (!item) {
      return;
    }

    const action = button.dataset.action;
    if (action === "remove") {
      state.items = state.items.filter((entry) => entry.id !== item.id);
      renderLibrary();
      refreshUi();
      return;
    }

    if (action === "download") {
      downloadTextBlob(item.outputName, item.outputText);
      return;
    }

    if (action === "preview") {
      openPreviewModal(item);
      return;
    }

    if (action === "rename") {
      openRenameModal(item);
      return;
    }

    if (action === "reconvert") {
      await reconvertSingleItem(item);
    }
  });

  if (elements.modal) {
    elements.modalClose.addEventListener("click", closeWorkspaceModal);
    elements.modal.addEventListener("click", (event) => {
      if (event.target === elements.modal) {
        closeWorkspaceModal();
      }
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !elements.modal.hidden) {
        closeWorkspaceModal();
      }
    });
  }

  elements.dropzone.addEventListener("dragenter", (event) => {
    event.preventDefault();
    state.dragDepth += 1;
    elements.dropzone.classList.add("is-active");
  });

  elements.dropzone.addEventListener("dragover", (event) => {
    event.preventDefault();
  });

  elements.dropzone.addEventListener("dragleave", (event) => {
    event.preventDefault();
    state.dragDepth = Math.max(0, state.dragDepth - 1);
    if (state.dragDepth === 0) {
      elements.dropzone.classList.remove("is-active");
    }
  });

  elements.dropzone.addEventListener("drop", async (event) => {
    event.preventDefault();
    state.dragDepth = 0;
    elements.dropzone.classList.remove("is-active");

    const files = Array.from(event.dataTransfer?.files || []).filter((file) => file.size >= 0);
    if (files.length > 0) {
      await importFiles(files, "upload");
    }
  });

  if (!supportsDirectoryAccess()) {
    elements.folderButton.disabled = true;
    elements.folderImportButton.disabled = true;
    elements.folderCleanButton.disabled = true;
    elements.syncButton.disabled = true;
    setStatus(
      "Browser setup required",
      "Folder sync needs Chrome or Edge with the File System Access API. Import and ZIP download still work in supporting browsers.",
      "info",
    );
  }

  initStarterLibrary();

  renderLibrary();
  refreshUi();
}

function supportsDirectoryAccess() {
  return typeof window.showDirectoryPicker === "function";
}

function refreshUi() {
  const readyItems = state.items.filter((item) => item.status === "ready");
  const totalWords = readyItems.reduce((sum, item) => sum + item.wordCount, 0);

  elements.summary.textContent =
    readyItems.length === 0
      ? "0 converted books ready"
      : `${readyItems.length} converted ${pluralize("book", readyItems.length)} ready, ${formatNumber(totalWords)} ${pluralize("word", totalWords)}, ~${estimateMinutes(totalWords)} min`;

  if (elements.summaryHeader) {
    elements.summaryHeader.textContent =
      readyItems.length === 0 ? "" : elements.summary.textContent;
  }

  elements.folderLabel.textContent = state.directoryHandle
    ? `/${state.directoryHandle.name}`
    : "No /books/books folder selected";

  if (state.folderInventory) {
    const { sources, rsvp, sidecars, unsupported } = state.folderInventory;
    const parts = [
      `${sources} source ${pluralize("file", sources)}`,
      `${rsvp} .rsvp ${pluralize("file", rsvp)}`,
      `${sidecars} sidecar ${pluralize("file", sidecars)}`,
    ];
    if (unsupported > 0) {
      parts.push(`${unsupported} other ${pluralize("file", unsupported)}`);
    }
    elements.folderSummary.textContent = parts.join(", ");
  } else {
    elements.folderSummary.textContent = "Pick the SD card’s /books/books folder to scan it";
  }

  const noFolder = !state.directoryHandle;
  const noReadyItems = readyItems.length === 0;
  const noItems = state.items.length === 0;

  elements.addButton.disabled = state.isBusy;
  elements.fileInput.disabled = state.isBusy;
  elements.downloadButton.disabled = state.isBusy || noReadyItems;
  elements.clearButton.disabled = state.isBusy || noItems;
  elements.folderButton.disabled = state.isBusy || !supportsDirectoryAccess();
  elements.folderImportButton.disabled =
    state.isBusy || !supportsDirectoryAccess() || noFolder;
  elements.folderCleanButton.disabled =
    state.isBusy || !supportsDirectoryAccess() || noFolder;
  elements.syncButton.disabled =
    state.isBusy || !supportsDirectoryAccess() || noFolder || noReadyItems;
}

function renderLibrary() {
  refreshItemWarnings();
  if (state.items.length === 0) {
    elements.list.innerHTML = "";
    elements.empty.hidden = false;
    return;
  }

  elements.empty.hidden = true;
  elements.list.innerHTML = state.items
    .map((item) => {
      const stateToken =
        item.status === "ready"
          ? "ready"
          : item.status === "error"
            ? "error"
            : "working";
      const statusLabel =
        item.status === "ready"
          ? "Ready"
          : item.status === "error"
            ? "Needs attention"
            : "Converting";
      const authorPill = item.author ? `<span class="pill">${escapeHtml(item.author)}</span>` : "";
      const warningCopy = item.warning
        ? `<p class="library-item-copy">${escapeHtml(item.warning)}</p>`
        : "";
      const detailCopy =
        item.status === "ready"
          ? `Output <code>${escapeHtml(item.outputName)}</code> from <code>${escapeHtml(item.sourceName)}</code>.`
          : item.status === "error"
            ? escapeHtml(item.error || "Conversion failed.")
            : "Reading source and building .rsvp output...";

      return `
        <li class="library-item">
          <div class="library-item-head">
            <div class="library-item-title">
              <strong>${escapeHtml(item.title || stripExtension(item.sourceName))}</strong>
              <span>${escapeHtml(item.sourceName)}</span>
            </div>
            <span class="pill" data-state="${stateToken}">${statusLabel}</span>
          </div>
          <div class="library-item-meta">
            <span class="pill">${escapeHtml(item.sourceExt.slice(1).toUpperCase())}</span>
            <span class="pill">${formatNumber(item.wordCount)} ${pluralize("word", item.wordCount)}</span>
            <span class="pill">${formatNumber(item.chapterCount)} ${pluralize("chapter", item.chapterCount)}</span>
            ${item.wordCount > 0 ? `<span class="pill">~${estimateMinutes(item.wordCount)} min</span>` : ""}
            ${authorPill}
          </div>
          <p class="library-item-copy">${detailCopy}</p>
          ${warningCopy}
          <div class="library-item-actions">
            ${
              item.status === "ready"
                ? `<button class="tool-button" type="button" data-action="preview" data-item-id="${item.id}">Preview</button>
                   <button class="tool-button" type="button" data-action="rename" data-item-id="${item.id}">Rename</button>
                   <button class="tool-button" type="button" data-action="download" data-item-id="${item.id}">Download</button>`
                : ""
            }
            <button class="tool-button" type="button" data-action="reconvert" data-item-id="${item.id}">
              Reconvert
            </button>
            <button class="tool-button" type="button" data-action="remove" data-item-id="${item.id}">
              Remove
            </button>
          </div>
        </li>
      `;
    })
    .join("");
}

// ---- Free Library (starter catalog served from web/library/) ----

function initStarterLibrary() {
  if (!elements.starterList) {
    return;
  }
  elements.starterList.addEventListener("click", async (event) => {
    const button = event.target.closest("button[data-action='add-starter']");
    if (!button) {
      return;
    }
    const book = state.starterBooks.find((entry) => entry.slug === button.dataset.slug);
    if (book) {
      await addStarterBook(book, button);
    }
  });
  loadStarterCatalog();
}

async function loadStarterCatalog() {
  try {
    const response = await fetch("library/library.json", { cache: "no-store" });
    if (!response.ok) {
      throw new Error(String(response.status));
    }
    const data = await response.json();
    state.starterBooks = Array.isArray(data.books) ? data.books : [];
    renderStarterLibrary();
  } catch {
    // No catalog served (e.g. local dev without the library/ folder) — hide the section quietly.
    const section = document.querySelector("#starter-section");
    if (section) {
      section.hidden = true;
    }
  }
}

function renderStarterLibrary() {
  const count = state.starterBooks.length;
  if (elements.starterSummary) {
    elements.starterSummary.textContent = count
      ? `${count} free ${pluralize("classic", count)}`
      : "";
  }

  elements.starterList.innerHTML = state.starterBooks
    .map((book) => {
      const isCjk = book.language !== "en";
      const langLabel = LANG_LABELS[book.language] || book.language.toUpperCase();
      const minutes = isCjk
        ? Math.max(1, Math.round(book.words / CJK_CPM))
        : estimateMinutes(book.words);
      const count = isCjk
        ? `${formatNumber(book.words)} characters`
        : `${formatNumber(book.words)} ${pluralize("word", book.words)}`;
      const slug = escapeHtml(book.slug);
      return `
        <li class="starter-item">
          <div class="starter-item-text">
            <strong>${escapeHtml(book.title)}</strong>
            <span class="starter-item-author">${escapeHtml(book.author)}</span>
          </div>
          <div class="starter-item-meta">
            <span class="pill">${escapeHtml(langLabel)}</span>
            <span class="starter-item-stat">${count} &middot; ~${minutes} min</span>
          </div>
          <div class="starter-item-actions">
            <button class="tool-button tool-button-primary" type="button" data-action="add-starter" data-slug="${slug}">Add</button>
            <a class="tool-button" href="library/${encodeURIComponent(book.slug)}.rsvp" download="${slug}.rsvp">Download</a>
          </div>
        </li>
      `;
    })
    .join("");
}

async function addStarterBook(book, button) {
  button.disabled = true;
  try {
    const response = await fetch(`library/${encodeURIComponent(book.slug)}.rsvp`, { cache: "no-store" });
    if (!response.ok) {
      throw new Error(String(response.status));
    }
    const text = await response.text();
    const file = new File([text], `${book.slug}.rsvp`, { type: "text/plain" });
    await importFiles([file], "library");

    // The .rsvp passthrough reports 0 words and a filename title, so overlay the real catalog
    // metadata onto the freshly imported item.
    const item = state.items.find((entry) => entry.key === `${book.slug}.rsvp`.toLowerCase());
    if (item) {
      item.title = book.title;
      item.author = book.author;
      item.wordCount = book.words;
      item.chapterCount = book.chapters;
      renderLibrary();
      refreshUi();
    }
    document
      .querySelector("#workspace-section")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  } catch {
    setStatus(
      "Could not add book",
      `${book.title} could not be loaded. Check your connection and try again.`,
      "error",
    );
  } finally {
    button.disabled = false;
  }
}

function setStatus(title, message, tone = "info") {
  elements.status.dataset.tone = tone;
  elements.status.innerHTML = `<strong>${escapeHtml(title)}</strong>${escapeHtml(message)}`;
}

async function withBusy(fn) {
  if (state.isBusy) {
    return;
  }
  state.isBusy = true;
  refreshUi();
  try {
    await fn();
  } catch (error) {
    setStatus(
      "Action interrupted",
      error instanceof Error ? error.message : String(error),
      "error",
    );
  } finally {
    state.isBusy = false;
    refreshUi();
  }
}

async function importFiles(files, origin) {
  const descriptors = files
    .map((file) => descriptorFromFile(file, origin))
    .filter((descriptor) => descriptor !== null);

  if (descriptors.length === 0) {
    setStatus(
      "No supported books found",
      "Bring in EPUB, TXT, Markdown, or HTML sources to convert them into .rsvp.",
      "error",
    );
    return;
  }

  await ingestDescriptors(descriptors, "Importing books");
}

function descriptorFromFile(file, origin) {
  const sourceExt = extensionForName(file.name);
  if (!SUPPORTED_EXTENSIONS.has(sourceExt)) {
    return null;
  }

  return {
    key: file.name.toLowerCase(),
    origin,
    sourceExt,
    sourceName: file.name,
    getFile: async () => file,
  };
}

function descriptorFromHandle(fileHandle) {
  const sourceExt = extensionForName(fileHandle.name);
  if (!SUPPORTED_EXTENSIONS.has(sourceExt)) {
    return null;
  }

  return {
    key: fileHandle.name.toLowerCase(),
    origin: "folder",
    sourceExt,
    sourceName: fileHandle.name,
    getFile: async () => fileHandle.getFile(),
  };
}

async function ingestDescriptors(descriptors, statusTitle) {
  await withBusy(async () => {
    const targets = [];

    for (const descriptor of descriptors) {
      let item = state.items.find((entry) => entry.key === descriptor.key);
      if (item) {
        item.descriptor = descriptor;
      } else {
        item = createLibraryItem(descriptor);
        state.items.push(item);
      }
      item.mode = state.outputMode;
      item.status = "working";
      item.error = "";
      item.warning = "";
      targets.push(item);
    }

    renderLibrary();
    refreshUi();

    for (let index = 0; index < targets.length; index += 1) {
      const item = targets[index];
      setStatus(
        statusTitle,
        `Converting ${index + 1} of ${targets.length}: ${item.sourceName}`,
        "busy",
      );
      await convertDescriptorIntoItem(item);
      renderLibrary();
      refreshUi();
    }

    const readyCount = targets.filter((item) => item.status === "ready").length;
    const failedCount = targets.length - readyCount;
    if (failedCount > 0) {
      setStatus(
        "Conversion finished with notes",
        `${readyCount} ${pluralize("book", readyCount)} converted, ${failedCount} ${pluralize("book", failedCount)} need another look.`,
        "error",
      );
    } else {
      setStatus(
        "Conversion complete",
        `${readyCount} ${pluralize("book", readyCount)} are ready to download or sync into /books/books.`,
        "success",
      );
    }
  });
}

function createLibraryItem(descriptor) {
  return {
    id: state.nextId++,
    key: descriptor.key,
    descriptor,
    sourceName: descriptor.sourceName,
    sourceExt: descriptor.sourceExt,
    status: "working",
    error: "",
    warning: "",
    title: stripExtension(descriptor.sourceName),
    author: "",
    outputName: `${stripExtension(descriptor.sourceName)}.rsvp`,
    outputText: "",
    wordCount: 0,
    chapterCount: 0,
    mode: state.outputMode,
  };
}

async function convertDescriptorIntoItem(item) {
  item.status = "working";
  item.error = "";
  item.warning = "";

  try {
    const file = await item.descriptor.getFile();
    const result = rsvpConvertBytesToRsvp(file.name, new Uint8Array(await file.arrayBuffer()));

    item.title = result.title || stripExtension(file.name);
    item.author = "";
    item.outputName = `${stripExtension(file.name)}.rsvp`;
    item.outputText = result.text;
    item.wordCount = result.wordCount;
    item.chapterCount = result.chapterCount;
    item.mode = state.outputMode;
    item.status = "ready";
  } catch (error) {
    item.status = "error";
    item.error = error instanceof Error ? error.message : String(error);
    item.outputText = "";
    item.wordCount = 0;
    item.chapterCount = 0;
  }
}

async function reconvertSingleItem(item) {
  await withBusy(async () => {
    setStatus("Re-converting book", `Building ${item.sourceName} again.`, "busy");
    await convertDescriptorIntoItem(item);
    renderLibrary();
    refreshUi();
    if (item.status === "ready") {
      setStatus("Book refreshed", `${item.sourceName} is ready again.`, "success");
    } else {
      setStatus("Could not rebuild book", item.error || "Conversion failed.", "error");
    }
  });
}

async function chooseBooksDirectory() {
  if (!supportsDirectoryAccess()) {
    return;
  }

  try {
    const directoryHandle = await window.showDirectoryPicker({ mode: "readwrite" });
    state.directoryHandle = directoryHandle;
    await scanSelectedDirectory(false);

    if (directoryHandle.name.toLowerCase() === "books") {
      setStatus(
        "Books folder selected",
        "The page can now scan, clean, and sync files directly inside /books/books.",
        "success",
      );
    } else {
      setStatus(
        "Folder selected",
        `You picked /${directoryHandle.name}. For best results, point this at the SD card’s /books/books folder.`,
        "info",
      );
    }
  } catch (error) {
    if (error?.name === "AbortError") {
      return;
    }
    setStatus(
      "Could not open folder",
      error instanceof Error ? error.message : String(error),
      "error",
    );
  } finally {
    refreshUi();
  }
}

async function importFromSelectedDirectory() {
  if (!state.directoryHandle) {
    return;
  }

  const descriptors = await scanSelectedDirectory(true);
  if (descriptors.length === 0) {
    setStatus(
      "No supported sources in folder",
      "The selected folder does not contain EPUB, TXT, Markdown, or HTML source files that need conversion.",
      "info",
    );
    return;
  }

  await ingestDescriptors(descriptors, "Importing from selected folder");
  await scanSelectedDirectory(false);
}

async function scanSelectedDirectory(includeDescriptors) {
  if (!state.directoryHandle) {
    state.folderInventory = null;
    refreshUi();
    return [];
  }

  const inventory = {
    sources: 0,
    rsvp: 0,
    sidecars: 0,
    unsupported: 0,
  };
  const descriptors = [];

  for await (const entry of state.directoryHandle.values()) {
    if (entry.kind !== "file" || entry.name.startsWith(".")) {
      continue;
    }

    const lowerName = entry.name.toLowerCase();
    if (SIDE_CAR_SUFFIXES.some((suffix) => lowerName.endsWith(suffix))) {
      inventory.sidecars += 1;
      continue;
    }
    if (lowerName.endsWith(".rsvp")) {
      inventory.rsvp += 1;
      continue;
    }

    const descriptor = descriptorFromHandle(entry);
    if (descriptor) {
      inventory.sources += 1;
      if (includeDescriptors) {
        descriptors.push(descriptor);
      }
    } else {
      inventory.unsupported += 1;
    }
  }

  state.folderInventory = inventory;
  refreshUi();
  return descriptors;
}

async function cleanSidecarsInSelectedDirectory() {
  if (!state.directoryHandle) {
    return;
  }

  await withBusy(async () => {
    const removableNames = [];
    let removed = 0;
    setStatus("Cleaning sidecars", "Removing leftover .failed, .tmp, and .converting files.", "busy");

    for await (const entry of state.directoryHandle.values()) {
      if (entry.kind !== "file") {
        continue;
      }
      const lowerName = entry.name.toLowerCase();
      if (!SIDE_CAR_SUFFIXES.some((suffix) => lowerName.endsWith(suffix))) {
        continue;
      }

      removableNames.push(entry.name);
    }

    for (const entryName of removableNames) {
      await state.directoryHandle.removeEntry(entryName);
      removed += 1;
    }

    await scanSelectedDirectory(false);
    setStatus(
      "Sidecars cleaned",
      removed === 0
        ? "There were no leftover conversion sidecars to remove."
        : `Removed ${removed} ${pluralize("sidecar file", removed)} from the selected folder.`,
      "success",
    );
  });
}

async function syncReadyBooksToSelectedDirectory() {
  if (!state.directoryHandle) {
    return;
  }

  const readyItems = state.items.filter((item) => item.status === "ready");
  if (readyItems.length === 0) {
    return;
  }
  const conflictingOutputs = duplicateOutputNamesFor(readyItems);
  if (conflictingOutputs.length > 0) {
    setStatus(
      "Resolve duplicate outputs first",
      `More than one source currently maps to ${conflictingOutputs.map((name) => `"${name}"`).join(", ")}. Remove or rename one of them before syncing to the SD card.`,
      "error",
    );
    return;
  }

  await withBusy(async () => {
    let written = 0;
    setStatus(
      "Syncing library",
      `Writing ${readyItems.length} ${pluralize("book", readyItems.length)} into the selected folder.`,
      "busy",
    );

    for (let index = 0; index < readyItems.length; index += 1) {
      const item = readyItems[index];
      setStatus(
        "Syncing library",
        `Writing ${index + 1} of ${readyItems.length}: ${item.outputName}`,
        "busy",
      );

      const fileHandle = await state.directoryHandle.getFileHandle(item.outputName, { create: true });
      const writable = await fileHandle.createWritable();
      await writable.write(item.outputText);
      await writable.close();

      await cleanupSidecarsForOutput(item.outputName);
      written += 1;
    }

    await scanSelectedDirectory(false);
    setStatus(
      "Sync complete",
      `Wrote ${written} ${pluralize("book", written)} into the selected folder.`,
      "success",
    );
  });
}

async function cleanupSidecarsForOutput(outputName) {
  const sidecarNames = [`${outputName}.failed`, `${outputName}.tmp`, `${outputName}.converting`];
  for (const sidecarName of sidecarNames) {
    try {
      await state.directoryHandle.removeEntry(sidecarName);
    } catch (error) {
      if (error?.name !== "NotFoundError") {
        throw error;
      }
    }
  }
}

async function downloadLibraryZip() {
  const readyItems = state.items.filter((item) => item.status === "ready");
  if (readyItems.length === 0) {
    return;
  }

  await withBusy(async () => {
    setStatus(
      "Building archive",
      `Packing ${readyItems.length} converted ${pluralize("book", readyItems.length)} into one ZIP download.`,
      "busy",
    );

    const JSZip = await loadJsZip();
    const archive = new JSZip();
    for (const item of readyItems) {
      archive.file(item.outputName, item.outputText);
    }

    const blob = await archive.generateAsync({ type: "blob" });
    downloadBlob("rsvp-m5-library.zip", blob);
    setStatus(
      "ZIP ready",
      "The converted library archive has been downloaded to your computer.",
      "success",
    );
  });
}

async function loadJsZip() {
  if (!state.jszipPromise) {
    state.jszipPromise = import("https://cdn.jsdelivr.net/npm/jszip@3.10.1/+esm").then(
      (module) => module.default,
    );
  }
  return state.jszipPromise;
}

function refreshItemWarnings() {
  const duplicateNames = new Set(duplicateOutputNamesFor(state.items.filter((item) => item.status === "ready")));
  for (const item of state.items) {
    const warnings = [];
    if (item.status === "ready" && duplicateNames.has(item.outputName)) {
      warnings.push(
        `Another source in the workspace also outputs ${item.outputName}. Sync is blocked until the collision is resolved.`,
      );
    }
    item.warning = warnings.join(" ");
  }
}

function duplicateOutputNamesFor(items) {
  const counts = new Map();
  for (const item of items) {
    counts.set(item.outputName, (counts.get(item.outputName) || 0) + 1);
  }
  return Array.from(counts.entries())
    .filter(([, count]) => count > 1)
    .map(([name]) => name);
}

function estimateMinutes(words) {
  return Math.max(1, Math.round(Number(words || 0) / ESTIMATE_WPM));
}

function sanitizeFatName(name) {
  return String(name)
    .replace(/[\\/:*?"<>|]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

// Replace the header @title line, or prepend one if the file lacks it. A function replacement avoids
// "$" substitution when the title contains "$". Body lines beginning with "@" are "@@"-escaped, so a
// bare "@title" only ever appears in the header block — the first match is always the real title.
function setRsvpTitle(text, title) {
  if (/^@title[ ].*$/m.test(text)) {
    return text.replace(/^@title[ ].*$/m, () => "@title " + title);
  }
  return "@title " + title + "\n" + text;
}

// --- Preview / rename shared modal ---

function orpIndex(len) {
  if (len <= 1) return 0;
  if (len <= 5) return 1;
  if (len <= 9) return 2;
  return 3;
}

function renderPreviewWord(word) {
  const i = orpIndex(word.length);
  return (
    `<span class="pre">${escapeHtml(word.slice(0, i))}</span>` +
    `<span class="orp">${escapeHtml(word[i] || "")}</span>` +
    `<span class="post">${escapeHtml(word.slice(i + 1))}</span>`
  );
}

// Body words only: drop directive/marker lines (single leading "@"), un-escape "@@" body lines.
function extractPreviewWords(text) {
  const words = [];
  for (const rawLine of String(text).split("\n")) {
    let line = rawLine;
    if (line.startsWith("@@")) {
      line = line.slice(1);
    } else if (line.startsWith("@")) {
      continue;
    }
    for (const word of line.trim().split(/\s+/)) {
      if (word) words.push(word);
    }
  }
  return words;
}

function openWorkspaceModal(html) {
  if (!elements.modal) {
    return;
  }
  elements.modalBody.innerHTML = html;
  elements.modal.hidden = false;
}

function stopPreviewTimer() {
  if (state.previewTimer !== null) {
    clearInterval(state.previewTimer);
    state.previewTimer = null;
  }
}

function closeWorkspaceModal() {
  stopPreviewTimer();
  state.previewPlaying = false;
  if (elements.modal) {
    elements.modal.hidden = true;
    elements.modalBody.innerHTML = "";
  }
}

function openRenameModal(item) {
  state.editingItemId = item.id;
  openWorkspaceModal(`
    <h2>Rename book</h2>
    <p>Sets the on-device title and the <code>.rsvp</code> filename.</p>
    <label class="workspace-field">Title
      <input type="text" id="rename-input" value="${escapeHtml(item.title || "")}" autocomplete="off">
    </label>
    <p class="workspace-note">File: <code id="rename-filename"></code></p>
    <div class="workspace-modal-actions">
      <button class="tool-button tool-button-primary" type="button" id="rename-save">Save</button>
      <button class="tool-button" type="button" id="rename-cancel">Cancel</button>
    </div>
  `);

  const input = document.querySelector("#rename-input");
  const filenameEl = document.querySelector("#rename-filename");
  const updateFilenamePreview = () => {
    const derived = sanitizeFatName(input.value);
    filenameEl.textContent = derived ? `${derived}.rsvp` : item.outputName;
  };
  updateFilenamePreview();
  input.addEventListener("input", updateFilenamePreview);
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      applyRename(item, input.value);
    }
  });
  document.querySelector("#rename-save").addEventListener("click", () => applyRename(item, input.value));
  document.querySelector("#rename-cancel").addEventListener("click", closeWorkspaceModal);
  input.focus();
  input.select();
}

function applyRename(item, rawTitle) {
  const title = String(rawTitle).trim();
  if (!title) {
    closeWorkspaceModal();
    return;
  }
  item.title = title;
  item.outputText = setRsvpTitle(item.outputText, title);
  const derived = sanitizeFatName(title);
  if (derived) {
    item.outputName = `${derived}.rsvp`;
  }
  refreshItemWarnings();
  renderLibrary();
  refreshUi();
  closeWorkspaceModal();
  setStatus("Book renamed", `Saved as ${item.outputName}.`, "success");
}

function openPreviewModal(item) {
  const words = extractPreviewWords(item.outputText);
  if (words.length === 0) {
    setStatus("Nothing to preview", `${item.sourceName} has no readable text.`, "error");
    return;
  }
  const opening = words.slice(0, 50).join(" ");
  const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  state.previewWords = words;
  state.previewIndex = 0;
  state.previewWpm = ESTIMATE_WPM;

  openWorkspaceModal(`
    <h2>${escapeHtml(item.title || stripExtension(item.sourceName))}</h2>
    <div class="rsvp-screen preview-screen">
      <span class="rsvp-guide"></span>
      <div class="rsvp-word" id="preview-word">${renderPreviewWord(words[0])}</div>
    </div>
    <p class="rsvp-meta"><span id="preview-wpm">${ESTIMATE_WPM} wpm</span> &middot; ${formatNumber(words.length)} ${pluralize("word", words.length)}</p>
    <div class="preview-controls">
      <button class="tool-button tool-button-primary" type="button" id="preview-playpause">Pause</button>
      <label class="preview-speed">Speed
        <input type="range" id="preview-speed" min="150" max="600" step="10" value="${ESTIMATE_WPM}">
      </label>
    </div>
    <p class="workspace-note preview-opening">${escapeHtml(opening)}${words.length > 50 ? "…" : ""}</p>
  `);

  document.querySelector("#preview-playpause").addEventListener("click", () => {
    if (state.previewPlaying) {
      pausePreview();
    } else {
      startPreview();
    }
  });

  const speed = document.querySelector("#preview-speed");
  speed.addEventListener("input", () => {
    state.previewWpm = Number(speed.value) || ESTIMATE_WPM;
    const wpmEl = document.querySelector("#preview-wpm");
    if (wpmEl) {
      wpmEl.textContent = `${state.previewWpm} wpm`;
    }
    if (state.previewPlaying) {
      startPreview(); // restart the interval at the new rate
    }
  });

  if (reduce) {
    pausePreview();
  } else {
    startPreview();
  }
}

function startPreview() {
  stopPreviewTimer();
  state.previewPlaying = true;
  const playPause = document.querySelector("#preview-playpause");
  if (playPause) {
    playPause.textContent = "Pause";
  }
  const intervalMs = Math.max(60, Math.round(60000 / state.previewWpm));
  state.previewTimer = setInterval(stepPreview, intervalMs);
}

function pausePreview() {
  stopPreviewTimer();
  state.previewPlaying = false;
  const playPause = document.querySelector("#preview-playpause");
  if (playPause) {
    playPause.textContent = "Play";
  }
}

function stepPreview() {
  const words = state.previewWords;
  const wordEl = document.querySelector("#preview-word");
  if (words.length === 0 || !wordEl) {
    stopPreviewTimer();
    return;
  }
  state.previewIndex = (state.previewIndex + 1) % words.length;
  wordEl.innerHTML = renderPreviewWord(words[state.previewIndex]);
}

function pluralize(noun, count) {
  return count === 1 ? noun : `${noun}s`;
}

function formatNumber(value) {
  return Number(value || 0).toLocaleString();
}

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function downloadTextBlob(filename, text) {
  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  downloadBlob(filename, blob);
}

function downloadBlob(filename, blob) {
  const objectUrl = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = objectUrl;
  anchor.download = filename;
  document.body.append(anchor);
  anchor.click();
  anchor.remove();
  setTimeout(() => {
    URL.revokeObjectURL(objectUrl);
  }, 1_000);
}
