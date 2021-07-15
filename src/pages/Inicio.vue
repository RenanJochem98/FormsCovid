<template>
  <div>
    <h4 class="text-center">Olá, {{ nome }}!</h4>
    <div class="text-center q-px-lg q-pb-lg">O gerenciamento da sua família acontece por aqui, é só você incluir uma nova pessoa</div>
    <div class="row">
      <div class="row col-12 flex flex-center">ADICIONAR</div>
      <div class="col-6 flex justify-end">
        <BtnAddPessoa titulo='Crianças' descricao='De 6 a 12 anos' />
      </div>
      <div class="col-6 flex justify-start">
        <BtnAddPessoa titulo='Adolescentes' descricao='De 13 a 18 anos' />
      </div>
    </div>
    <div class="row col-12 flex flex-center">Sua familia</div>
    <div v-if="this.criancas.length">
      <div v-for='crianca in this.criancas' :key="crianca.id" >
        {{ crianca.name }}
      </div>
    </div>
    <div v-else>Nenhuma membro cadastrado</div>
    <div v-for="exam in this.exams" :key="exam.id">
        <q-btn :to="'/Exame/'+exam.id" class="btnInscricao" :label="exam.id+' - '+exam.name" />
    </div>
  </div>
</template>

<script>

import BtnAddPessoa from 'components/BtnAddPessoa'

import api from 'src/services/api'
export default {
  name: 'Inicio',
  components: {
    BtnAddPessoa
  },
  data () {
    return {
      token: this.$store.getters['login/getToken'],
      nome: this.$store.getters['tutor/getTutor'].name,
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
