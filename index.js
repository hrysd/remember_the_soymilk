'use strict';

const App           = require('electron').app,
      BrowserWindow = require('electron').BrowserWindow;

App.on('ready', function() {
  let mainWindow = new BrowserWindow({width: 980, height: 1000});

  mainWindow.loadURL(`file://${__dirname}/index.html`);

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});

App.on('window-all-closed', function() {
  App.quit();
});
