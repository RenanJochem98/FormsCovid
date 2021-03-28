import * as storage from '../../services/storage'

export const ActionSetToken = ({ commit }, payload) => {
  console.log('Action token chamada')
  storage.setLocalToken(payload)
  commit('SetToken', payload)
}

export const ActionSetUserId = ({ commit }, payload) => {
  storage.setLocalUserId(payload)
  commit('SetUserId', payload)
}
