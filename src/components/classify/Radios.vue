<template>
    <label class="_radios">
        <div class="_def_rad" @click="changeType" v-if="type === 'def'">
            <i :class="[{'pos': isShow}]"></i>
        </div>
        <div :class="['_rad', {'is_checked': isChecked}]" @click="changeType" v-else>
            <i class="pos" v-if="isShow"></i>
        </div>
        <span><slot></slot></span>
    </label>
</template>

<script>
export default {
  props: {
    isChecked: {
      type: Boolean,
      default: false
    },
    isToggle: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'def'
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
