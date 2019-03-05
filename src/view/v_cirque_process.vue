<template>
  <div class="cirque_process">
    <cir-que :circle-line-width="5" :process-value="proValue"></cir-que>
  </div>
</template>

<script>
//  import List from './list.vue'
  import {mapActions, mapGetters, mapState} from 'vuex'

  export default {
    data () {
      return {
        proValue: 1
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
    mounted () {
      setInterval(() => {
        this.proValue++
      }, 1000)
    }
  }
</script>
