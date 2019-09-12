<template>
    <div class="water_mark">
      <div class="water_height" :style="[changeProcess]"></div>
      <span class="text" v-text="`${((currentValue / totalValue) * 100.00).toFixed(fixed)}%`"></span>
    </div>
</template>

<script>
  export default {
    props: {
      currentValue: {
        type: Number,
        default: 50
      },
      totalValue: {
        type: Number,
        default: 100
      },
      processColor: {
        type: Array,
        default () {
          return [
            {range: [0, 0.3], bgcolor: 'red'},
            {range: [0.3, 0.7], bgcolor: 'rgb(66, 196, 196)'},
            {range: [0.7, 1], bgcolor: '#4ecb4e'}
          ]
        }
      },
      fixed: {
        type: Number,
        default: 0
      }
    },
    computed: {
      changeProcess () {
        let avg = (this.currentValue / this.totalValue).toFixed(2)
        let obj = {'height': avg * 100.00 + 'px'}
        return {...obj, ...this.getColor(avg)}
      }
    },
    methods: {
      getColor (vg) {
        let res = this.processColor.filter(it => {
          let [min, max] = it.range
          return vg >= min && vg <= max
        })
        return {'background-color': res.shift().bgcolor}
      }
    }
  }
</script>