<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="color-default text-white">
      <q-toolbar>
        <q-btn
          flat
          dense
          icon="arrow_back"
          @click="voltar"
        />
        <q-toolbar-title>
          Forms Covid
        </q-toolbar-title>
        <BtnLogout />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="color-default text-white">
      <q-toolbar>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<style>
  .color-default{
    background-color: #6A1B9A;
  }
</style>

<script>
import BtnLogout from 'src/components/BtnLogout.vue'
export default {
  components: { BtnLogout },
  name: 'InicioLayout',
  methods: {
    voltar () {
      this.$router.go(-1)
    }
  }
}
</script>
