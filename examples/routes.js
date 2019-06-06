import PageButton from './routers/button2.vue'

export default [
  {
    name: 'button',
    path: '/button',
    component: PageButton
  },
  {
    path: '/popup',
    component: (resolve) => require(['./routers/popup.vue'], resolve)
  },
  {
    path: '/preloader',
    component: (resolve) => require(['./routers/preloader.vue'], resolve)
  },
  {
    path: '/icon',
    component: (resolve) => require(['./routers/icon.vue'], resolve)
  },
  {
    path: '/loading',
    component: (resolve) => require(['./routers/loading.vue'], resolve)
  },
  // {
  //   path: '/checkbox',
  //   component: (resolve) => require(['./routers/checkbox.vue'], resolve)
  // },
  {
    path: '/grid',
    component: (resolve) => require(['./routers/grid.vue'], resolve)
  },
  // {
  //   path: '/slider',
  //   component: (resolve) => require(['./routers/slider.vue'], resolve)
  // }
]