import {app, Menu} from 'electron'
const isMac = process.platform === 'darwin'

function setMenu (mainWindow) {
  let template = [
    {
      label: '退出',
      click: function () {
        app.quit()
      }
    },
    {
      label: '关闭特效',
      click: function () {
        isMac ? app.hide() : mainWindow.hide()
      }
    },
    {
      label: '开启特效',
      click: function () {
        isMac ? app.show() : mainWindow.show()
      }
    }
  ]

  return Menu.buildFromTemplate(template)
}

export { setMenu }
