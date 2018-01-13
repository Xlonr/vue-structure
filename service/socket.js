/*
 * WebSocket连接
 */
let url = "wss://echo.websocket.org"
let ws

export function connectSocket () {
  ws = new WebSocket(url)
  WebSocketTest()
}

export function WebSocketTest () {
  if ("WebSocket" in window) {
    ws.onopen = () => {
      console.log('ready on', ws.readyState)
      sendMess('PING')
    }
    ws.onmessage = (mess) => {
      if (JSON.parse(mess.data) === 'PING') {
        setTimeout(() => {
          sendMess('PONG')
        }, 3000)
      } else if (JSON.parse(mess.data) === 'PONG') {
        setTimeout(() => {
          sendMess('PING')
        }, 3000)
      }
    }
    ws.onclose = () => {
      console.log('close')
      connectSocket()
    }
    ws.onerror = () => {
      connectSocket()
    }
  }
}

export function sendMess (cont) {
  ws.send(JSON.stringify(cont))
}