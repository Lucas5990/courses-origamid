<template>
  <div id="app">
    <modal-principal>
      <template v-slot:header="{ logo }">
        Esse é o header
        {{logo}}
      </template>
      <template v-slot:default="{ user }">
        <p>{{user.nome}}</p>
        <p>Esse é um teste</p>
        <button>Comprar</button>
      </template>
      <template v-slot:footer>
        <p>Esse é o footer</p>
      </template>
    </modal-principal>
  </div>
</template>

<script>
import ModalPrincipal from "./components/ModalPrincipal.vue";

export default {
  name: "app",
  components: {
    ModalPrincipal
  }
};
</script>

<style>
</style>
