<template>
  <q-page padding>
    <h1>{{ cpf }}</h1>
  </q-page>
</template>

<script>
// import { mapState } from 'vuex'
export default {
  name: 'Inicio',
  computed: {
    // ...mapState('login', ['cpf'])
    cpf: this.$store.state.login.cpf
  }
}
</script>
