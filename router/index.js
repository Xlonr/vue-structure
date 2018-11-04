/**
 * Created by HFJY on 2017/9/10.
 */
import Vue from 'vue'
import Router from 'vue-router'
import AppPage from '../src/components/app.vue'
// import Second from '../src/components/classify/second.vue'
import vBtn from '../src/view/v_btn.vue'
import vCheckBox from '../src/view/v_checkBox.vue'
import vInput from '../src/view/v_input.vue'
import vPicker from '../src/view/v_picker.vue'
import vRadio from '../src/view/v_radio.vue'
import vSelect from '../src/view/v_select.vue'
import vNotice from '../src/view/v_notice.vue'
import vProcess from '../src/view/v_process.vue'
import vClock from '../src/view/v_clock.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: vBtn,
      redirect: '/vBtn'
    },
    {
      path: '/vBtn',
      component: vBtn
    },
    {
      path: '/vCheckBox',
      component: vCheckBox
    },
    {
      path: '/vInput',
      component: vInput
    },
    {
      path: '/vPicker',
      component: vPicker
    },
    {
      path: '/vRadio',
      component: vRadio
    },
    {
      path: '/vSelect',
      component: vSelect
    },
    {
      path: '/vNotice',
      component: vNotice
    },
    {
      path: '/vProcess',
      component: vProcess
    },
    {
      path: '/vClock',
      component: vClock
    }
  ]
})
