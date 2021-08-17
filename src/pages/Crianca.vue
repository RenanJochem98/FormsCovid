<template>
  <div>
    <h4 class="text-center">{{ crianca.name }}</h4>
     <!-- <div v-for="exam in this.exams" :key="exam.id">
        <q-btn :to="'/Exame/'+exam.id" class="btnInscricao" :label="exam.id+' - '+exam.name + '(' + exam.group+ ')'" />
    </div> -->
    <div>
      <q-tabs class="default" v-model="tab">
        <q-tab name="tutor" icon="mail" label="Tutor" />
        <q-tab name="child" icon="alarm" label="Criança" />
      </q-tabs>
      <q-tab-panels v-model="tab" align="center">
        <q-tab-panel name="tutor">
          <div class="text-h4 q-mb-md">Tutor</div>
          <div v-for="exam in this.examsTutor" :key="exam.id">
            <q-btn :to="'/Exame/'+exam.id" class="btnInscricao full-width" :label="exam.id+' - '+exam.name + '(' + exam.group+ ')'" />
          </div>
        </q-tab-panel>

        <q-tab-panel name="child">
          <div class="text-h4 q-mb-md">Criança</div>
          <div v-for="exam in this.examsChild" :key="exam.id">
            <q-btn :to="'/Exame/'+exam.id" class="btnInscricao full-width" :label="exam.id+' - '+exam.name + '(' + exam.group+ ')'" />
          </div>
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </div>
</template>

<script>
// import { ref } from 'vue'
import api from 'src/services/api'
export default {
  name: 'Crianca',
  data () {
    return {
      crianca: {},
      exams: [],
      examsTutor: [],
      examsChild: [],
      tab: 'tutor'
    }
  },
  beforeMount () {
    this.buscarCrianca()
    this.buscarQuestionarios()
  },
  methods: {
    async buscarCrianca () {
      const crianca = await api.get('/children/' + this.$route.params.id, {
        headers: { Authorization: 'Token ' + this.$store.getters['login/getToken'] }
      })
      this.crianca = crianca.data
    },
    async buscarQuestionarios () {
      const responseExams = await api.get('/exams/', { headers: { Authorization: 'Token ' + this.$store.getters['login/getToken'] } })
      this.exams = responseExams.data
      this.examsTutor = responseExams.data.filter(item => { return item.group.includes('tutor') })
      this.examsChild = responseExams.data.filter(item => { return item.group.includes('child') })
    }
  }
}
</script>
