<template>
    <div class="_cirque" :style="[circleSize]">
      <canvas class="cav" id="default_cirque" :width="`${size}px`" :height="`${size}px`"></canvas>
      <canvas class="cav" id="process_cirque" :width="`${size}px`" :height="`${size}px`"></canvas>
      <span class="prower-value">{{processValue < totalProcessValue ? Math.ceil(processValue / totalProcessValue * 100) : 100 }}%</span>
      <div class="out_circle" :style="{'transform': `rotate(${360 * avg}deg)`}"><div class="process_pos"></div></div>
    </div>
</template>

<script>
  export default {
    props: {
      cirRadius: {
        type: Number,
        default: 50
      },
      defStrokeStyle: {
        type: String,
        default: '#ccc'
      },
      circleLineWidth: {
        type: Number,
        defalut: 5
      },
      processStrokeStyle: {
        type: String,
        default: '#4683ff'
      },
      processValue: {
        type: Number,
        default: 1
      },
      totalProcessValue: {
        type: Number,
        default: 100
      }
    },
    computed: {
      circleSize () {
        return {width: `${this.size}px`, height: `${this.size}px`}
      }
    },
    created () {
    },
    mounted () {
      this.showCircle()
    },
    data () {
      return {
        circle: {
          x: +this.cirRadius + this.circleLineWidth,
          y: +this.cirRadius + this.circleLineWidth
        },
        usingStrokeStyle: this.defStrokeStyle,
        size: this.cirRadius * 2 + this.circleLineWidth * 2,
        avg: 1
      }
    },
    watch: {
      processValue (newVal) {
        if (+newVal >= +this.totalProcessValue) return
        this.drawProcess()
      }
    },
    methods: {
      drawProcess () {
        if (this.processValue === 0) return
        this.usingStrokeStyle = this.processStrokeStyle
        this.avg = this.processValue / this.totalProcessValue
        this.showCircle(1)
      },
      showCircle (type) {
        let dfCir = type === 1 ? this.$el.querySelector('#process_cirque') : this.$el.querySelector('#default_cirque')
        if (!dfCir) return
        let ctx = dfCir.getContext("2d")
        ctx.save()
//        ctx.rotate(Math.PI/2)
        ctx.beginPath()
        ctx.shadowColor = "#ddd"
        ctx.shadowBlur = 10
        ctx.lineCap = "round"
        ctx.strokeStyle = this.usingStrokeStyle
        ctx.lineWidth = this.circleLineWidth
        ctx.clearRect(0, 0, this.size, this.size)
//        ctx.rotate(Math.PI / 2)
        ctx.arc(this.circle.x, this.circle.y, this.cirRadius, 0, 2 * Math.PI * (this.avg || 1))
        ctx.stroke()
        ctx.restore()
      }
    }
  }
</script>