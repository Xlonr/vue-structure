const {EmitClass} = require('ujs_js')

export class ListenMouseEvent extends EmitClass {
  constructor (config) {
    super()
    this.element = config.element
    this.mouseDownPos = {
      x: 0,
      y: 0
    }
    this.mouseMovePos = {
      x: 0,
      y: 0
    }
    this.emitEvents = ['mouseDownEvent', 'mouseMoveEvent']
    this.init()
    // this.mouseDownEvent = this.mouseDownEvent.bind(this)
    this.mouseMoveEvent = this.mouseMoveEvent.bind(this)
    this.mouseUpEvent = this.mouseUpEvent.bind(this)
    this.dragEvent = this.dragEvent.bind(this)
  }

  init () {
    this.element.addEventListener('mousedown', (e) => this.mouseDownEvent(e, this))
    this.element.onselectstart = () => { return false }
  }

  bind (name, fn) {
    this.on(name, fn)
  }

  mouseDownEvent (e, self) {
    console.log(self)
    // this.mouseDownPos.x = e.clientX
    // this.mouseDownPos.y = e.clientY
    self._listenEvents()
    self.emit('mouseDownEvent', {x: e.clientX, y: e.clientY})
  }

  _listenEvents () {
    window.addEventListener('mousemove', this.mouseMoveEvent)
    window.addEventListener('mouseup', this.mouseUpEvent)
    window.addEventListener('drag', this.dragEvent)
  }

  mouseMoveEvent (e) {
    this.emit('mouseMoveEvent', {x: e.clientX, y: e.clientY})
  }

  dragEvent () {
    this._removeListenEvent()
  }

  mouseUpEvent () {
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