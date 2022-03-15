const { BrowserWindow } = require("electron");

exports.createBrowserWindow = () => {
    return new BrowserWindow({
        width: 1024,
        height: 768,
        title: 'Web Preview',
        //icon: path.join(__dirname, "assets/icons/png/64x64.png"),
        //titleBarStyle: 'hidden',
        //frame: false,
        backgroundColor: "#ffffff",
        webPreferences: {
            nativeWindowOpen: true,
            devTools: true, // false if you want to remove dev tools access for the user
            contextIsolation: true,
            webviewTag: true, // https://www.electronjs.org/docs/api/webview-tag,
        },
    });
};
