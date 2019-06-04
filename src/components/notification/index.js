export default function Notification () {
  let pk = require('../../../package.json')
  let UINAME = pk.name
  let notification = global.ENKEL.app.notification

  const show = (opts) => {
    let options = {}
    if (opts.icon) {
      if (opts.icon.indexOf('.') > -1) {
        options.icon = `<img src="${opts.icon}"/>`
      } else {
        options.icon = `<i class="icon f7-icons">${opts.icon}</i>`
      }
      delete opts.icon
    } else {
      options.icon = `<img style="width: 100%; height: 100%;" src="http://img09.zhaopin.com/2012/other/mobile/weex/enkel-ui.png"/>`
      // options.icon = `<img style="width: 100%; height: 100%;" src="https://static.dei2.com/imgs/enkel-ui.png"/>`
    }
    options = Object.assign({
      title: UINAME,
      titleRightText: '现在',
      closeOnClick: true,
      closeTimeout: 3000,
      closeButton: true
    }, options, opts)
    notification.create(options).open()
  }

  return {
    show: show
  }
}
