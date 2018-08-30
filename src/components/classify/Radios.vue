<template>
    <label class="_radios">
        <div class="_rad" @click="changeType">
            <i class="pos" v-if="isShow"></i>
        </div>
        <span>{{ radio_title }}</span>
    </label>
</template>

<script>
  export default {
    props: {
      isChecked: {
        type: Boolean,
        default: false
      },
      radio_title: {
        type: [String, Number],
        default: '单选'
      },
      isToggle: {
        type: Boolean,
        default: false
      }
    },
    computed: {
    },
    created () {
      this.isShow = this.isChecked
    },
    data () {
      return {
        isShow: true
      }
    },
    methods: {
      changeType () {
        if (!this.isToggle) {
          this.isShow = true
        } else {
          this.isShow = !this.isShow
        }
        this.$emit('input', this.isShow)
      }
    },
    mounted () {
      console.log(this.isChecked, 22222)
    }
  }
</script>