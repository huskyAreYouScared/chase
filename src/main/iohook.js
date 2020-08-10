import ioHook from 'iohook'
import { screen } from 'electron'
let registerMouseDown = function (browserWindow) {
  ioHook.on('mousedown', (event) => {
    browserWindow.webContents.send(
      'keyboard-change',
      event,
      screen.getCursorScreenPoint()
    )
  })
}
let registerMouseUp = function (browserWindow) {
  ioHook.on('mouseup', (event) => {
    browserWindow.webContents.send(
      'keyboard-change',
      event,
      screen.getCursorScreenPoint()
    )
  })
}
let registerMouseMove = function (browserWindow) {
  ioHook.on('mousemove', (event) => {

  })
}
let destoryIoHook = function () {
  ioHook.stop()
}
let startIoHook = function () {
  ioHook.start()
}

export {
  registerMouseDown,
  registerMouseUp,
  destoryIoHook,
  startIoHook,
  registerMouseMove
}
