import { app, BrowserWindow } from 'electron'
import { showBrowserWindow, hideBrowserWindow } from './shortcut'
import {
  registerMouseUp,
  registerMouseDown,
  destoryIoHook,
  registerMouseMove,
  startIoHook
} from './iohook'

// const path = require('path')

// import ioHook from 'iohook'
/**
 * Set `__static` path to static files in production
 * https:/ks.io/electron-vue/content/en/using-/simulatedgreg.gitboostatic-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    maxHeight: 200,
    maxWidth: 200,
    width: 200,
    height: 200,
    minHeight: 200,
    minWidth: 200,
    show: true,
    frame: false,
    fullscreenable: false,
    skipTaskbar: true,
    resizable: false,
    transparent: process.platform !== 'linux',
    webPreferences: {
      backgroundThrottling: false,
      nodeIntegration: true,
      nodeIntegrationInWorker: true
    }
  })

  mainWindow.loadURL(winURL)

  mainWindow.setAlwaysOnTop(true)
  mainWindow.moveTop()

  // ignoreMouseEvent
  mainWindow.setIgnoreMouseEvents(true)
  // register shortcut
  showBrowserWindow(mainWindow)
  hideBrowserWindow(mainWindow)

  // register listen keyboard
  registerMouseDown(mainWindow)
  registerMouseUp(mainWindow)
  registerMouseMove(mainWindow)
  startIoHook()

  mainWindow.on('closed', () => {
    mainWindow = null
    destoryIoHook()
  })
  let webContents = mainWindow.webContents
  webContents.on('did-finish-load', () => {
    webContents.setZoomFactor(1)
    webContents.setVisualZoomLevelLimits(1, 1)
    webContents.setLayoutZoomLevelLimits(0, 0)
  })
}

// app.allowRendererProcessReuse = false

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
