<template>
  <q-btn
    flat
    dense
    icon="logout"
    @click="logout"
  />
</template>
<script>
export default {
  name: 'BtnLogout',
  methods: {
    logout () {
      console.log('Logout')
      this.$store.dispatch('login/ActionLogout')
      this.$router.push({ name: 'index' })
    }
  }
}
</script>
