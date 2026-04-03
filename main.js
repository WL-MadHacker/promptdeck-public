const { app, BrowserWindow, globalShortcut } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 780,
    height: 860,
    minWidth: 480,
    minHeight: 560,
    frame: false,
    titleBarStyle: 'hidden',
    titleBarOverlay: {
      color: '#0c0c0e',
      symbolColor: '#8a8890',
      height: 36
    },
    backgroundColor: '#0c0c0e',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    },
    show: false,
    autoHideMenuBar: true
  });

  mainWindow.loadFile('index.html');

  // Smooth show once ready
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
