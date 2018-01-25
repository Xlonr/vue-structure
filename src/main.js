/**
 * Created by XLON on 2017/9/10.
 */
import Vue from 'vue'
import App from './components/app.vue'
import router from '../router/index'
import store from './store/index'
import {connectSocket} from '../service/socket'
import '../sass/index.sass'

Vue.config.debug = true

connectSocket()

console.log(store)

let app = new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  }
})
