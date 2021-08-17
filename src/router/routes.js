
const routes = [
  {
    path: '/',
    component: () => import('layouts/IndexLayout.vue'),
    children: [
      { path: '', name: 'Index', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/Login',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '', name: 'Login', component: () => import('pages/Login.vue') }
    ]
  },
  {
    path: '/Cadastro',
    component: () => import('layouts/CadastroLayout.vue'),
    children: [
      { path: '', name: 'Cadastro', component: () => import('pages/Cadastro.vue') }
    ]
  },
  {
    path: '/Inicio',
    component: () => import('layouts/InicioLayout.vue'),
    children: [
      { path: '', name: 'Inicio', component: () => import('pages/Inicio.vue') }
    ]
  },
  {
    path: '/InserirTutor',
    component: () => import('layouts/InicioLayout.vue'),
    children: [
      { path: '', name: 'InserirTutor', component: () => import('pages/InserirTutor.vue') }
    ]
  },
  {
    path: '/InserirCrianca',
    component: () => import('layouts/InicioLayout.vue'),
    children: [
      { path: '', name: 'InserirCrianca', component: () => import('pages/InserirCrianca.vue') }
    ]
  },
  {
    path: '/InserirAdolescente',
    component: () => import('layouts/InicioLayout.vue'),
    children: [
      { path: '', name: 'InserirAdolescente', component: () => import('pages/InserirAdolescente.vue') }
    ]
  },
  {
    path: '/Exame',
    component: () => import('layouts/InicioLayout.vue'),
    children: [
      { path: ':id', name: 'Exame', component: () => import('pages/Exame.vue') }
    ]
  },
  {
    path: '/Crianca',
    component: () => import('layouts/InicioLayout.vue'),
    children: [
      { path: ':id', name: 'Crianca', component: () => import('pages/Crianca.vue') }
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
