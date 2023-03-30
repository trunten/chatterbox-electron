const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 440,
    height: 720,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadURL('http://chatterbox-web.netlify.app');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});