<template>
  <div class="layout">
    <div class="cirque_process">
      <cir-que :circle-line-width="5" :process-value="proValue"/>
    </div>
    <div class="cirque_process">
      <water-mark :currentValue="currentValue" :totalValue="100"/>
    </div>
    <div class="cirque_process">
      <battery />
    </div>
  </div>
</template>

<script>

import { mapActions, mapState } from 'vuex'

export default {
  data () {
    return {
      proValue: 1,
      currentValue: 0
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
  mounted () {
    setInterval(() => {
      this.proValue++
    }, 1000)
    const tm1 = setInterval(() => {
      this.currentValue++
      if (this.currentValue >= 100) {
        clearInterval(tm1)
      }
    }, 1000)
  }
}
</script>
