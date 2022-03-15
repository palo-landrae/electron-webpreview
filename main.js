// Electron
const { app, Menu, BrowserWindow, ipcMain} = require("electron");

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.allowRendererProcessReuse = true;
app.on("ready", () => {
    // Main window
    const window = require("./src/window");
    mainWindow = window.createBrowserWindow(app);
    mainWindow.loadURL("http://localhost:3000");
    mainWindow.on("page-title-updated", (event) => {
        event.preventDefault();
    });
    // Display Dev Tools
    //mainWindow.openDevTools();

    ipcMain.on('invokeAction', function(event, data){
        var result = processData(data);
        BrowserWindow.getFocusedWindow().loadURL("http://localhost:3000");
    });

    // Menu (for standard keyboard shortcuts)
    const menu = require("./src/menu");
    const template = menu.createTemplate(app.name);
    const builtMenu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(builtMenu);
});

// Quit when all windows are closed.
app.on("window-all-closed", () => {
    app.quit();
});
