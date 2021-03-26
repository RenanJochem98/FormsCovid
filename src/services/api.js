import axios from 'axios'

axios.defaults.baseURL = 'https://covid-criancas.herokuapp.com/api/v1'
const api = axios.create({
  timeout: 30000,
  headers: { 'Content-Type': 'application/json' }
})

export default api
