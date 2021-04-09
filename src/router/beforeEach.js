import { Notify } from 'quasar'
import store from '../store/index'

export default async (to, from, next) => {
  if (!store.getters['login/getToken']) {
    if (to.name === 'Login' || to.name === 'Index') {
      next()
    } else {
      Notify.create({
        type: 'negative',
        message: 'Você deve fazer login para acessar a página ' + to.name
      })
      next({ name: 'Login' })
    }
  } else {
    if (to.name === 'Login') {
      next({ name: 'Inicio' })
    } else {
      next()
    }
  }
}
