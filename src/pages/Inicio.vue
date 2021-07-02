<template>
  <div>
    <h4>Olá, {{ nome }}!</h4>
    <div>O gerenciamento da sua família acontece por aqui, é só você incluir uma nova pessoa</div>
    <BtnAddPessoa titulo='Crianças' descricao='De 6 a 12 anos' />
    <BtnAddPessoa titulo='Adolescentes' descricao='De 13 a 18 anos' />
    <div>Sua familia</div>
    <div v-for='crianca in this.criancas' :key="crianca.id" >
      {{ crianca.name }}
    </div>
    <div v-for="exam in this.exams" :key="exam.id">
        <q-btn :to="'/Exame/'+exam.id" class="btnInscricao" :label="exam.id+' - '+exam.name" />
    </div>
  </div>
</template>

<script>
// import Exam from 'components/Exam'
import BtnAddPessoa from 'components/BtnAddPessoa'

import api from 'src/services/api'
export default {
  name: 'Inicio',
  components: {
    BtnAddPessoa
    // ,Exam
  },
  data () {
    return {
      token: this.$store.getters['login/getToken'],
      nome: 'Ciclana',
      criancas: [],
      exams: []
    }
  },
  beforeMount () {
    // busca nome
    // this.criancas = this.buscarCriancas()
    this.exams = this.buscarQuestionarios()
  },
  methods: {
    async buscarCriancas () {
      console.log('Chegou aqui')
      console.log(this.$store.getters['login/getToken'])
      await api.get('/children/', {
        headers: { Authorization: 'Token ' + this.$store.getters['login/getToken'] }
      })
        .then((response) => {
          console.log(response)
        }
        ).catch((error) => {
          console.log(error)
        })
    },
    async buscarQuestionarios () {
      console.log('Aqui', this.$store.getters['login/getToken'])
      const responseExams = await api.get('/exams/', { headers: { Authorization: 'Token ' + this.$store.getters['login/getToken'] } })
      console.log(responseExams.data)
      this.exams = responseExams.data
    }
  }
}
</script>
