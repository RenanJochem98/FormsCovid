import * as storage from '../../services/storage'

export const getToken = ({ token }) => {
  if (!token) {
    token = storage.getLocalToken()
  }
  return token
}
