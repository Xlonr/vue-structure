import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as mutations from './mutations'
import {state} from './state'
import {Directive} from "../../service/Directive"

Vue.use(Vuex)

let store = {
  actions,
  mutations,
  state
}

let vx = new Vuex.Store({
  ...store,
  strict: true
})

console.log(vx)

export default vx