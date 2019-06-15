/**
 * Created by aresn on 16/6/20.
 */
import 'babel-polyfill'
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'
import enkel from '../src/index'
import routes from './routes'
// import locale from '../src/locale/lang/en-US';
import locale from '../src/locale/lang/zh-CN'

Vue.use(VueRouter)


// 开启debug模式
Vue.config.debug = true

// 路由配置
const router = new VueRouter({
  esModule: false,
  mode: 'history',
  routes: routes
})
Vue.use(enkel, {
  locale,
  f7params: {
    root: '#app',
    mainView: '.view-main',
    name: 'enkel-ui',
    id: 'com.enkel-ui',
    theme: 'ios',
    colorTheme: 'primary',
    routes: routes,
    routers: routes
    // routes: routes
  }
})
const app = new Vue({
  // router,
  render: h => h(App),
  mounted () {

  }
}).$mount('#app')

