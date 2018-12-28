/**
 *  动态创建tip组件
 */
export function tipComponent (Vue) {
    Vue.component('tip', {
        data () {
            return {
                el_width: 0,
                parentHeight:  0,
                parentWidth: 0
            }
        },
        mounted () {
          this.parentHeight = this.$parent.$vnode.elm.offsetHeight
          this.parentWidth = this.$parent.$vnode.elm.offsetWidth
          this.el_width = this.$el.offsetWidth
          this.$el.addEventListener('mouseenter', (e) => {
              e.stopPropagation()
              console.log(e)
              return false
          })
          this._changeTipType()
        },
        render: function (h) {
            return h('div', {
                attrs: {
                    class: '_tip',
                    style: `top: ${this.parentHeight}px;left: -${(this.el_width - this.parentWidth) / 2}px`
                }
            }, [
                h('p', {
                    domProps: {
                        innerText: this.tipContent
                    }
                })
            ])
        },
        props: {
            tipContent: {
                default: ''
                // required: true
            },
            type: {
                type: String,
                required: true,
                default: 'autoClose'
            },
            timeout: {
                type: Number,
                required: true,
                default: 3000
            }
        },
        methods: {
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