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
import vCirqueProcess from '../src/view/v_cirque_process.vue'
import vColor from '../src/view/v_color.vue'

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
      name: 'btn',
      component: vBtn
    },
    {
      path: '/vCheckBox',
      name: 'checkBox',
      component: vCheckBox
    },
    {
      path: '/vInput',
      name: 'input',
      component: vInput
    },
    {
      path: '/vPicker',
      name: 'picker',
      component: vPicker
    },
    {
      path: '/vRadio',
      name: 'radio',
      component: vRadio
    },
    {
      path: '/vSelect',
      name: 'select',
      component: vSelect
    },
    {
      path: '/vNotice',
      name: 'notice',
      component: vNotice
    },
    {
      path: '/vProcess',
      name: 'process',
      component: vProcess
    },
    {
      path: '/vClock',
      name: 'clock',
      component: vClock
    },
    {
      path: '/vCirqueProcess',
      name: 'cirqueProcess',
      component: vCirqueProcess
    },
    {
      path: '/vColor',
      name: 'color',
      component: vColor
    }
  ]
})
