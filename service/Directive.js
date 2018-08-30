import { sendMess } from './socket'

export class Directive {
    send (cont) {
        sendMess(cont)
    }
}
