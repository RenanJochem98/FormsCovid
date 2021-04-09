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
      nome: 'Ciclana',
      criancas: []
    }
  },
  beforeMount () {
    // busca nome
    this.criancas = this.buscarCriancas()
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
    }
  }
}
</script>
