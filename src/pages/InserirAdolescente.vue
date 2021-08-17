<template>
    <div>
        <h4 class="text-center">Inserção de Adolescente</h4>
        <div class="q-pb-md">
            <div class="row flex-center q-pb-md">
              <q-input v-model="nome" label="Como essa criança se chama?" class="col-6"/>
            </div>
            <div class="row flex-center q-pb-md">
              <q-input v-model="telefone" label="Qual a data de nascimento?" class="col-6" mask="##/##/####"/>
            </div>
            <div class="row flex-center q-pb-md">
              <div class="col-6">
                <p class="enunciado">Qual gênero você se identifica?</p>
                <q-radio v-model="genero" id="female" val="female" label="Mulher" color="purple"/>
                <q-radio v-model="genero" id="male" val="male" label="Homem" color="purple"/>
                <q-radio v-model="genero" id="non_binary" val="non_binary" label="Não binárie/a/o" color="purple"/>
                <q-radio v-model="genero" id="na" val="na" label="Prefiro não responder" color="purple"/>
              </div>
            </div>
            <div class="row flex-center q-pb-md">
              <div class="col-6">
                <p class="enunciado">De acordo com o IBGE, qual sua cor/raça?</p>
                <q-radio v-model="cor" id="1" val="Branca" label="Branca" color="purple"/>
                <q-radio v-model="cor" id="2" val="Preta" label="Preta" color="purple"/>
                <q-radio v-model="cor" id="3" val="Parda" label="Parda" color="purple"/>
                <q-radio v-model="cor" id="4" val="Indigena" label="Indigena" color="purple"/>
                <q-radio v-model="cor" id="4" val="Amarela" label="Amarela" color="purple"/>
              </div>
            </div>
            <div class="row flex-center q-pb-md">
              <q-input v-model="altura" label="Qual sua altura (em metros)?" class="col-6" mask="#,##"/>
            </div>
            <div class="row flex-center q-pb-md">
              <q-input v-model="peso" label="Qual seu peso (em quilos)?" class="col-6"/>
            </div>
            <div class="row flex-center q-pb-md">
              <div class="col-6">
                <p class="enunciado">Em qual cidade e bairro você mora?</p>
                <q-radio v-for="cidade in this.cidades" :key="cidade.id" v-model="cidadeModel" :id="cidade.id" :val="cidade.id" :label="cidade.name" color="purple"/>
                <q-input v-model="bairro" label="Bairro:" class="col-6"/>
              </div>
            </div>
            <div class="row flex-center q-pb-md">
              <div class="col-6">
                <p class="enunciado">Qual o grau de distanciamento adotado por você atualmente?</p>
                <q-radio v-model="cor" id="essential" val="essential" label="Saio de casa apenas para atividades presenciais" color="purple"/>
                <q-radio v-model="cor" id="close_friends" val="close_friends" label="Mantenho contato com pessoas próximas (amigos, famílias, etc)" color="purple"/>
                <q-radio v-model="cor" id="in_person" val="in_person" label="Parda" color="purple"/>
                <q-radio v-model="cor" id="normal" val="normal " label="Mantenho minhas atividades e hábitos que tinha antes do período de distanciamento" color="purple"/>
              </div>
            </div>
        </div>
        <div class="row flex-center q-pb-md">
          <q-btn label="Enviar" class="btnEnviar col-6" @click="inserirTutor"/>
        </div>
    </div>
</template>

<style scoped>
  .enunciado {
    font-weight: bold;
  }
  .btnEnviar{
    background-color: #6A1B9A;
    color: white;
  }
</style>
<script>
import api from 'src/services/api'
export default {
  name: 'InserirTutor',
  data () {
    return {
      cidades: [],
      nome: '',
      telefone: '',
      altura: '',
      peso: '',
      genero: '',
      cor: '',
      cidadeModel: '',
      bairro: ''
    }
  },
  beforeMount () {
    this.buscarCidades()
  },
  methods: {
    async inserirTutor () {
      const send = {
        name: this.nome,
        phone: this.telefone,
        height: this.altura,
        weight: this.peso,
        gender: this.genero,
        city: this.cidadeModel,
        neighborhood: this.bairro
      }
      await api.post('/tutors/', send, { headers: { Authorization: 'Token ' + this.$store.getters['login/getToken'] } }
      )
    },
    async buscarCidades () {
      const cidades = await api.get('/cities/', { headers: { Authorization: 'Token ' + this.$store.getters['login/getToken'] } })
      console.log(cidades)
      this.cidades = cidades.data
    }
  }
}
</script>
