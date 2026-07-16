// Flash status is kept in memory for THIS SESSION ONLY — never persisted. A shared/kiosk
// browser must not show a previous visitor's "flashed / up to date" state, and "up to date"
// must reflect an actual device interaction (a flash this session), not a saved localStorage value.

function timeAgo(ts) {
  const s = Math.max(0, Math.floor((Date.now() - ts) / 1000));
  if (s < 60) return "just now";
  const m = Math.floor(s / 60);
  if (m < 60) return m + (m === 1 ? " minute ago" : " minutes ago");
  const h = Math.floor(m / 60);
  if (h < 24) return h + (h === 1 ? " hour ago" : " hours ago");
  const d = Math.floor(h / 24);
  return d + (d === 1 ? " day ago" : " days ago");
}

class InstallFirmware extends HTMLElement {
  connectedCallback() {
    this._init();
  }

  // The device bundles ONE reading language's font (the linker drops the rest), so the flasher
  // offers a per-language build. languages.json lists them; picking one re-points the installer at
  // that language's manifest. Falls back to a single English entry if the index is unavailable.
  async _init() {
    let languages = [{ code: "en", label: "English", manifest: "firmware/manifest-en.json" }];
    let defaultLang = "en";
    try {
      const r = await fetch("firmware/languages.json", { cache: "no-store" });
      if (r.ok) {
        const data = await r.json();
        if (Array.isArray(data.languages) && data.languages.length) languages = data.languages;
        if (data.default) defaultLang = data.default;
      }
    } catch (e) {
      /* keep the English fallback */
    }
    this._languages = languages;
    const initial = languages.find((l) => l.code === defaultLang) || languages[0];

    const hardwareLinks = [
      {
        title: "M5Stack Core2",
        url: "https://shop.m5stack.com/products/m5stack-core2-esp32-iot-development-kit-v1-1",
      },
    ];

    this.innerHTML = `
      <section class="card step-card" id="install-section">
        <button class="step-card-toggle" id="install-toggle" type="button" aria-expanded="true" aria-controls="install-content">
          <span class="section-header-main">
            <span class="step-number">1</span>
            <span class="section-header-label">
              <span class="section-kicker">Browser Flasher</span>
              <span class="section-title">Install Firmware</span>
            </span>
          </span>
          <span class="flash-history" id="flash-history"></span>
          <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </button>
        <div class="section-body" id="install-content">
          <div class="section-body-inner">
            <p>Flash the current browser installer manifest, then use the next steps to prepare books and sync them onto the SD card.</p>
            <p>Put the device in boot mode before starting the installer:</p>
            <ol>
              <li>Turn the device off.</li>
              <li>Hold <code>BOOT</code> while connecting a USB data cable.</li>
              <li>On Linux, if you use Chromium from Snap, run <code>sudo snap connect chromium:raw-usb</code> once, then restart Chromium.</li>
              <li>If the installer cannot connect, tap reset or power-cycle, then try again.</li>
            </ol>
          </div>
          <div class="section-body-inner">
            <div class="affiliate-links">
              <p class="affiliate-disclosure">
                Where to buy the supported hardware.
              </p>
              <div class="affiliate-link-list">
                ${hardwareLinks.map((link) => `
                <a href="${link.url}" target="_blank" rel="sponsored noopener">${link.title}</a>
                `).join("")}
              </div>
            </div>
            <div class="lang-picker">
              <label for="lang-select">Reading language</label>
              <select id="lang-select">
                ${this._languages.map((l) => `
                <option value="${l.code}" data-manifest="${l.manifest}" ${l.code === initial.code ? "selected" : ""}>${l.label}</option>
                `).join("")}
              </select>
              <p class="lang-note">The device bundles this language's font and reads it out of the box. Any build can download the full multi-script font later from the device Update menu.</p>
            </div>
            <div class="install-options">
              <div class="install-option" data-manifest="${initial.manifest}" data-title="M5Stack Core2">
                <div class="install-option-head">
                  <strong class="fw-version">M5Stack Core2</strong>
                  <span class="latest-badge"><span class="pulse-dot"></span>ESP32</span>
                </div>
                <p>Firmware for the M5Stack Core2 v1.1 (ESP32, AXP2101).</p>
                <ul class="feature-list"></ul>
                <div class="uptodate-badge" hidden>
                  <span class="uptodate-left">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Up to date
                  </span>
                  <span class="uptodate-right">
                    <span class="uptodate-version"></span>
                    <span class="uptodate-ago"></span>
                  </span>
                </div>
                <esp-web-install-button manifest="${initial.manifest}">
                  <button class="firmware-install-btn" slot="activate">Install Firmware</button>
                  <span slot="unsupported">Use Chrome or Edge on desktop with Web Serial support.</span>
                  <span slot="not-allowed">This page must be opened over HTTPS or localhost.</span>
                </esp-web-install-button>
                <p class="install-warning">Important: keep the device plugged in until the installer says it's done.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;

    this._section = this.querySelector("#install-section");
    this._historyEl = this.querySelector("#flash-history");

    const toggle = this.querySelector("#install-toggle");
    const content = this.querySelector("#install-content");
    toggle.addEventListener("click", () => {
      const collapsed = !this._section.classList.contains("is-collapsed");
      this._section.classList.toggle("is-collapsed", collapsed);
      toggle.setAttribute("aria-expanded", collapsed ? "false" : "true");
      content.hidden = collapsed;
    });

    this._showFlashHistory();
    this._autoCollapse();
    this._observeInstallDialog();

    const option = this.querySelector(".install-option");
    option.querySelector('button[slot="activate"]').addEventListener("click", () => {
      this._activeInstall = {
        manifest: option.dataset.manifest,
        title: option.dataset.title,
        version: option.dataset.version,
      };
    });

    const langSelect = this.querySelector("#lang-select");
    if (langSelect) {
      langSelect.addEventListener("change", () => {
        const chosen = langSelect.selectedOptions[0];
        option.dataset.manifest = chosen.dataset.manifest;
        delete option.dataset.version;
        delete option.dataset.available;
        this._loadManifest(option);
      });
    }

    this._loadManifest(option);
  }

  _loadManifest(option) {
    const title = option.dataset.title;
    const requested = option.dataset.manifest;
    fetch(requested, { cache: "no-store" })
      .then((r) => {
        if (!r.ok) throw new Error("Manifest unavailable");
        return r.json();
      })
      .then((m) => {
        // A slow response may land after the user switched language again -- ignore the stale one.
        if (option.dataset.manifest !== requested) return;
        option.dataset.available = "true";
        option.dataset.version = m.version;
        option.querySelector(".fw-version").textContent = title + " - " + m.version;
        if (m.features) {
          const ul = option.querySelector(".feature-list");
          ul.innerHTML = m.features.map(f => "<li>" + f + "</li>").join("");
        }
        // esp-web-tools fetches the manifest (and the .bin it names) through the ordinary
        // browser HTTP cache, so a visitor who flashed an earlier release gets served the
        // STALE manifest/binary -- the confirm dialog and the firmware lag a release behind.
        // Hand it our fresh (no-store) manifest as a blob, with absolute, version-keyed .bin
        // URLs so both are re-fetched whenever the release (or selected language) changes.
        try {
          const manifestUrl = new URL(option.dataset.manifest, document.baseURI);
          const fresh = JSON.parse(JSON.stringify(m));
          (fresh.builds || []).forEach((b) => (b.parts || []).forEach((p) => {
            const sep = p.path.indexOf("?") === -1 ? "?" : "&";
            p.path = new URL(p.path, manifestUrl).href + sep + "v=" + encodeURIComponent(m.version);
          }));
          const blobUrl = URL.createObjectURL(
            new Blob([JSON.stringify(fresh)], { type: "application/json" }));
          const espButton = option.querySelector("esp-web-install-button");
          if (espButton) espButton.setAttribute("manifest", blobUrl);
        } catch (e) {
          /* fall back to the static manifest attribute */
        }
        this._refreshInstallOption(option);
        this._showFlashHistory();
      })
      .catch(() => {
        if (option.dataset.manifest !== requested) return;
        option.dataset.available = "false";
        option.querySelector(".fw-version").textContent = title + " - unavailable";
        const ul = option.querySelector(".feature-list");
        ul.innerHTML = "<li>Not available in the latest published release yet.</li>";
        this._refreshInstallOption(option);
      });
  }

  _readFlashData() {
    return this._sessionFlash || null;
  }

  _showFlashHistory() {
    const data = this._readFlashData();
    if (!data || !data.timestamp) {
      this._historyEl.textContent = "No installations in history";
      this._historyEl.classList.remove("update-available");
      return;
    }

    const flashedOption = this._optionForFlashData(data);
    const hasUpdate =
      flashedOption?.dataset.version && data.version && flashedOption.dataset.version !== data.version;
    if (hasUpdate) {
      this._historyEl.textContent = "Update available";
      this._historyEl.classList.add("update-available");
    } else {
      const titleLabel = data.title ? data.title + " " : "";
      const versionLabel = data.version ? data.version + " " : "";
      this._historyEl.textContent = titleLabel + versionLabel + "flashed " + timeAgo(data.timestamp);
      this._historyEl.classList.remove("update-available");
    }
  }

  _autoCollapse() {
    const data = this._readFlashData();
    if (data && data.timestamp) {
      this._section.classList.add("is-collapsed");
      this.querySelector("#install-toggle").setAttribute("aria-expanded", "false");
      this.querySelector("#install-content").hidden = true;
    }
  }

  _optionForFlashData(data) {
    if (!data) return null;
    return Array.from(this.querySelectorAll(".install-option")).find((option) => {
      if (data.manifest) return option.dataset.manifest === data.manifest;
      if (data.title) return option.dataset.title === data.title;
      return false;
    }) || null;
  }

  _refreshInstallButtons() {
    this.querySelectorAll(".install-option").forEach((option) => this._refreshInstallOption(option));
  }

  _refreshInstallOption(option) {
    const data = this._readFlashData();
    const installBtn = option.querySelector(".firmware-install-btn");
    const uptodateBadge = option.querySelector(".uptodate-badge");
    const espButton = installBtn?.closest("esp-web-install-button");
    if (!installBtn || !uptodateBadge || !espButton) return;

    const version = option.dataset.version;
    const available = option.dataset.available !== "false";
    const sameFirmware = data?.manifest
      ? data.manifest === option.dataset.manifest
      : data?.title === option.dataset.title;
    const isUpToDate = sameFirmware && data?.version && version && data.version === version;
    const hasUpdate = sameFirmware && data?.version && version && data.version !== version;

    if (!available) {
      uptodateBadge.hidden = true;
      espButton.hidden = false;
      const reinstallLink = option.querySelector(".uptodate-reinstall");
      if (reinstallLink) reinstallLink.hidden = true;
      installBtn.disabled = true;
      installBtn.innerHTML = "<span>Not in latest release</span>";
    } else if (isUpToDate) {
      installBtn.disabled = false;
      uptodateBadge.hidden = false;
      espButton.hidden = true;
      const utdVersion = option.querySelector(".uptodate-version");
      const utdAgo = option.querySelector(".uptodate-ago");
      if (utdVersion) utdVersion.textContent = data.version;
      if (utdAgo) utdAgo.textContent = timeAgo(data.timestamp);

      let reinstallLink = option.querySelector(".uptodate-reinstall");
      if (!reinstallLink) {
        reinstallLink = document.createElement("button");
        reinstallLink.className = "uptodate-reinstall";
        reinstallLink.addEventListener("click", () => {
          espButton.style.position = "absolute";
          espButton.style.opacity = "0";
          espButton.style.pointerEvents = "none";
          espButton.hidden = false;
          installBtn.click();
          espButton.hidden = true;
          espButton.style.position = "";
          espButton.style.opacity = "";
          espButton.style.pointerEvents = "";
        });
        uptodateBadge.insertAdjacentElement("afterend", reinstallLink);
      }
      reinstallLink.textContent = "Install Firmware · " + version;
      reinstallLink.hidden = false;
    } else {
      installBtn.disabled = false;
      uptodateBadge.hidden = true;
      espButton.hidden = false;
      const reinstallLink = option.querySelector(".uptodate-reinstall");
      if (reinstallLink) reinstallLink.hidden = true;

      if (hasUpdate) {
        installBtn.innerHTML =
          '<span>' +
          '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px;margin-right:4px"><path d="M12 19V5"/><path d="M5 12l7-7 7 7"/></svg>' +
          "Update Firmware</span>" +
          '<span class="btn-version"><span>' + version + "</span>" +
          "<span>" + timeAgo(data.timestamp) + "</span></span>";
      } else {
        const versionTag = version
          ? '<span class="btn-version">' + version + "</span>"
          : "";
        installBtn.innerHTML = "<span>Install Firmware</span>" + versionTag;
      }
    }
  }

  _observeInstallDialog() {
    new MutationObserver((mutations) => {
      mutations.forEach((m) => {
        m.addedNodes.forEach((node) => {
          if (node.nodeName !== "EWT-INSTALL-DIALOG") return;

          let saved = false;
          const pollTimer = setInterval(() => {
            if (!document.body.contains(node)) { clearInterval(pollTimer); return; }
            if (saved || !node.shadowRoot) return;

            const msg = node.shadowRoot.querySelector("ewt-page-message");
            if (!msg || !msg.label || String(msg.label).indexOf("complete") === -1) return;

            saved = true;
            clearInterval(pollTimer);
            this._sessionFlash = {
              manifest: this._activeInstall?.manifest,
              title: this._activeInstall?.title,
              version: this._activeInstall?.version,
              timestamp: Date.now(),
            };
            this._showFlashHistory();
            this._refreshInstallButtons();
          }, 500);

          setTimeout(() => clearInterval(pollTimer), 600000);
        });
      });
    }).observe(document.body, { childList: true });
  }
}

customElements.define("install-firmware", InstallFirmware);
