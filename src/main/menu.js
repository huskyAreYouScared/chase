import {app, Menu, shell} from 'electron'
const isMac = process.platform === 'darwin'

function setMenu (mainWindow) {
  let template = [
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
    },
    {
      label: '关于',
      click: function () {
        shell.openExternal('https://github.com/huskyAreYouScared/chase')
      }
    },
    {
      label: '退出',
      click: function () {
        app.quit()
      }
    }
  ]

  return Menu.buildFromTemplate(template)
}

export { setMenu }
