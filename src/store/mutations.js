export function updateCount (state, status) {
  console.log(status, state.count)
  state.count = status
  return {count: status}
}