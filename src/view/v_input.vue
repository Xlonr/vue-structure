<template>
  <div>
    <x_input input_text="输入内容..." input_title="标题" :disabled="true"></x_input>
    <x_input class="edge" v-model="value" input_text="输入内容..." input_title="标题" title_direct="right"></x_input>
    {{value}}
  </div>
</template>

<script>
//  import List from './list.vue'
  import {mapActions, mapGetters, mapState} from 'vuex'

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
      ...mapActions ([
      ])
    },
    created () {
    }
  }
</script>
