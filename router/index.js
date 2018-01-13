/**
 * Created by HFJY on 2017/9/10.
 */
import Vue from 'vue'
import Router from 'vue-router'
import AppPage from '../src/components/app.vue'
import Second from '../src/components/second.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home/second',
      component: Second
    }
  ]
})