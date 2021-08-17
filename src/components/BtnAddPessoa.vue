<template>
  <div class='row template'>
    <q-btn class="color q-pa-xs" :to=to>
    <div>
      <div>{{ titulo }}</div>
      <div class='descricao'>{{ descricao }}</div>
    </div>
    <q-icon right size="3em" name="group_add" class="icon" />
  </q-btn>
  </div>
</template>
<style scoped>
  .template {
    padding: 1%;
    margin: 0.1%;
  }
  .icon {
    color: #6A1B9A;
    font-size: 75%;
  }
  .btn {
    background-color: rgb(241, 240, 240);
  }
  .descricao {
    float: left;
    font-size: 80%;
  }
</style>
<script>
export default {
  name: 'BtnAddPessoa',
  props: ['titulo', 'descricao', 'to']
}
</script>
