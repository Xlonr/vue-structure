export function updateCount ({commit}, status) {
  return new Promise((resolve, reject) => {
    if (status < 4) {
      commit('updateCount', status)
      return resolve('yes')
    } else {
      return reject(e)
    }
  })
}