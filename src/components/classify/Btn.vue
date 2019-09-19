<template>
  <div class="_btn _circle inline_ele" :class="[icon ? `iconfont ${icon}` : '']" @click="clickEvent" v-if="type === 'circle'"></div>
  <div class="_btn _fillet inline_ele" :class="[icon ? `iconfont ${icon}` : '']" @click="clickEvent" v-else-if="type === 'fillet'"><slot></slot></div>
  <div class="_btn_text" :class="[icon ? `iconfont ${icon}` : '']" @click="clickEvent" v-else-if="type === 'text'"><slot></slot></div>
  <div class="_btn inline_ele" :class="[icon ? `iconfont ${icon}` : '']" @click="clickEvent" v-else><slot></slot></div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'def'
    },
    icon: {
      type: String,
      default: ''
    }
  },
  computed: {
    //      classList () {
    //        let cla = []
    //        let that = this
    //        if (typeof this.o_class === 'string') {
    //            cla = [this.o_class]
    //            this.defClass.push(cla)
    //        } else {
    //            this.defClass = [...this.defClass, ...this.o_class]
    //        }
    //        switch (this.type) {
    //          case 'fillet':
    //            that.defClass.splice(1, 0, '_fillet')
    //            break
    //          case 'circle':
    //            that.defClass.splice(1, 0, '_circle')
    //            break
    //          case 'text':
    //            that.defClass = ['_btn_text']
    //            break
    //          default:
    //            break
    //        }
    //        return this.defClass
    //      }
  },
  beforeCreate () {
  },
  data () {
    return {
      defClass: ['_btn', 'inline_ele']
    }
  },
  methods: {
    clickEvent () {
      this.$emit('click')
    }
  }
}
</script>
