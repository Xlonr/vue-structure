<template>
  <div>
    <clock-time></clock-time>
    <div class="edge">
      <calendar-time></calendar-time>
    </div>
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
