/**
 * Created by XLON on 2017/9/10.
 */
import Vue from 'vue'
import App from './components/app.vue'
import router from '../router/index'
import {connectSocket} from '../service/socket'

Vue.config.debug = true

connectSocket()

new Vue({
  el: '#app',
  router,
  components: {
    App
  }
})
