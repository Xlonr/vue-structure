<template>
    <div :class="['_check_box', {'disabled': isDisabled || is_disabled}]">
        <label>
            <div :class="['check_bg', {'is_active': isShow || indeterminate}]">
                <i :class="[{'no_check_all': indeterminate},'iconfont', indeterminate ? 'icon-jian' : icon]" :style="{'color': iconColor}" v-if="isShow || indeterminate"></i>
                <input class="checkbox_def" type="checkbox" v-model="checked" :value="_dfValue" style="visibility: hidden;" :disabled="isDisabled || is_disabled"></input>
            </div>
            <span class="checkbox_text" :style="{'color': checked ? text_color : ''}"><slot></slot></span>
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
        type: [Boolean, Array],
        default: false
      },
      _dfValue: {
        type: [String, Number],
        default: ''
      },
      indeterminate: {
        type: Boolean,
        default: false
      },
      is_disabled: {
        type: [Boolean, String],
        default: false
      },
      text_color: {
        type: String,
        default: '#000'
      }
    },
    computed: {
    },
    created () {
      this.checked = this.value
    },
    mounted () {
      this.isDisabled = !!this.$el.getAttribute('disabled')
    },
    data () {
      return {
        isDisabled: false,
        isShow: false,
        checked: false
      }
    },
    watch: {
      checked (newVal, oldVal) {
        if (newVal !== oldVal) {
          this.isShow = newVal
          this.$emit('input', newVal)
        }
      },
      value (newVal, oldVal) {
        if (newVal !== oldVal) {
          this.checked = this.value
        }
      }
    },
    methods: {
    }
  }
</script>