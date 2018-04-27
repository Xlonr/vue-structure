/*
 * 组件
 */
import * as classify from './classify/index'

let components = {
  ...classify
}

export function joinCom (Vue) {
  Object.keys(components).forEach((comp) => {
      Vue.component(comp, components[comp])
  })
}
