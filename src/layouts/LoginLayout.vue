<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="color-default text-white">
      <q-toolbar>
        <q-toolbar-title>
          Forms Covid
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

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
    return {}
  }
}
</script>
