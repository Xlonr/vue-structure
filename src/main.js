/**
 * Created by XLON on 2017/9/10.
 */
import Vue from 'vue'
import App from './components/app.vue'
import {joinCom} from './components/index'
import router from '../router/index'
import store from './store/index'
import {connectSocket} from '../service/socket'
import '../sass/index.sass'

Vue.config.debug = true

connectSocket()

joinCom(Vue)

// console.log(Comp)

let app = new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  }
})

export default app
