import axios from 'axios'
import { Notify } from 'quasar'
// import { QSpinnerGears } from 'quasar'

function showCustom () {
  Notify.create({
    type: 'warning',
    message: 'Processando requisição',
    spinner: true,
    timeout: 1000
  })
}
axios.defaults.baseURL = 'https://covid-criancas.herokuapp.com/api/v1'

const api = axios.create({
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
})

api.interceptors.request.use(function (request) {
  showCustom()
  return request
}, function (error) {
  return Promise.reject(error)
})

api.interceptors.response.use(function (response) {
  console.log('mensagem de response aqui')
  console.log(response)
  response.headers['Access-Control-Allow-Origin'] = '*'
  return response
}, function (error) {
  return Promise.reject(error)
})

export default api
