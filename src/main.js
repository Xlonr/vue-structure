/**
 * Created by XLON on 2017/9/10.
 */
import Vue from 'vue'
import App from './components/app.vue'
import {tipComponent} from './components/plugins/tip/index'
import {joinCom} from './components/index'
import router from '../router/index'
import store from './store/index'
import {connectSocket} from '../service/socket'
import {notices} from './components/plugins/notice/index'
import {popOver} from './components/plugins/pop/index'
import '../sass/index.sass'
import ujs from 'ujs_js'
import {Color} from './components/plugins/color/color'

Vue.config.debug = true

connectSocket()

tipComponent(Vue)
joinCom(Vue)

let app = new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  }
})

for (let notice in notices) {
  Vue.prototype['_' + notice] = (propData) => {
    notices[notice](propData, Vue)
  }
}

Vue.prototype.$_popOver = (propData) => {
    popOver(propData, Vue)
}

window.app = app
window.vm = Vue
window.ujs = ujs
window.Color = new Color()

export {
  Vue,
  ujs
}
