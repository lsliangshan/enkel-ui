function _mouseenter () {
  let parent = this.parentNode.parentNode
  if (!parent.classList.contains('hover')) {
    parent.classList.add('hover')
  }
}

function _mouseleave () {
  let parent = this.parentNode.parentNode
  if (parent.classList.contains('hover')) {
    parent.classList.remove('hover')
  }
}

function _focus () {
  let parent = this.parentNode.parentNode
  if (parent.classList.contains('hover')) {
    parent.classList.remove('hover')
  }
  // if (!parent.classList.contains('shrink')) {
  //   parent.classList.add('shrink')
  // }
  if (!parent.classList.contains('focus')) {
    parent.classList.add('focus')
  }
}

function _blur () {
  let parent = this.parentNode.parentNode
  // if (!this.value) {
  //   if (parent.classList.contains('shrink')) {
  //     parent.classList.remove('shrink')
  //   }
  // }
  if (parent.classList.contains('focus')) {
    parent.classList.remove('focus')
  }
}

export default {
  bind (el, binding, vnode) {
    el.addEventListener('mouseenter', _mouseenter.bind(el), false)
    el.addEventListener('mouseleave', _mouseleave.bind(el), false)
    el.addEventListener('focus', _focus.bind(el), this)
    el.addEventListener('blur', _blur.bind(el), this)
  },
  update () {

  },
  unbind (el, binding) {
    el.removeEventListener('mouseenter', _mouseenter)
    el.removeEventListener('mouseleave', _mouseleave)
    el.removeEventListener('focus', _focus)
    el.removeEventListener('blur', _blur)
  }
};
