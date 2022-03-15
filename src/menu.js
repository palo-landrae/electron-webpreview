const { BrowserWindow } = require("electron");
const prompt = require("electron-prompt");

exports.createTemplate = () => {
    let template = [
        {
            label: "Edit",
            submenu: [
                { role: "undo" },
                { role: "redo" },
                { type: "separator" },
                { role: "cut" },
                { role: "copy" },
                { role: "paste" },
                { role: "pasteandmatchstyle" },
                { role: "delete" },
                { role: "selectall" },
            ],
        },
        {
            label: "View",
            submenu: [
                { role: "reload" },
                { role: "forcereload" },
                { role: "toggledevtools" },
                { type: "separator" },
                { role: "resetzoom" },
                { role: "zoomin" },
                { role: "zoomout" },
                { type: "separator" },
                { role: "togglefullscreen" },
            ],
        },
        {
            role: "window",
            submenu: [{ role: "minimize" }, { role: "close" }],
        },
        {
            label: "Port",
            submenu: [
                {
                    label: "3000",
                    click() {
                        BrowserWindow.getFocusedWindow().loadURL("http://localhost:3000");
                    },
                },
                {
                    label: "4200",
                    click() {
                        BrowserWindow.getFocusedWindow().loadURL("http://localhost:4200");
                    },
                },
                {
                    label: "5000",
                    click() {
                        BrowserWindow.getFocusedWindow().loadURL("http://localhost:5000");
                    },
                },
                { type: "separator" },
                {
                    label: "Other",
                    click() {
                        window = BrowserWindow.getFocusedWindow();
                        prompt({
                            title: "Port Options",
                            label: "Insert Port:",
                            height: 180,
                            inputAttrs: {
                                type: "text",
                            },
                            type: "input",
                        })
                            .then((port) => {
                                window.loadURL("http://localhost:" + port);
                            })
                            .catch(console.error);
                    },
                },
            ],
        },
    ];

    return template;
};
