import axios from 'axios'
// import { QSpinnerGears } from 'quasar'

axios.defaults.baseURL = 'https://covid-criancas.herokuapp.com/api/v1'

// axios.interceptors.response.use(function (response) {
//   console.log('mensagem de response aqui')
//   return response
// }, function (error) {
//   return Promise.reject(error)
// })
// axios.interceptors.request.use(function (request) {
//   console.log('Request init')
//   return request
// }, function (error) {
//   return Promise.reject(error)
// })

const api = axios.create({
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
})

// function showCustom () {
//   this.$q.notify({
//     spinner: QSpinnerGears,
//     message: 'Working...',
//     timeout: 2000
//   })
// }
export default api
