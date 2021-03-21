<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container class="color-default">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style>
  .color-default{
    background-color: #6A1B9A;
  }
</style>

<script>
export default {
  name: 'IndexLayout',
  data () {
    return {}
  }
}
</script>
