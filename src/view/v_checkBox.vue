<template>
  <div>
    <div class="row">
      <check-box v-model="isChecked">复选框</check-box>
    </div>
    <div class="row">
      <check-box-group>复选框</check-box-group>
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
