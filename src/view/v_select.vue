<template>
  <div>
    <selects :dfCont="dfCont" @input="changeValue"></selects>
    <selects :dfCont="dfCont" @input="changeValue" :isClick="true"></selects>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  data () {
    return {
      dfCont: '地点'
    }
  },
  computed: {
    ...mapState([
    ])
  },
  methods: {
    ...mapActions([
    ]),
    changeValue (val) {
      this.dfCont = val
    }
  },
  created () {
  }
}
</script>
