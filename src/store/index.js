import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as mutations from './mutations'
import { state } from './state'
// import { Directive } from '../../service/Directive'

Vue.use(Vuex)

const store = {
  actions,
  mutations,
  state
}

const vx = new Vuex.Store({
  ...store,
  strict: true
})

console.log(vx)

export default vx
