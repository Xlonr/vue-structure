<template>
  <div>
    <div class="row">
      <check-box></check-box>
    </div>
    <div class="row">
      <check-box-group></check-box-group>
    </div>
  </div>
</template>

<script>
//  import List from './list.vue'
  import {mapActions, mapGetters, mapState} from 'vuex'

  export default {
    data () {
      return {
      }
    },
    computed: {
      ...mapState([
      ])
    },
    methods: {
      ...mapActions ([
      ]),
    },
    created () {
    }
  }
</script>
