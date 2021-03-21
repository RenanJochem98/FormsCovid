<template>
  <div class="fixed-center col-md-12" style="overflow: auto;">

    <q-form class="" >
      <label class="text-h5 label">
        Qual seu CPF?
      </label>
      <q-input
        filled
        placeholder="Digite o número do documento"
        mask="###.###.###-##"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'O valor digitado não é válido.']"
      />
      <q-btn label="Continuar" class="btnInscricao justify-around full-width"/>
    </q-form>

  </div>
</template>

<style scoped>
  .btnInscricao{
    background-color: #6A1B9A;
    color: white;
  }
  .label{
    color:#5c5c5c
  }
</style>
<script>
export default {
  name: 'Cadastro'
}
</script>
