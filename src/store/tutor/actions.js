import * as storage from '../../services/storage'

export const ActionSetTutor = ({ commit }, payload) => {
  console.log('Action set tutor chamada')
  storage.setLocalToken(payload)
  commit('SetTutor', payload)
}
