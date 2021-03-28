export const ActionSetCpf = ({ commit }, payload) => {
  console.log('Action chamada')
  commit('updateCpf', payload)
}
