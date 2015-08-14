'use strict';

const App           = require('app'),
      BrowserWindow = require('browser-window');

App.on('ready', function() {
  let mainWindow = new BrowserWindow({width: 980, height: 1000});

  mainWindow.loadUrl(`file://${__dirname}/index.html`);

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});

App.on('window-all-closed', function() {
  App.quit();
});
