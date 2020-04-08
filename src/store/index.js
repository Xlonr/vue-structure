import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as mutations from './mutations'
import { state } from './state'
import * as xlsxActions from './xlsx/actions'
// import { Directive } from '../../service/Directive'

Vue.use(Vuex)

const store = {
  actions: {
    ...actions,
    ...xlsxActions
  },
  mutations,
  state
}

const vx = new Vuex.Store({
  ...store,
  strict: true
})

console.log(vx)

export default vx
