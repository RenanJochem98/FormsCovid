<template>
  <div class="fixed-center col-md-12" style="overflow: auto;">

    <q-form class="" >
      <label class="text-h5 label">
        CPF
      </label>
      <q-input
        filled
        placeholder="Digite o número do documento"
        mask="###.###.###-##"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'O valor digitado não é válido.']"
        v-model="cpf"
      />
      <label class="text-h5 label">
        Senha
      </label>
      <q-input
        v-model="password"
        filled :type="isPwd ? 'password' : 'text'"
        placeholder="Digite a sua senha"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'O valor digitado não é válido.']"
        value=""
      >
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
      <q-btn label="Continuar" class="btnInscricao justify-around full-width" @click="doLogin"/>
    </q-form>

  </div>
</template>
<style scoped>
  .btnInscricao{
    background-color: #6A1B9A;
    color: white;
  }
  .label{
    color:#5c5c5c
  }
</style>
<script>
import api from 'src/services/api'
export default {
  name: 'LoginPage',
  data () {
    return {
      cpf: '',
      password: '',
      isPwd: true
    }
  },
  methods: {
    doLogin: function () {
      console.log(api)
      api.post('/users/login/', {
        cpf: this.cpf.replace(/\D/g, ''), // remove caracteres nao numericos
        password: this.password
      })
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
      console.log('Deu boa')
    }
  }
}
</script>
