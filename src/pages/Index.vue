<template>
  <q-page class="flex flex-center">
<template>
  <div class="q-pa-md" style="max-width: 400px">
    <div class="row justify-around text-center">
      <h4 class="title">Cuidado com a saúde mental de crianças e adolescentes </h4>
    </div>
    <div class="row">
      <p class="subTexto">Ao participar da nossa pesquisa, você ajuda com dados sobre a saúde e pode receber apoio médico, caso precise.</p>
    </div>
    <div class="row justify-around">
      <q-img src="../assets/imagem.png" style="width: 150px" :ratio="1" basic ></q-img>
    </div>
    <div class="row justify-around q-pa-md">
      <q-btn to="Cadastro" class="btnInscricao" label="QUERO PARTICIPAR" />
    </div>
    <div class="row justify-around ">
      <span class="title">Já possui conta?
        <q-btn to="Login" flat label="ACESSAR" />
      </span>
    </div>
  </div>
</template>  </q-page>
</template>
<style>
  .title{
    color: #cca8a9;
    font-weight: bold;
  }
  .btnInscricao{
    color: #6A1B9A;
    background-color: white;
  }
  .subTexto{
    color: white;
    font-weight: bold;
  }
</style>

<script>
export default {
  name: 'PageIndex'
}
</script>
