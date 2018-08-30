<template>
    <div class="_check_box">
        <label>
            <div class="check_bg"><i :class="['iconfont', icon]" :style="{'color': iconColor}" v-if="isShow"></i></div>
            <input class="checkbox_def" type="checkbox" @change="changeValue" style="visibility: hidden;"></input>
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
      }
    },
    computed: {
    },
    beforeCreate () {
    },
    data () {
      return {
        isShow: false
      }
    },
    methods: {
      changeValue (e) {
        this.isShow = e.target.checked
        this.$emit('checkValue', e.target.checked)
      }
    }
  }
</script>