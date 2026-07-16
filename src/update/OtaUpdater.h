#pragma once

#include <Arduino.h>

#include "board/BoardConfig.h"

class OtaUpdater {
 public:
  using StatusCallback = void (*)(void *context, const char *title, const char *line1,
                                  const char *line2, int progressPercent);

  struct Config {
    String wifiSsid;
    String wifiPassword;
    String githubOwner = "AxeForging";
    String githubRepo = "rsvp-m5";
    String githubTag;
    String assetName = Board::Config::OTA_ASSET_NAME;
    bool autoCheck = false;
  };

  enum class ResultCode : uint8_t {
    Success,
    NoUpdate,
    UpdateAvailable,
    NotConfigured,
    ConnectFailed,
    MetadataFailed,
    AssetMissing,
    AssetMismatch,
    InstallFailed,
  };

  struct Result {
    ResultCode code = ResultCode::MetadataFailed;
    String currentVersion;
    String latestVersion;
    String summary;
    String detail;
    bool rebootRequired = false;
  };

  bool loadConfig(Config &config) const;
  bool isConfigured(const Config &config) const;
  String currentVersion() const;
  Result checkOnly(const Config &config, StatusCallback callback = nullptr,
                   void *context = nullptr) const;
  Result checkAndInstall(const Config &config, StatusCallback callback = nullptr,
                         void *context = nullptr) const;

  // Download a release asset (by name) to a file on the SD card, streaming (for large assets like
  // the CJK font). Reuses the Wi-Fi + release-lookup + redirect-resolve path. Result.code is
  // Success on completion; the file is removed on a partial download.
  Result downloadAssetToSd(const Config &config, const String &assetName, const char *sdPath,
                           StatusCallback callback = nullptr, void *context = nullptr) const;

 private:
  struct LatestRelease {
    String tagName;
    String assetUrl;
  };

  bool loadConfigFromPath(const char *path, Config &config) const;
  bool connectWiFi(const Config &config, StatusCallback callback, void *context) const;
  void disconnectWiFi() const;
  bool fetchRelease(const Config &config, LatestRelease &release, String &errorDetail,
                    StatusCallback callback, void *context) const;
  bool resolveDownloadUrl(const String &assetUrl, const String &version, String &resolvedUrl,
                          String &errorDetail, StatusCallback callback, void *context) const;
  void reportStatus(StatusCallback callback, void *context, const char *title,
                    const String &line1, const String &line2, int progressPercent) const;
};
