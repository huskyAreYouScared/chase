import { screen } from 'electron'

function setWindowBound (mainWindow) {
  // screen.getAllDisplays().forEach(win => {
  //   currentWidth += win.workAreaSize.width
  //   currentHeight = win.workAreaSize.height
  // })
  let {workArea, scaleFactor} = screen.getPrimaryDisplay()
  mainWindow.setBounds({
    x: workArea.x * scaleFactor,
    y: workArea.y * scaleFactor,
    width: workArea.width * scaleFactor,
    height: workArea.height * scaleFactor
  })
}

export { setWindowBound }
