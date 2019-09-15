<template>
    <div class="color_selector">
      <btn class="is_per is_small" type="fillet" icon="icon-jiantouxia" @click="isShowDropDown === 1 ? isShowDropDown = 0 : isShowDropDown === 0 ? isShowDropDown = 1 : isShowDropDown = 0">颜色选择</btn>
      <div :class="['element_drop-down', {'drop-down_enter': isShowDropDown === 0, 'drop-down_leave': isShowDropDown === 1}]">
        <div class="color_board" :style="{'background-color': getColorBg}">
          <div class="color-board_write"></div>
          <div class="color-board_black"></div>
          <div class="color-point" :style="{'left': `${pos.left}px`, 'top': `${pos.top}px`}"></div>
        </div>
        <div class="color-selector-slider">
          <div class="color-selector-slider_bar"></div>
          <div class="color-selector-slider_thumb" :style="{'left': `${slider.left}px`}"></div>
        </div>
        <div class="color-selector-alpha">
          <div class="color-selector-alpha_bar" :style="{'background': alphaBgColor}"></div>
          <div class="color-selector-alpha_thumb" :style="{'left': `${alpha.left}px`}"></div>
        </div>
        <input class="color-selector-value" type="text" v-model="colorValue">
        <span class="color-selector-text" v-text="getHexValue"></span>
        <div class="color-selector-footer">
          <btn class="is_per is_small" @click="emitSure">确认</btn>
        </div>
      </div>
    </div>
</template>

<script>
  import {ListenMouseEvent} from '../../plugins/mouseEvent/ListenMouseEvent'
  import {Color} from '../../plugins/color/color'

  const _Color = new Color()

  export default {
    props: {
    },
    data () {
      return {
        isShowDropDown: -1,
        slider: {
          downPos: {},
          movePos: {},
          isMouseDown: false,
          left: 0
        },
        alpha: {
          downPos: {},
          movePos: {},
          isMouseDown: false,
          left: 0
        },
        pos: {
          downPos: {},
          movePos: {},
          isMouseDown: false,
          left: 0,
          top: 0
        },
        colorValue: '',
        alphaBgColor: ''
      }
    },
    beforeCreate () {
      console.log(this.colorValue)
    },
    beforeMount () {
    },
    computed: {
      getColorBg () {
        if (this.isShowDropDown !== 0) return
        let dom = document.querySelector('.color-selector-slider_bar')
        let sliderW = dom.offsetWidth
        let obj = _Color.hsvToRgb(this.slider.left / sliderW * 360, 100, 100)
        return `rgb(${obj._r}, ${obj._g}, ${obj._b})`
      },
      getHexValue () {
        return _Color.rgbToHex(this.colorValue.replace(/(?:\(|\)|rgba)*/g, '').split(','))
      }
    },
    methods: {
      mouseMoveEventSlider (e) {
        let dom = document.querySelector('.color-selector-slider')
        // let thumbW = document.querySelector('.color-selector-slider_thumb')
        let {x} = e[0]
        this.slider.movePos.x = x
        let dis = this.slider.movePos.x - this.slider.downPos.x
        if (dis > dom.offsetWidth || dis < 0) {
//          this.mouseUpEvent()
        } else {
          this.slider.left = this.slider.movePos.x - this.slider.downPos.x
          this.currentColor()
        }
      },
      mouseMoveEventAlpha (e) {
        let dom = document.querySelector('.color-selector-alpha')
        // let alphaW = document.querySelector('.color-selector-alpha_thumb')
        let {x} = e[0]
        this.alpha.movePos.x = x
        let dis = this.alpha.movePos.x - this.alpha.downPos.x
        if (dis > dom.offsetWidth || dis < 0) {
//          this.mouseUpEvent()
        } else {
          this.alpha.left = this.alpha.movePos.x - this.alpha.downPos.x
          this.currentColor()
        }
      },
      mouseMoveEventPos (e) {
        let dom = document.querySelector('.color_board')
        let pos = document.querySelector('.color-point')
        let {x, y} = e[0]
        this.pos.movePos.x = x
        this.pos.movePos.y = y
        let disX = this.pos.movePos.x - this.pos.downPos.x
        let disY = this.pos.movePos.y - this.pos.downPos.y
        if (disX > dom.offsetWidth - pos.offsetWidth / 2 || disX < -pos.offsetWidth / 2 || disY < -pos.offsetHeight / 2 || disY > dom.offsetHeight / 2 - pos.offsetHeight) {
//          this.mouseUpEvent()
        } else {
          this.pos.left = this.pos.movePos.x - this.pos.downPos.x
          this.pos.top = this.pos.movePos.y - this.pos.downPos.y
          this.currentColor()
        }
      },
      currentColor () {
        let dom = document.querySelector('.color_board')
        let posDom = document.querySelector('.color-point')
        let alphaDom = document.querySelector('.color-selector-alpha_bar')
        let domW = dom.offsetWidth
        let domH = dom.offsetHeight
        let sliderW = document.querySelector('.color-selector-slider_bar').offsetWidth
        let col = _Color.hsvToRgb(this.slider.left / sliderW * 360, (domH - (this.pos.top + posDom.offsetHeight / 2)) / domH * 100, (this.pos.left + posDom.offsetWidth / 2) / domW * 100)
        let color = [col._r, col._g, col._b]
        this.alphaBgColor = `linear-gradient(90deg, rgba(${color.join(',')}, 0) 0%, rgb(${color.join(',')}) 100%)`
        this.colorValue = `rgba(${color.join(',')}, ${(this.alpha.left / alphaDom.offsetWidth).toFixed(2)})`
      },
      emitSure () {
        this.$emit('color', this.colorValue)
        this.isShowDropDown = 1
      }
    },
    mounted () {
      const listen = new ListenMouseEvent({element: document.querySelector('.color-selector-slider_thumb')})
      listen.bind('mouseDownEvent', (pos) => {
        let {x, y} = pos[0]
        if (!this.slider.isMouseDown) {
          this.slider.downPos.x = x
          this.slider.downPos.y = y
        }
        this.slider.isMouseDown = true
      })
      listen.bind('mouseMoveEvent', this.mouseMoveEventSlider)

      const listen1 = new ListenMouseEvent({element: document.querySelector('.color-selector-alpha_thumb')})
      listen1.bind('mouseDownEvent', (pos) => {
        let {x, y} = pos[0]
        if (!this.alpha.isMouseDown) {
          this.alpha.downPos.x = x
          this.alpha.downPos.y = y
        }
        this.alpha.isMouseDown = true
      })
      listen1.bind('mouseMoveEvent', this.mouseMoveEventAlpha)

      const listen2 = new ListenMouseEvent({element: document.querySelector('.color-point')})
      listen2.bind('mouseDownEvent', (pos) => {
        let {x, y} = pos[0]
        if (!this.pos.isMouseDown) {
          this.pos.downPos.x = x
          this.pos.downPos.y = y
        }
        this.pos.isMouseDown = true
      })
      listen2.bind('mouseMoveEvent', this.mouseMoveEventPos)
      console.log(document.querySelector('.color_selector').hasAttribute('alpha'), 3333)
    }
  }
</script>