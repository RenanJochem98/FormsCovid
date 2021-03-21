<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="color-default text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title>
          Forms Covid
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="left" side="left" bordered>
      <q-list>
        <q-item-label header class="text-grey-8">
          Alimentação
        </q-item-label>
        <q-item-label header class="text-grey-8">
          Ansiedade
        </q-item-label>
        <q-item-label header class="text-grey-8">
          Saúde Mental
        </q-item-label>
        <q-item-label header class="text-grey-8">
          Meus Dados
        </q-item-label>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="color-default text-white">
      <q-toolbar>
        <q-toolbar-title>
          Forms Covid
        </q-toolbar-title>
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
export default {
  data () {
    return {
      left: false
    }
  }
}
</script>
