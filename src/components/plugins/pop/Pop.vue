<template>
  <div :class="['pop', direction]" v-if="is_show">
    <span class="close-btn" v-if="closable" @click="closeComponent">&times;</span>
    <p>{{popContent}}</p>
  </div>
</template>
<script>
export default {
  props: {
    name: {
      default: ''
    },
    is_show: {
      type: Boolean,
      default: true
    },
    popContent: {
      type: String,
      default: ''
    },
    direction: {
      type: String,
      default: 'top'
    },
    closable: {
      type: Boolean,
      default: true
    },
    autoClose: {
      type: Boolean,
      default: true
    },
    timeout: {
      type: Number,
      default: 5000
    }
  },
  data () {
    return {
      isShow: false,
      placement: {
      }
    }
  },
  computed: {
  },
  beforeMount () {
    const dom = this.name.querySelector('.pop.' + this.direction)
    if (!dom) {
      this.name.classList.add('tip-pos')
      this.name.appendChild(this.$el)
      this.autoDestory()
    } else if (!this.closable && !this.autoClose) {
      this.closeComponent()
    }
  },
  methods: {
    autoDestory () {
      if (this.autoClose) {
        setTimeout(() => {
          this.closeComponent()
        }, this.timeout)
      }
    },
    closeComponent () {
      this.name.classList.remove('tip-pos')
      this.name.removeChild(this.name.querySelector('.pop.' + this.direction))
      this.$destroy(this.$el)
    }
  }
}
</script>
