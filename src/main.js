/**
 * Created by XLON on 2017/9/10.
 */
import Vue from 'vue'
import App from './components/app.vue'
import {joinCom} from './components/index'
import router from '../router/index'
import store from './store/index'
import {connectSocket} from '../service/socket'
import {notices} from './components/plugins/notice/index'
import {popOver} from './components/plugins/pop/index'
import '../sass/index.sass'

Vue.config.debug = true

connectSocket()

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

export {Vue}
