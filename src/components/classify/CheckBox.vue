<template>
    <div class="_check_box">
        <label>
            <div :class="['check_bg', {'is_active': isShow}]">
                <i :class="['iconfont', icon]" :style="{'color': iconColor}" v-if="isShow"></i>
                <input class="checkbox_def" type="checkbox" v-model="checked" style="visibility: hidden;"></input>
            </div>
            <span class="checkbox_text"><slot></slot></span>
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
        default: '#fff'
      },
      value: {
        type: Boolean,
        default: false
      }
    },
    computed: {
    },
    created () {
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