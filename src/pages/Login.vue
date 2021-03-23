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
      <q-btn label="Continuar" class="btnInscricao justify-around full-width"/>
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
export default {
  name: 'LoginPage',
  data () {
    return {
      password: '',
      isPwd: true
    }
  }
}
</script>
