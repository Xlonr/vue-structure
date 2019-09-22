<template>
  <div class="color_selector">
    <div class="color-selector_mouse">
      <slot name="contain"></slot>
    </div>
    <div
        :class="['element_drop-down', {'drop-down_enter': isShowDropDown === 0, 'drop-down_leave': isShowDropDown === 1}]">
      <div class="color-board" :style="{'background-color': getColorBg}">
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
import { ListenMouseEvent } from '../../plugins/mouseEvent/ListenMouseEvent'
import { Color } from '../../plugins/color/color'

const _Color = new Color()

export default {
  props: {
    event: {
      type: String,
      default: 'click'
    },
    value: {
      type: String,
      default: 'rgba(0, 0, 0, 0)'
    }
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
  computed: {
    getColorBg () {
      if (this.isShowDropDown !== 0) return
      const dom = document.querySelector('.color-selector-slider_bar')
      const sliderW = dom.offsetWidth
      const obj = _Color.hsvToRgb(this.slider.left / sliderW * 360, 100, 100)
      return `rgb(${obj._r}, ${obj._g}, ${obj._b})`
    },
    getHexValue () {
      return _Color.rgbToHex(this.colorValue.replace(/(?:\(|\)|rgba)*/g, '').split(','))
    }
  },
  methods: {
    mouseMoveEventSlider (e) {
      const dom = document.querySelector('.color-selector-slider')
      const [{ x }] = e
      if (x > dom.offsetWidth || x < 0) {
        //          this.mouseUpEvent()
      } else {
        this.slider.left = x
        this.currentColor()
      }
    },
    mouseMoveEventAlpha (e) {
      const dom = document.querySelector('.color-selector-alpha')
      const [{ x }] = e
      if (x > dom.offsetWidth || x < 0) {
        //          this.mouseUpEvent()
      } else {
        this.alpha.left = x
        this.currentColor()
      }
    },
    mouseMoveEventPos (e) {
      const dom = document.querySelector('.color-board')
      const pos = document.querySelector('.color-point')
      const [{ x, y }] = e
      if (x > dom.offsetWidth - pos.offsetWidth / 2 || x < -pos.offsetWidth / 2 || y < -pos.offsetHeight / 2 || y > dom.offsetHeight - pos.offsetHeight / 2) {
        //          this.mouseUpEvent()
      } else {
        this.pos.left = x
        this.pos.top = y
        this.currentColor()
      }
    },
    currentColor () {
      const dom = document.querySelector('.color-board')
      const posDom = document.querySelector('.color-point')
      const alphaDom = document.querySelector('.color-selector-alpha_bar')
      const domW = dom.offsetWidth
      const domH = dom.offsetHeight
      const sliderW = document.querySelector('.color-selector-slider_bar').offsetWidth
      const col = _Color.hsvToRgb(this.slider.left / sliderW * 360, (this.pos.left + posDom.offsetWidth / 2) / domW * 100, (domH - (this.pos.top + posDom.offsetHeight / 2)) / domH * 100)
      const color = [col._r, col._g, col._b]
      this.alphaBgColor = `linear-gradient(90deg, rgba(${color.join(',')}, 0) 0%, rgb(${color.join(',')}) 100%)`
      this.colorValue = `rgba(${color.join(',')}, ${(this.alpha.left / alphaDom.offsetWidth).toFixed(2)})`
    },
    emitSure () {
      this.$emit('input', this.colorValue)
      this.isShowDropDown = 1
    },
    eventAnalysis () {
      const dom = document.querySelector('.color-selector_mouse')
      if (this.event === 'click') {
        dom.addEventListener('click', this.changeColorPublish)
      } else if (this.event === 'hover') {
        dom.addEventListener('mouseenter', this.changeColorPublish)
        window.addEventListener('click', this.hideDropDown)
      }
    },
    changeColorPublish (e) {
      e.stopPropagation()
      e.preventDefault()
      this.isShowDropDown = this.isShowDropDown < 0 ? 0 : this.isShowDropDown ? 0 : 1
    },
    hideDropDown (e) {
      if (!e.path.map(it => it.className || it.id || it.tagName || it.nodeName).includes('color_selector') && this.isShowDropDown === 0) {
        this.isShowDropDown = 1
      }
    }
  },
  mounted () {
    const listen = new ListenMouseEvent({
      element: document.querySelector('.color-selector-slider_thumb')
    })
    listen.bind('distance', this.mouseMoveEventSlider)

    const listen1 = new ListenMouseEvent({ element: document.querySelector('.color-selector-alpha_thumb') })
    listen1.bind('distance', this.mouseMoveEventAlpha)

    const listen2 = new ListenMouseEvent({
      element: document.querySelector('.color-point'),
      parentElement: document.querySelector('.color-board'),
      allowClick: true
    })
    listen2.bind('distance', this.mouseMoveEventPos)
    console.log(document.querySelector('.color_selector').hasAttribute('alpha'), 3333)
    this.eventAnalysis()
  }
}
</script>
