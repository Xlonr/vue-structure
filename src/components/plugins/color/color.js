import { ujs } from '../../../main'

export class Color {
  // hsv转换为rgb
  hsvToRgb (h, s, v) {
    let _r = 0
    let _g = 0
    let _b = 0
    const index = parseInt((h / 60) % 6)
    const n = h / 60 - index
    v /= 100
    s /= 100
    const _o = v * (1 - s)
    const _p = v * (1 - n * s)
    const _q = v * (1 - (1 - n) * s)
    switch (index) {
    case 0:
      _r = v
      _g = _q
      _b = _o
      break
    case 1:
      _r = _p
      _g = v
      _b = _o
      break
    case 2:
      _r = _o
      _g = v
      _b = _q
      break
    case 3:
      _r = _o
      _g = _p
      _b = v
      break
    case 4:
      _r = _q
      _g = _o
      _b = v
      break
    case 5:
      _r = v
      _g = _o
      _b = _p
      break
    default:
      break
    }
    _r = parseInt(_r * 255.0)
    _g = parseInt(_g * 255.0)
    _b = parseInt(_b * 255.0)
    return { _r, _g, _b }
  }

  // rgb转换为16进制
  rgbToHex (rgbColor) {
    if (ujs.isArray(rgbColor)) {
      return this.composeHex(rgbColor)
    } else if (/^(rgb|RGB)/.test(rgbColor)) {
      return this.composeHex(rgbColor.replace(/(?:\(|\)|rgb|RGB)*/g, '').split(','))
    } else if (/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(rgbColor)) {
      const num = rgbColor.replace(/#/, '').split('')
      if (num.length === 3) {
        return this.composeSixHex(num)
      } else if (num.length === 6) {
        return `#${num}`
      }
    } else {
      console.error('输入的颜色格式不对，无法进行转换！')
    }
  }

  composeHex (arr) {
    let colorHex = '#'
    arr.forEach((num, index) => {
      if (index > 2) return
      const hexNum = ('0' + Number(num).toString(16)).slice(-2)
      colorHex += hexNum
    })
    return colorHex
  }

  // 三色合为六色
  composeSixHex (num) {
    let idx = 0
    let res = ''
    while (idx++ < num.length) {
      res += (num[idx] + num[idx])
    }
    return `#${res}`
  }

  hexToRgb (str) {
    if (ujs.isString(str)) {
      let colorNum = str.toLowerCase()
      if (/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(colorNum)) {
        if (colorNum.length === 4) {
          colorNum = this.composeSixHex(colorNum.replace(/#/, ''))
        }
        const result = Array.from({ length: 3 }).map((it, index) => {
          return parseInt(`0x${colorNum.slice(index * 2 + 1, (index + 1) * 2 + 1)}`)
        })
        return `rgb(${result.join(',')})`
      }
    } else {
      console.error('TypeError: input is not string')
    }
  }
}
