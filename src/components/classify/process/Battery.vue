<template>
  <div class="_battery">
    <div class="battery_process-num">{{ processValue }}%</div>
    <div class="battery_color-line"></div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component({
  props: {
    value: {
      type: [Number, String],
      default: 0
    },
    fixed: {
      type: Number,
      default: 2
    }
  }
})
export default class Battery extends Vue {
  processValue = this.value.toFixed(this.fixed)

  mounted () {
    console.log(this.value)
  }
}
</script>
