class PrinterCircle {
  constructor (element, config) {
    this.element = element
    this.parentElement = document.querySelector(element)
    this.width = this.parentElement.clientWidth
    this.height = this.parentElement.clientHeight
    this.radius = config.radius || 5
    this.points = []
    this.counts = config.counts || 50
    this.rate = config.rate || 5
    this.ctx = null
    this.color = config.color || '#ccc'
    this.lineWidth = config.lineWidth || 5
    this.mouseenter = false
    this.mousePos = {
      x: 0,
      y: 0
    }
    this.init()
  }

  init () {
    const canvas = document.createElement('canvas')
    canvas.width = this.width
    canvas.height = this.height
    canvas.style.zIndex = -1
    canvas.style.position = 'absolute'
    this.parentElement.appendChild(canvas)
    this.ctx = canvas.getContext('2d')
    this.points = Array.from({length: this.counts}).map(this.setPoints.bind(this))
    window.addEventListener('resize', this.resizeScreen.bind(this))
    this.parentElement.addEventListener('mouseout', () => {this.mouseenter = false})
  }

  setPoints () {
    return {
      x: Math.ceil(Math.random() * this.width),
      y: Math.ceil(Math.random() * this.height),
      r: +(Math.random() * this.radius).toFixed(3),
      rateX: +(Math.random() * 2 - 1).toFixed(3),
      rateY: +(Math.random() * 2 - 1).toFixed(3)
    }
  }

  drawPoints () {
    this.points = this.filterOutPoints()
    if (this.points.length < this.counts) {
      this.points = [...this.points, ...Array.from({length: this.counts - this.points.length}).map(this.setPoints.bind(this))]
    }
    this.points.forEach((it, index) => {
      this.ctx.beginPath()
      this.ctx.arc(it.x, it.y, it.r, 0, Math.PI * 2, false)
      this.ctx.fillStyle = this.color
      this.ctx.fill()
      if (this.mouseenter) {
        let avg = Math.ceil(Math.abs(this.mousePos.x - it.x) / Math.abs(this.mousePos.y - it.y)).toFixed(3)
        it.x += it.rateX * this.rate
        it.y = it.x / avg
      } else {
        it.x += it.rateX * this.rate
        it.y += it.rateY * this.rate
      }
    })
  }

  filterOutPoints () {
    return this.points.filter(it => {
      return it.x > 0 && it.x < this.width && it.y > 0 && it.y < this.height
    })
  }

  distance (x, x1, y, y1) {
    return Math.sqrt(Math.pow(Math.abs(x1 - x), 2) + Math.pow(Math.abs(y1 - y), 2))
  }

  drawLines () {
    let len = 0
    while (len++ < this.points.length) {
      this.points.forEach((it, index) => {
        if (index !== len) {
          let lan = this.distance(this.points[len - 1].x || 0, it.x, this.points[len - 1].y, it.y)
          if (lan > this.width / 4) return
          this.ctx.beginPath()
          this.ctx.lineWidth = Math.ceil(this.lineWidth / lan).toFixed(3)
          this.ctx.strokeStyle = '#ddd'
          this.ctx.moveTo(this.points[len - 1].x, this.points[len - 1].y)
          this.ctx.lineTo(it.x, it.y)
          this.ctx.stroke()
        }
      })
      if (len > this.points.length) {
        break
      }
    }
  }

  drawStart () {
    this.ctx.clearRect(0, 0, this.width, this.height)
    this.drawPoints()
    this.drawLines()
    window.requestAnimationFrame(this.drawStart.bind(this))
  }

  resizeScreen () {
    const dom = document.querySelector(this.element)
    this.width = dom.clientWidth
    this.height = dom.clientHeight
  }

  mouseIn (e) {
    return {
      x: e.offsetX,
      y: e.offsetY
    }
  }
}

export default PrinterCircle