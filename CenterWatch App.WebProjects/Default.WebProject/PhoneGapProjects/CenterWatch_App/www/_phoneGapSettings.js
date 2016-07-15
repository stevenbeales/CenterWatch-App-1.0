function _phoneGapSettings() { 
 return {
    "appId": "com.epharmasolutions.centerwatch",
    "preferences": {
        "permissions": "",
        "orientation": "default",
        "target-device": "universal",
        "fullscreen": "true",
        "webviewbounce": "true",
        "prerendered-icon": "false",
        "stay-in-webview": "true",
        "ios-statusbarstyle": "black-opaque",
        "detect-data-types": "true",
        "exit-on-suspend": "false",
        "show-splash-screen-spinner": "true",
        "auto-hide-splash-screen": "true",
        "disable-cursor": "false",
        "android-minSdkVersion": "15",
        "android-installLocation": "internalOnly",
        "phonegap-version": "cli-6.1.0",
        "FadeSplashScreen": "true",
        "FadeSplashScreenDuration": "2",
        "EnableViewportScale": "true",
        "MediaPlaybackRequiresUserAction": "false",
        "AllowInlineMediaPlayback": "true",
        "TopActivityIndicator": "white",
        "BackupWebStorage": "cloud",
        "iosPersistentFileLocation": "Library",
        "KeyboardDisplayRequiresUserAction": "true",
        "SurpressesIncrementalRendering": "false",
        "android-maxSdkVersion": "",
        "android-targetSdkVersion": "",
        "KeepRunning": "true",
        "splash-screen-duration": "1000",
        "ErrorUrl": "error.html",
        "LoadingDialog": "Please wait, the app is loading.",
        "LoadingPageDialog": "Please wait, the data is loading.",
        "LoadUrlTimeoutValue": "20000",
        "AndroidPersistentFileLocation": "Internal",
        "android-build-tool": "gradle"
    },
    "plugins": {
        "geolocation": "npm",
        "network-information": "npm",
        "splashscreen": "npm",
        "x-toast": "npm",
        "whitelist": "npm",
        "dialogs": "npm",
        "statusbar": "npm",
        "inappbrowser": "npm"
    }
};
}