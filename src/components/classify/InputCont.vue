<template>
  <div class="_input">
    <span class="title" v-if="title_direct === 'left'">{{input_title}}</span>
    <input :class="['ele', {'disabled': disabled}]" :type="input_type" :placeholder="input_text" :value="value" @input="inputValue" :disabled="disabled"/>
    <span class="title" v-if="title_direct === 'right'">{{input_title}}</span>
  </div>
</template>

<script>
export default {
  props: {
    input_type: {
      type: String,
      default: 'text'
    },
    input_text: {
      type: String,
      default: '...'
    },
    input_title: {
      type: String,
      default: ''
    },
    title_direct: {
      type: String,
      default: 'left'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
    }
  },
  methods: {
    inputValue (e) {
      this.$emit('input', e.target.value)
    }
  },
  mounted () {
  }
}
</script>
