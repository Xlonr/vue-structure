<template>
    <div class="_check_box">
        <label>
            <div class="check_bg"><i :class="['iconfont', icon]" :style="{'color': iconColor}" v-if="isShow"></i></div>
            <input class="checkbox_def" type="checkbox" v-model="checked" style="visibility: hidden;"></input>
            <span>{{checkText}}</span>
        </label>
    </div>
</template>

<script>
  export default {
    props: {
      icon: {
        type: String,
        default: 'icon-xuanzhong'
      },
      iconColor: {
        type: String,
        default: '#21fe8d'
      },
      checkText: {
        type: String,
        default: '复选框'
      },
      value: {
        type: Boolean,
        default: false
      }
    },
    computed: {
    },
    created () {
      console.log(this.value)
      this.checked = this.value
    },
    data () {
      return {
        isShow: false,
        checked: false
      }
    },
    watch: {
      checked (newVal, oldVal) {
        if (newVal !== oldVal) {
          this.isShow = newVal
          this.$emit('value', newVal)
//          console.log(newVal)
        }
      }
    },
    methods: {
    }
  }
</script>