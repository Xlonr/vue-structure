<template>
  <div>
    <div class="col">
      <radios :isChecked="isChecked" @input="val => isChecked = val" :isToggle="true">单选</radios>
      <radios :isChecked="isChecked" type="primary" @input="val => isChecked = val" :isToggle="true">单选</radios>
    </div>
    <div class="row">
      <radio-group class="" :checkIndex="checkIndex" :options="radioConts" @input="index => checkIndex = index">单选</radio-group>
    </div>
  </div>
</template>

<script>
//  import List from './list.vue'
  import {mapActions, mapGetters, mapState} from 'vuex'

  export default {
    data () {
      return {
        isChecked: true,
        checkIndex: 1,
        radioConts: ['item1', 'item2', 'item3', 'item4']
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
