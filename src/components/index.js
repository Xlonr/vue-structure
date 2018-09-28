/*
 * 组件
 */
import * as classify from './classify/index'
import * as main from '../main/index'

let components = {
  ...classify,
  ...main
}

export function joinCom (Vue) {
  Object.keys(components).forEach((comp) => {
      Vue.component(comp, components[comp])
  })

  Vue.component('myComponent', {
      render: function (createElement) {
          let that = this
          return createElement('input', {
              attrs: {
                  type: 'text',
                  placeholder: '输入内容',
                  // value: this.msg
              },
              domProps: {
                  // innerHTML: 'ccc',
                  value: this.value
              },
              on: {
                  input (event) {
                      that.$emit('input', event.target.value)
                  }
              }
          })
      },
      props: {
          value: {
              default: ''
          }
      }
  })
}
