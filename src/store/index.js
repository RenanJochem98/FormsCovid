import Vue from 'vue'
import Vuex from 'vuex'
import login from './login'
import tutor from './tutor'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    login,
    tutor
  },
  strict: process.env.DEBUGGING
})
