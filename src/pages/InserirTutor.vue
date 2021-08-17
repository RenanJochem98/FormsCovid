<template>
    <div>
        <h4 class="text-center">Inserção de Tutor</h4>
        <div class="q-pb-md">
            <div class="row flex-center q-pb-md">
              <q-input v-model="nome" label="Qual seu nome?" class="col-6"/>
            </div>
            <div class="row flex-center q-pb-md">
              <q-input v-model="telefone" label="Qual seu telefone?" class="col-6" mask="(##) # ####-####"/>
            </div>
            <div class="row flex-center q-pb-md">
              <q-input v-model="altura" label="Qual sua altura (em metros)?" class="col-6" mask="#,##"/>
            </div>
            <div class="row flex-center q-pb-md">
              <q-input v-model="peso" label="Qual seu peso (em quilos)?" class="col-6"/>
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
              <div class="col-6">
                <p class="enunciado">Em qual cidade e bairro você mora?</p>
                <q-radio v-for="cidade in this.cidades" :key="cidade.id" v-model="cidadeModel" :id="cidade.id" :val="cidade.id" :label="cidade.name" color="purple"/>
                <q-input v-model="bairro" label="Bairro:" class="col-6"/>
              </div>
            </div>
            <div class="row flex-center q-pb-md">
              <div class="col-6">
                <p class="enunciado">Qual o grau de distanciamento adotado por você atualmente?</p>
                <q-radio v-model="cor" id="essential" val="essential" label="Saio de casa apenas para atividades essenciais" color="purple"/>
                <q-radio v-model="cor" id="close_friends" val="close_friends" label="Mantenho contato com pessoas próximas (amigos, famílias, etc)" color="purple"/>
                <q-radio v-model="cor" id="in_person" val="in_person" label="Parda" color="purple"/>
                <q-radio v-model="cor" id="normal" val="normal " label="Mantenho minhas atividades e hábitos que tinha antes do período de distanciamento" color="purple"/>
              </div>
            </div>
            <div class="row flex-center q-pb-md">
              <div class="col-6">
                <p class="enunciado">Você ou outra pessoa adulta da casa já teve diagnóstico de depressão?</p>
                <q-radio v-model="teve_depressao" id="1" val="true" label="Sim" color="purple"/>
                <q-radio v-model="teve_depressao" id="2" val="false" label="Não" color="purple"/>
                <q-radio v-model="teve_depressao" id="3" val="" label="Prefiro não responder" color="purple"/>
              </div>
            </div>
            <div class="row flex-center q-pb-md">
              <div class="col-6">
                <p class="enunciado">Se sim, qual foi o tempo de tratamento realizado?</p>
                <q-radio v-model="tempo_tratamento_depressao" id="1" val="essential" label="Nunca foi tratado" color="purple"/>
                <q-radio v-model="tempo_tratamento_depressao" id="2" val="still_on_treatment" label="Ainda em Tratamento" color="purple"/>
                <q-radio v-model="tempo_tratamento_depressao" id="3" val="one_to_two" label="De 1 a 2 anos" color="purple"/>
                <q-radio v-model="tempo_tratamento_depressao" id="4" val="two_to_four" label="De 2 a 4 anos" color="purple"/>
                <q-radio v-model="tempo_tratamento_depressao" id="5" val="more_than_four" label="Mais de 4 anos" color="purple"/>
              </div>
            </div>
            <div class="row flex-center q-pb-md">
              <div class="col-6">
                <p class="enunciado">Você ou outra pessoa adulta da casa já teve diagnóstico de transtorno de ansiedade?</p>
                <q-radio v-model="teve_ansiedade" id="1" val="true" label="Sim" color="purple"/>
                <q-radio v-model="teve_ansiedade" id="2" val="false" label="Não" color="purple"/>
                <q-radio v-model="teve_ansiedade" id="3" val="" label="Prefiro não responder" color="purple"/>
              </div>
            </div>
            <div class="row flex-center q-pb-md">
              <div class="col-6">
                <p class="enunciado">Se sim, qual foi o tempo de tratamento realizado?</p>
                <q-radio v-model="tempo_tratamento_ansiedade" id="1" val="essential" label="Nunca foi tratado" color="purple"/>
                <q-radio v-model="tempo_tratamento_ansiedade" id="2" val="still_on_treatment" label="Ainda em Tratamento" color="purple"/>
                <q-radio v-model="tempo_tratamento_ansiedade" id="3" val="one_to_two" label="De 1 a 2 anos" color="purple"/>
                <q-radio v-model="tempo_tratamento_ansiedade" id="4" val="two_to_four" label="De 2 a 4 anos" color="purple"/>
                <q-radio v-model="tempo_tratamento_ansiedade" id="5" val="more_than_four" label="Mais de 4 anos" color="purple"/>
              </div>
            </div>
            <div class="row flex-center q-pb-md">
              <div class="col-6">
                <p class="enunciado">Você ou outra pessoa adulta da casa já teve diagnóstico de transtorno bipolar?</p>
                <q-radio v-model="teve_transtorno_bipolar" id="1" val="true" label="Sim" color="purple"/>
                <q-radio v-model="teve_transtorno_bipolar" id="2" val="false" label="Não" color="purple"/>
                <q-radio v-model="teve_transtorno_bipolar" id="3" val="" label="Prefiro não responder" color="purple"/>
              </div>
            </div>
            <div class="row flex-center q-pb-md">
              <div class="col-6">
                <p class="enunciado">Se sim, qual foi o tempo de tratamento realizado?</p>
                <q-radio v-model="tempo_tratamento_transtorno_bipolar" id="1" val="essential" label="Nunca foi tratado" color="purple"/>
                <q-radio v-model="tempo_tratamento_transtorno_bipolar" id="2" val="still_on_treatment" label="Ainda em Tratamento" color="purple"/>
                <q-radio v-model="tempo_tratamento_transtorno_bipolar" id="3" val="one_to_two" label="De 1 a 2 anos" color="purple"/>
                <q-radio v-model="tempo_tratamento_transtorno_bipolar" id="4" val="two_to_four" label="De 2 a 4 anos" color="purple"/>
                <q-radio v-model="tempo_tratamento_transtorno_bipolar" id="5" val="more_than_four" label="Mais de 4 anos" color="purple"/>
              </div>
            </div>
            <div class="row flex-center q-pb-md">
              <div class="col-6">
                <p class="enunciado">Você ou outra pessoa adulta da casa já teve diagnóstico de transtorno de personalidade borderline?</p>
                <q-radio v-model="teve_borderline" id="1" val="true" label="Sim" color="purple"/>
                <q-radio v-model="teve_borderline" id="2" val="false" label="Não" color="purple"/>
                <q-radio v-model="teve_borderline" id="3" val="" label="Prefiro não responder" color="purple"/>
              </div>
            </div>
            <div class="row flex-center q-pb-md">
              <div class="col-6">
                <p class="enunciado">Se sim, qual foi o tempo de tratamento realizado?</p>
                <q-radio v-model="tempo_tratamento_borderline" id="1" val="essential" label="Nunca foi tratado" color="purple"/>
                <q-radio v-model="tempo_tratamento_borderline" id="2" val="still_on_treatment" label="Ainda em Tratamento" color="purple"/>
                <q-radio v-model="tempo_tratamento_borderline" id="3" val="one_to_two" label="De 1 a 2 anos" color="purple"/>
                <q-radio v-model="tempo_tratamento_borderline" id="4" val="two_to_four" label="De 2 a 4 anos" color="purple"/>
                <q-radio v-model="tempo_tratamento_borderline" id="5" val="more_than_four" label="Mais de 4 anos" color="purple"/>
              </div>
            </div>
            <div class="row flex-center q-pb-md">
              <div class="col-6">
                <p class="enunciado">Você ou outra pessoa adulta da casa já teve diagnóstico de déficit de atenção?</p>
                <q-radio v-model="teve_deficit_atencao" id="1" val="true" label="Sim" color="purple"/>
                <q-radio v-model="teve_deficit_atencao" id="2" val="false" label="Não" color="purple"/>
                <q-radio v-model="teve_deficit_atencao" id="3" val="" label="Prefiro não responder" color="purple"/>
              </div>
            </div>
            <div class="row flex-center q-pb-md">
              <div class="col-6">
                <p class="enunciado">Se sim, qual foi o tempo de tratamento realizado?</p>
                <q-radio v-model="tempo_tratamento_deficit_atencao" id="essential" val="essential" label="Nunca foi tratado" color="purple"/>
                <q-radio v-model="tempo_tratamento_deficit_atencao" id="close_friends" val="still_on_treatment" label="Ainda em Tratamento" color="purple"/>
                <q-radio v-model="tempo_tratamento_deficit_atencao" id="essential" val="one_to_two" label="De 1 a 2 anos" color="purple"/>
                <q-radio v-model="tempo_tratamento_deficit_atencao" id="close_friends" val="two_to_four" label="De 2 a 4 anos" color="purple"/>
                <q-radio v-model="tempo_tratamento_deficit_atencao" id="more_than_four" val="more_than_four" label="Mais de 4 anos" color="purple"/>
              </div>
            </div>
            <div class="row flex-center q-pb-md">
              <div class="col-6">
                <p class="enunciado">Você ou outra pessoa adulta da casa já teve diagnóstico de estresse pós-traumático?</p>
                <q-radio v-model="teve_estresse_pos_traumatico" id="1" val="true" label="Sim" color="purple"/>
                <q-radio v-model="teve_estresse_pos_traumatico" id="2" val="false" label="Não" color="purple"/>
                <q-radio v-model="teve_estresse_pos_traumatico" id="3" val="" label="Prefiro não responder" color="purple"/>
              </div>
            </div>
            <div class="row flex-center q-pb-md">
              <div class="col-6">
                <p class="enunciado">Se sim, qual foi o tempo de tratamento realizado?</p>
                <q-radio v-model="tempo_tratamento_estresse_pos_traumatico" id="essential" val="essential" label="Nunca foi tratado" color="purple"/>
                <q-radio v-model="tempo_tratamento_estresse_pos_traumatico" id="close_friends" val="still_on_treatment" label="Ainda em Tratamento" color="purple"/>
                <q-radio v-model="tempo_tratamento_estresse_pos_traumatico" id="essential" val="one_to_two" label="De 1 a 2 anos" color="purple"/>
                <q-radio v-model="tempo_tratamento_estresse_pos_traumatico" id="close_friends" val="two_to_four" label="De 2 a 4 anos" color="purple"/>
                <q-radio v-model="tempo_tratamento_estresse_pos_traumatico" id="more_than_four" val="more_than_four" label="Mais de 4 anos" color="purple"/>
              </div>
            </div>
            <div class="row flex-center q-pb-md">
              <div class="col-6">
                <p class="enunciado">Você ou outra pessoa adulta da casa já teve diagnóstico de transtorno obssessivo-compulsivo?</p>
                <q-radio v-model="teve_transtorno_obsessivo_compulsivo" id="1" val="true" label="Sim" color="purple"/>
                <q-radio v-model="teve_transtorno_obsessivo_compulsivo" id="2" val="false" label="Não" color="purple"/>
                <q-radio v-model="teve_transtorno_obsessivo_compulsivo" id="3" val="" label="Prefiro não responder" color="purple"/>
              </div>
            </div>
            <div class="row flex-center q-pb-md">
              <div class="col-6">
                <p class="enunciado">Se sim, qual foi o tempo de tratamento realizado?</p>
                <q-radio v-model="tempo_tratamento_transtorno_obsessivo_compulsivo" id="1" val="essential" label="Nunca foi tratado" color="purple"/>
                <q-radio v-model="tempo_tratamento_transtorno_obsessivo_compulsivo" id="2" val="still_on_treatment" label="Ainda em Tratamento" color="purple"/>
                <q-radio v-model="tempo_tratamento_transtorno_obsessivo_compulsivo" id="3" val="one_to_two" label="De 1 a 2 anos" color="purple"/>
                <q-radio v-model="tempo_tratamento_transtorno_obsessivo_compulsivo" id="4" val="two_to_four" label="De 2 a 4 anos" color="purple"/>
                <q-radio v-model="tempo_tratamento_transtorno_obsessivo_compulsivo" id="5" val="more_than_four" label="Mais de 4 anos" color="purple"/>
              </div>
            </div>
            <div class="row flex-center q-pb-md">
              <div class="col-6">
                <p class="enunciado">Você ou outra pessoa adulta da casa já teve diagnóstico de transtorno de alcoolismo?</p>
                <q-radio v-model="teve_alcoolismo" id="1" val="true" label="Sim" color="purple"/>
                <q-radio v-model="teve_alcoolismo" id="2" val="false" label="Não" color="purple"/>
                <q-radio v-model="teve_alcoolismo" id="3" val="" label="Prefiro não responder" color="purple"/>
              </div>
            </div>
            <div class="row flex-center q-pb-md">
              <div class="col-6">
                <p class="enunciado">Se sim, qual foi o tempo de tratamento realizado?</p>
                <q-radio v-model="tempo_tratamento_alcoolismo" id="1" val="essential" label="Nunca foi tratado" color="purple"/>
                <q-radio v-model="tempo_tratamento_alcoolismo" id="2" val="still_on_treatment" label="Ainda em Tratamento" color="purple"/>
                <q-radio v-model="tempo_tratamento_alcoolismo" id="3" val="one_to_two" label="De 1 a 2 anos" color="purple"/>
                <q-radio v-model="tempo_tratamento_alcoolismo" id="4" val="two_to_four" label="De 2 a 4 anos" color="purple"/>
                <q-radio v-model="tempo_tratamento_alcoolismo" id="5" val="more_than_four" label="Mais de 4 anos" color="purple"/>
              </div>
            </div>
            <div class="row flex-center q-pb-md">
              <div class="col-6">
                <p class="enunciado">Você ou outra pessoa adulta da casa já teve diagnóstico de transtorno de esquizofrenia?</p>
                <q-radio v-model="teve_esquizofrenia" id="1" val="true" label="Sim" color="purple"/>
                <q-radio v-model="teve_esquizofrenia" id="2" val="false" label="Não" color="purple"/>
                <q-radio v-model="teve_esquizofrenia" id="3" val="" label="Prefiro não responder" color="purple"/>
              </div>
            </div>
            <div class="row flex-center q-pb-md">
              <div class="col-6">
                <p class="enunciado">Se sim, qual foi o tempo de tratamento realizado?</p>
                <q-radio v-model="tempo_tratamento_esquizofrenia" id="1" val="essential" label="Nunca foi tratado" color="purple"/>
                <q-radio v-model="tempo_tratamento_esquizofrenia" id="2" val="still_on_treatment" label="Ainda em Tratamento" color="purple"/>
                <q-radio v-model="tempo_tratamento_esquizofrenia" id="3" val="one_to_two" label="De 1 a 2 anos" color="purple"/>
                <q-radio v-model="tempo_tratamento_esquizofrenia" id="4" val="two_to_four" label="De 2 a 4 anos" color="purple"/>
                <q-radio v-model="tempo_tratamento_esquizofrenia" id="5" val="more_than_four" label="Mais de 4 anos" color="purple"/>
              </div>
            </div>
            <div class="row flex-center q-pb-md">
              <div class="col-6">
                <p class="enunciado">Você ou outra pessoa adulta da casa já teve diagnóstico de COVID-19?</p>
                <q-radio v-model="teve_covid" id="1" val="true" label="Sim" color="purple"/>
                <q-radio v-model="teve_covid" id="2" val="false" label="Não" color="purple"/>
                <q-radio v-model="teve_covid" id="3" val="" label="Prefiro não responder" color="purple"/>
              </div>
            </div>
            <div class="row flex-center q-pb-md">
              <div class="col-6">
                <p class="enunciado">Se sim, qual foi o tempo de tratamento realizado?</p>
                <q-radio v-model="tempo_tratamento_covid" id="1" val="essential" label="Nunca foi tratado" color="purple"/>
                <q-radio v-model="tempo_tratamento_covid" id="2" val="still_on_treatment" label="Ainda em Tratamento" color="purple"/>
                <q-radio v-model="tempo_tratamento_covid" id="3" val="one_to_two" label="De 1 a 2 anos" color="purple"/>
                <q-radio v-model="tempo_tratamento_covid" id="4" val="two_to_four" label="De 2 a 4 anos" color="purple"/>
                <q-radio v-model="tempo_tratamento_covid" id="5" val="more_than_four" label="Mais de 4 anos" color="purple"/>
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
      bairro: '',
      teve_depressao: '',
      tempo_tratamento_depressao: '',
      teve_ansiedade: '',
      tempo_tratamento_ansiedade: '',
      teve_transtorno_bipolar: '',
      tempo_tratamento_transtorno_bipolar: '',
      teve_borderline: '',
      tempo_tratamento_borderline: '',
      teve_deficit_atencao: '',
      tempo_tratamento_deficit_atencao: '',
      teve_estresse_pos_traumatico: '',
      tempo_tratamento_estresse_pos_traumatico: '',
      teve_transtorno_obsessivo_compulsivo: '',
      tempo_tratamento_transtorno_obsessivo_compulsivo: '',
      teve_alcoolismo: '',
      tempo_tratamento_alcoolismo: '',
      teve_esquizofrenia: '',
      tempo_tratamento_esquizofrenia: '',
      teve_covid: '',
      tempo_tratamento_covid: ''
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
        neighborhood: this.bairro,
        has_depression: this.teve_depressao,
        depression_treatment_time: this.tempo_tratamento_depressao
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
