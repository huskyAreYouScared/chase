import { app, Tray } from 'electron'
import path from 'path'
import appRootDir from 'app-root-dir'
let iconPath = process.env.NODE_ENV === 'development'
  ? path.join(__dirname, '../../dist/web/tray.png')
  : appRootDir.get().split('app.asar')[0] + '/tray.png'

let appIcon = null
app.on('ready', () => {
  appIcon = new Tray(iconPath)
})

export { appIcon }
