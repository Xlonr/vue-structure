/**
 *  动态创建tip组件
 */
export function tipComponent (Vue) {
  Vue.component('tip', {
    data () {
      return {
        is_show: false,
        el_width: 0,
        parentHeight: 0,
        parentWidth: 0
      }
    },
    mounted () {
      this.parentHeight = this.$parent.$vnode.elm.offsetHeight
      this.parentWidth = this.$parent.$vnode.elm.offsetWidth
      this.el_width = this.$el.offsetWidth
      // this.$el.addEventListener('mouseenter', (e) => {
      //     e.stopPropagation()
      //     console.log(e)
      //     return false
      // })
      this._listenEvents()
    },
    render: function (h) {
      if (this.is_show) {
        // console.log(this.$el)
        return h('div', {
          attrs: {
            class: `_tip ${this.direct === 'top' ? (this.allow ? '_tip-bottom' : '') : (this.allow ? '_tip-top' : '')}`,
            style: `top: ${this.direct === 'top' ? '-' + this.parentHeight : this.parentHeight}px`
          }
        }, [
          h('p', {
            domProps: {
              innerText: this.tipContent
            }
          })
        ])
      }
    },
    props: {
      tipContent: {
        default: ''
        // required: true
      },
      type: {
        type: String,
        default: 'hover'
      },
      timeout: {
        type: Number,
        default: 3000
      },
      direct: {
        type: String,
        default: 'top'
      },
      allow: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      _listenEvents () {
        if (this.type === 'hover') {
          const parent = this.$parent.$vnode.elm
          parent.onmouseenter = () => {
            this.is_show = true
          }
          if (this.type !== 'autoClose') {
            parent.onmouseleave = () => {
              this.is_show = false
            }
          } else {
            this._changeTipType()
          }
        } else if (this.type === 'click') {
          const parent = this.$parent.$vnode.elm
          let num = 0
          parent.onclick = () => {
            if (num === 0) {
              num += 1
              this.is_show = true
            } else {
              num = 0
              this.is_show = false
            }
          }
        }
      },
      _changeTipType () {
        if (this.type === 'autoClose') {
          setTimeout(() => {
            this.closeTip()
          }, this.timeout)
        }
      },
      closeTip () {
        this.$parent.$vnode.elm.removeChild(this.$el)
      }
    }
  })
}
