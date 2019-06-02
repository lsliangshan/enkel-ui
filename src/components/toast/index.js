export default function Toast () {
  let toast = global.ENKEL.app.toast

  const icons = {
    info: '<i class="f7-icons" style="margin-bottom: 5px;">info_round_fill</i>',
    warning: '<i class="f7-icons" style="margin-bottom: 5px;">alert_fill</i>',
    error: '<i class="f7-icons" style="margin-bottom: 5px;">close_round_fill</i>',
    success: '<i class="f7-icons" style="margin-bottom: 5px;">check_round_fill</i>',
    help: '<i class="f7-icons" style="margin-bottom: 5px;">help_round_fill</i>',
  }

  const show = (opts) => {
    toast.create(Object.assign({
      closeButtonColor: opts.closeButtonColor || global.ENKEL.app.params.colorTheme
    }, opts)).open()
  }

  const info = (opts) => {
    show(Object.assign({
      icon: icons.info
    }, opts))
  }
  const warning = (opts) => {
    show(Object.assign({
      icon: icons.warning
    }, opts))
  }
  const error = (opts) => {
    show(Object.assign({
      icon: icons.error
    }, opts))
  }
  const success = (opts) => {
    show(Object.assign({
      icon: icons.success
    }, opts))
  }
  const help = (opts) => {
    show(Object.assign({
      icon: icons.help
    }, opts))
  }


  return {
    show: show,
    info: info,
    warning: warning,
    error: error,
    success: success,
    help: help
  }
}
