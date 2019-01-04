<template>
  <div>
    <div class="row">
      <check-box v-model="isChecked"></check-box>
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
        isChecked: true
      }
    },
    computed: {
      ...mapState([
      ])
    },
    watch: {
      isChecked (newVal, oldVal) {
        console.log(newVal)
      }
    },
    methods: {
      ...mapActions ([
      ]),
    },
    created () {
    }
  }
</script>
