
const routes = [
  {
    path: '/',
    component: () => import('layouts/IndexLayout.vue'),
    name: 'index',
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/Login',
    component: () => import('layouts/LoginLayout.vue'),
    name: 'Login',
    children: [
      { path: '', component: () => import('pages/Login.vue') }
    ]
  },
  {
    path: '/Cadastro',
    component: () => import('layouts/CadastroLayout.vue'),
    name: 'Cadastro',
    children: [
      { path: '', component: () => import('pages/Cadastro.vue') }
    ]
  },
  {
    path: '/Inicio',
    component: () => import('layouts/LoginLayout.vue'),
    name: 'Inicio',
    children: [
      { path: '', component: () => import('pages/Inicio.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
