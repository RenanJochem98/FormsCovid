import store from '../store/index'

export default async (to, from, next) => {
  console.log('log log')
  console.log(to)
  if (!store.getters['login/getToken']) {
    if (to.name === 'Login' || to.name === 'Index') {
      next()
    } else {
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
