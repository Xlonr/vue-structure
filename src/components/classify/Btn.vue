<template>
  <div :class="classList" @click="clickEvent">{{btnText}}</div>
</template>

<script>
  export default {
    props: {
      btnText: {
        type: String,
        default: ''
      },
      o_class: {
        type: [String, Array],
        default: () => {
          return []
        }
      }
    },
    computed: {
      classList () {
        let cla = []
        if (typeof this.o_class === 'string') {
            cla = [this.o_class]
            this.defClass.push(cla)
        } else {
            this.defClass.push(this.o_class)
        }
        console.log(this.defClass)
        return this.defClass
      }
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