const { EmitClass } = require('ujs_js')

export class ListenMouseEvent extends EmitClass {
  constructor (config) {
    super()
    this.element = config.element
    this.parentElement = config.parentElement || ''
    this.allowClick = config.allowClick || false
    this.mouseDownPos = {
      x: 0,
      y: 0
    }
    this.firstMouseDown = false
    this.openMove = false
    this.emitEvents = ['distance']
    this.init()

    this.mouseMoveEvent = this.mouseMoveEvent.bind(this)
    this.mouseUpEvent = this.mouseUpEvent.bind(this)
    this.dragEvent = this.dragEvent.bind(this)
  }

  init () {
    if (this.element) {
      this.element.addEventListener('mousedown', (e) => this.mouseDownEvent(e, this))
      this.element.onselectstart = () => {
        return false
      }
    }
    if (this.allowClick && this.parentElement) {
      const { w, h } = this.getElementSize(this.element)
      this.parentElement.onclick = (e) => {
        e.stopPropagation()
        if (this.openMove) return
        this.emit('distance', { x: e.offsetX - w / 2, y: e.offsetY - h / 2 })
      }
    }
  }

  bind (name, fn) {
    this.on(name, fn)
  }

  getElementSize (element) {
    return {
      w: element.offsetWidth,
      h: element.offsetHeight
    }
  }

  mouseDownEvent (e, self) {
    self._listenEvents()
    if (this.firstMouseDown) return
    self.mouseDownPos.x = e.clientX
    self.mouseDownPos.y = e.clientY
    this.firstMouseDown = true
    // self.emit('mouseDownEvent', {x: e.clientX, y: e.clientY})
  }

  _listenEvents () {
    window.addEventListener('mousemove', this.mouseMoveEvent)
    window.addEventListener('mouseup', this.mouseUpEvent)
    window.addEventListener('drag', this.dragEvent)
  }

  mouseMoveEvent (e) {
    this.openMove = true
    this.emit('distance', { x: e.clientX - this.mouseDownPos.x, y: e.clientY - this.mouseDownPos.y })
  }

  dragEvent () {
    this._removeListenEvent()
  }

  mouseUpEvent () {
    setTimeout(() => {
      this.openMove = false
    }, 500)
    this._removeListenEvent()
  }

  _removeListenEvent () {
    window.removeEventListener('mousemove', this.mouseMoveEvent, false)
    window.removeEventListener('mouseup', this.mouseUpEvent, false)
  }

  get mouseDownPoint () {
    return this.mouseDownPos
  }

  get currentEmitEvents () {
    return this.emitEvents
  }
}
