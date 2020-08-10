import { globalShortcut } from 'electron'

let showBrowserWindow = function (browserWindow) {
  globalShortcut.register('CommandOrControl+2', () => {
    browserWindow.show()
  })
}
let hideBrowserWindow = function (browserWindow) {
  globalShortcut.register('CommandOrControl+1', () => {
    browserWindow.hide()
  })
}

export {
  showBrowserWindow,
  hideBrowserWindow
}
