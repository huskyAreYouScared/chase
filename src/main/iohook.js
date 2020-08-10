import ioHook from 'iohook'
import { screen } from 'electron'
let registerMouseDown = function (browserWindow) {
  ioHook.on('mousedown', (event) => {
    browserWindow.webContents.send('keyboard-change', event)
  })
}
let registerMouseUp = function (browserWindow) {
  ioHook.on('mouseup', (event) => {
    computeDistance(browserWindow)
    browserWindow.webContents.send('keyboard-change', event)
  })
}
let registerMouseMove = function (browserWindow) {
  ioHook.on('mousemove', (event) => {
    // computeDistance(browserWindow)
  })
}
let destoryIoHook = function () {
  ioHook.stop()
}
let startIoHook = function () {
  ioHook.start()
}

function computeDistance (browserWindow) {
  let {x, y} = screen.getCursorScreenPoint()
  let mx = x - 100
  let my = y - 100
  browserWindow.setBounds({ x: mx, y: my })
  // browserWindow.setPosition(mx, my, true)
}

export {
  registerMouseDown,
  registerMouseUp,
  destoryIoHook,
  startIoHook,
  registerMouseMove
}
