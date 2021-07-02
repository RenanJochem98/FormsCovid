<template>
  <q-page class="flex flex-center">
    <div>
      <q-btn :to="this.$route.params.id+'/Questao'" class="btnInscricao" label="Responder questionario" />
      <!-- <h5>Id Questionario: {{ this.$route.params.id}}</h5> -->
      <div class="justify-around text-center">
        <h4 class="">{{ this.exame.name }}</h4>
        <h6>{{ this.exame.description }}</h6>
        <h6>Questoes</h6>
        <div v-for="question in this.exame.questions" :key="question.id" class="questao q-pa-lg">
          <p class="enunciado">{{question.order}} - {{question.title}}</p>
          <div v-if="question.response_type == 'select'" class="q-pb-md">
            <div class="row flex-center q-pb-md">
              <div v-for="answer in question.answers" :key="answer.id" class="col-3">
                <!-- <input type="radio" :name="question.id" :id="answer.id">
                <label :for="answer.id">{{answer.title}}</label> -->
                <q-radio v-model="result[question.id]" :id="answer.id" :val="answer.id" :label="answer.title" color="purple"/>
              </div>
            </div>
          </div>
          <div v-else-if="question.response_type == 'free_text'" class="q-pb-md">
            <div class="row flex-center q-pb-md">
              <q-input v-model="result[question.id]" label="Escreva aqui sua resposta" class="col-6"/>
            </div>
          </div>
        </div>
        <q-btn label="Enviar" @click="enviarResposta"/>
      </div>
    </div>
  </q-page>
</template>

<style scoped>
  .enunciado {
    font-weight: bold;
  }
  .questao:nth-child(odd) {
    background-color: rgb(245, 245, 245);
  }
</style>
<script>
import api from 'src/services/api'
export default {
  name: 'Exame',
  data () {
    return {
      exame: {},
      result: {}
    }
  },
  beforeMount () {
    this.buscarQuestionario()
  },
  methods: {
    async buscarQuestionario () {
      const exam = await api.get('/exams/' + this.$route.params.id, { headers: { Authorization: 'Token ' + this.$store.getters['login/getToken'] } })
      this.exame = exam.data
    },
    enviarResposta () {
      console.log(this.result)
    }
  }
}
</script>
