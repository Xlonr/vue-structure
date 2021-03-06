<template>
  <transition :name="transitionName">
    <div class="notification alert"
      :class="[typeClass, hasIcon, hasBg, className]"
      v-show="isShow"
    >
      <div class="notifica-arrow"></div>
      <a v-if="closable" class="close iconfont icon-hf_guanbi" @click="handleClose">
      </a>
      <div class="wrap-icon" v-if="iconClass">
        <i :class="['iconfont', `icon-hf_${iconClass}`, faSpin]"></i>
      </div>
      <div class="title" v-if="title">{{ title }}</div>
      <div class="notification-content" v-html="content"></div>
      <div class="ensure-wrap"
        v-if="type == 'confirm'"
        @click="handleEnsure"
      >
        {{confirmContent}}
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: 'default'
    },
    title: {
      type: String
    },
    content: {
      type: String,
      default: ''
    },
    closable: {
      type: Boolean,
      default: true
    },
    onClose: {
      type: Function,
      default () {}
    },
    duration: {
      type: Number,
      default: 4500
    },
    placement: {
      type: String,
      default: 'top-right'
    },
    icon: {
      type: String
    },
    transparent: {
      type: Boolean,
      default: false
    },
    animated: {
      type: Boolean,
      default: false
    },
    transition: {
      type: String
    },
    autoClose: {
      type: Boolean,
      default: true
    },
    confirmContent: {
      type: String,
      default: ''
    },
    confirmCallback: {
      default: Function
    },
    closeCallBack: {
      default: Function
    },
    useCloseEvent: {
      type: Boolean,
      default: false
    },
    className: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      isShow: false,
      placementTransition: {
        'top-right': 'fadeRight',
        'top-center': 'fadeDown',
        'top-left': 'fadeLeft',
        'bottom-right': 'fadeRight',
        'bottom-center': 'fadeUp',
        'bottom-left': 'fadeLeft'
      }
    }
  },

  computed: {
    typeClass () {
      return this.type ? `is-${this.type}` : null
    },
    hasIcon () {
      return this.iconClass ? 'has-icon' : null
    },
    faSpin () {
      return this.animated ? 'fa-spin' : null
    },
    hasBg () {
      return this.transparent ? 'bgColor' : null
    },
    iconClass () {
      if (this.icon) return this.icon

      if (this.type === 'info') {
        return 'info-circle'
      } else if (this.type === 'success') {
        return 'check-circle'
      } else if (this.type === 'warning') {
        return 'exclamation-triangle'
      } else if (this.type === 'danger') {
        return 'times-circle'
      } else if (this.type === 'loading') {
        this.type = 'info'
        this.animated = true
        return 'spinner'
      }
      return this.icon
    },
    transitionName () {
      if (this.transition) return this.transition
      return this.placementTransition[this.placement]
    }
  },

  methods: {
    handleClose () {
      this.isShow = false
      setTimeout(() => {
        this.$destroy()
        this.$el.remove()
      }, 100)
      if (this.useCloseEvent) {
        this.closeEvent()
      }
    },
    handleEnsure () {
      this.confirmCallback()
      this.close()
    },
    closeEvent () {
      this.closeCallBack()
    },
    close () {
      clearTimeout(this.timer)
      this.isShow = false
      this.$destroy()
      this.$el.remove()
    }
  },
  beforeMount () {
    let parent
    parent = document.querySelector(`.notifications.${this.placement}`)

    if (!parent) {
      parent = document.createElement('div')
      parent.classList.add('notifications', this.placement)
      document.getElementById('app').appendChild(parent)
    }
    parent.appendChild(this.$el)
  },
  mounted () {
    this.isShow = true
    if (this.autoClose) {
      this.timer = setTimeout(() => this.close(), this.duration)
    }
  }
}
</script>
