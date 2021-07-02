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
axios.defaults.baseURL = 'http://localhost:8000/api/v1'

const api = axios.create({
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json'
  }
})

api.interceptors.request.use(function (request) {
  // console.log(request)
  // request.headers['Access-Control-Allow-Origin'] = '*'
  // request.headers['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  // request.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, PATCH, DELETE'
  showCustom()
  return request
}, function (error) {
  return Promise.reject(error)
})

api.interceptors.response.use(function (response) {
  // console.log('mensagem de response aqui')
  // console.log(response)
  return response
}, function (error) {
  return Promise.reject(error)
})

export default api
