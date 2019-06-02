export default function Modal () {
  let UINAME = 'enkel-ui'
  let defaultTitle = UINAME
  let modal = global.ENKEL.app.dialog

  const noop = () => { }

  const show = (opts) => {
    modal.create(Object.assign({
      buttons: [
        {
          text: '取消'
        },
        {
          text: '确定'
        }
      ]
    }, opts)).open()
  }

  function alert (opts) {
    show({
      title: opts.title || defaultTitle,
      text: opts.content || '',
      buttons: [
        {
          text: opts.okText || '确定',
          color: opts.okColor,
          bold: opts.hasOwnProperty('okBold') ? opts.okBold : false,
          onClick: (dialog) => {
            if (opts.onOk) {
              opts.onOk(dialog)
            }
          }
        }
      ]
    })
  }

  const confirm = (opts) => {
    show({
      title: opts.title || defaultTitle,
      text: opts.content || '',
      buttons: [
        {
          text: opts.cancelText || '取消',
          color: opts.cancelColor,
          bold: opts.hasOwnProperty('btnBold') ? opts.cancelBold : false,
          onClick: (dialog) => {
            if (opts.onCancel) {
              opts.onCancel(dialog)
            }
          }
        },
        {
          text: opts.okText || '确定',
          color: opts.okColor,
          bold: opts.hasOwnProperty('okBold') ? opts.okBold : false,
          onClick: (dialog) => {
            if (opts.onOk) {
              opts.onOk(dialog)
            }
          }
        }
      ]
    })
  }

  const prompt = (opts) => {
    let options = opts || {}
    modal.prompt(options.text || '', options.title || defaultTitle, options.callbackOk || noop, options.callbackCancel || noop, options.defaultValue || '')
  }

  const preloader = (opts) => {
    let options = opts || {}
    return modal.preloader(options.title || 'loading', options.color || global.ENKEL.colorTheme)
  }

  const progress = (opts) => {
    let options = opts || {}
    if (options.hasOwnProperty('progress')) {
      return modal.progress(options.title || 'loading', options.progress || 0, options.color || global.ENKEL.colorTheme)
    } else {
      return modal.progress(options.title || 'loading', options.color || global.ENKEL.colorTheme)
    }
  }

  return {
    show: show,
    alert: alert,
    confirm: confirm,
    prompt: prompt,
    preloader: preloader,
    progress: progress
  }
}
