<template>
  <div class="process_view">
    <process :isDrag="true"></process>
    <div class="edge">
      <process :isDrag="true" :useIcon="true"></process>
    </div>
    <div class="edge">
      <process :useIcon="true" iconName="icon-aixin"></process>
    </div>
    <div class="edge">
      <process posClass="autoProcess" :allTime="aTime" :restTime="cTime" :isAuto="true"></process>
    </div>
  </div>
</template>

<script>
//  import List from './list.vue'
  import {mapActions, mapGetters, mapState} from 'vuex'

  export default {
    data () {
      return {
        aTime: 100,
        cTime: 1
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
      let t = setInterval(() => {
        this.cTime += 1
        if (this.cTime === this.aTime) {
          clearTimeout(t)
        }
      }, 1000)
    }
  }
</script>
