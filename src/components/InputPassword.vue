<template>
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
</template>
<script>

export default {
  name: 'InputPassword',
  data () {
    return {
      isPwd: true,
      password: ''
    }
  }
}
</script>
