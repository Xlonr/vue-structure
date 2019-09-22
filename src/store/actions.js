import { directive } from '../../service/index'

export function updateCount ({ commit }, status) {
  return new Promise((resolve, reject) => {
    if (status < 4) {
      commit('updateCount', status)
      return resolve('yes')
    } else {
      return reject(new Error('status is bigger than default'))
    }
  })
}

export function socketMessage (_, cont) {
  directive.send(cont)
}
