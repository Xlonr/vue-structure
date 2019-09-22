<template>
  <div>
    <input-cont input_text="输入内容..." input_title="标题" :disabled="true"></input-cont>
    <input-cont class="edge" v-model="value" input_text="输入内容..." input_title="标题" title_direct="right"></input-cont>
    {{value}}
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  data () {
    return {
      value: ''
    }
  },
  computed: {
    ...mapState([
    ])
  },
  methods: {
    ...mapActions([
    ])
  },
  created () {
  }
}
</script>
