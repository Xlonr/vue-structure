<template>
  <div class="_process">
    <div class="process_line">
      <div :class="['process_real_line', isAuto ? 'process_transform' : '']" :style="{'width': `${pLeft}px`}"></div>
      <div :class="['icon', 'iconfont', iconName, posClass, {'process_transform': isAuto}]" v-if="useIcon" :style="{'left': `${pLeft - 10}px`}"></div>
      <div :class="['drag_pos', posClass, {'process_transform': isAuto}]" v-else :style="{'left': `${pLeft - 10}px`}"></div>
    </div>
    <div class="process_time" v-if="isAuto" v-text="changeTime"></div>
  </div>
</template>

<script>
  export default {
    props: {
      useIcon: {
        type: Boolean,
        default: false
      },
      iconName: {
        type: String,
        default: 'icon-star'
      },
      isAuto: {
        type: Boolean,
        default: false
      },
      restTime: {
        type: Number,
        default: 0
      },
      allTime: {
        type: Number,
        default: 0
      },
      posClass: {
        type: String,
        default: ''
      },
      isDrag: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      changeTime () {
        let avg = this.restTime / this.allTime
        this.pLeft = avg * this.maxWidth
        return this.restTime
      }
    },
    beforeCreate () {
    },
    data () {
      return {
        el: '',
        currentX: 0,
        pLeft: 100,
        lef: 100,
        maxWidth: 0
      }
    },
    created () {

    },
    methods: {
      enter (e) {
        this.currentX = +e.clientX
        document.addEventListener('mousemove', this.move, false)
        document.addEventListener('mouseup', this.mup, false)

      },
      move (e) {
        let nowX = e.clientX
        let changeX = this.lef + nowX - this.currentX
        if (changeX < 0 || changeX > +this.maxWidth) return
        this.pLeft = changeX
      },
      mup () {
        this.lef = this.pLeft
        document.removeEventListener('mousemove', this.move)
        document.removeEventListener('mouseup', this.mup)
      }
    },
    mounted () {
      this.maxWidth = document.querySelector('.process_line').offsetWidth
      if (this.posClass) {
        this.el = document.querySelector(`.${this.posClass}`)
      } else {
        if (this.useIcon) {
            this.el = document.querySelector('.icon')
        } else {
            this.el = document.querySelector('.drag_pos')
        }
      }
      if (this.isDrag) {
        this.el.addEventListener('mousedown', this.enter, false)
      }
      if (this.isAuto && this.allTime && this.restTime) {
        let time_b = document.querySelector('.process_time')
        if (time_b) this.maxWidth -= time_b.offsetWidth
      }
    }
  }
</script>