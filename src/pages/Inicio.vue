<template>
  <div>
    <h4>Inicio</h4>
    <h5>{{ token }}</h5>
  </div>
</template>

<script>
export default {
  name: 'Inicio',
  data () {
    return {
      token: this.$store.getters['login/getToken']
    }
  }
}
</script>
