import pop from './Pop.vue'
function popComponent (propsData, Vue) {
  const PopComponent = Vue.extend(pop)
  return new PopComponent({
    el: document.createElement('div'),
    propsData
  })
}

export function popOver (params, Vue) {
  // const defaultParam = { direction: 'right' }
  const propsData = Object.assign({}, params)
  return popComponent(propsData, Vue)
}
