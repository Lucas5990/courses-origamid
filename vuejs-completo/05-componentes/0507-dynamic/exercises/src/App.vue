<template>
  <div id="app">
        <!-- 
      Crie 3 componentes:

      1: Componente falando sobre a empresa
      2: Componente com os serviços da empresa
      3: Componente com um formulário de contato

      Crie um menu, que ao clique ele mude os componentes
      acima de forma dinâmica. Não destrua o componente
    -->

    <img alt="Vue logo" src="./assets/logo.png">
    <nav id="menu">
      <ul id="menu-list">
        <li @click="componenteAtivo = 'SobreEmpresa'">Sobre</li>
        <li @click="componenteAtivo = ''">Serviços</li>
        <li @click="componenteAtivo = ''">Contato</li>
      </ul>
    </nav>
    <keep-alive>
      <component v-bind:is="componenteAtivo"></component>
    </keep-alive>
  </div>
</template>

<script>

import SobreEmpresa from './components/SobreEmpresa';
export default {
  name: 'App',
  components: {
    SobreEmpresa
  },
  data() {
    return {
      componenteAtivo: '',
    };
  }
}
</script>

<style>
#menu{
  font-family: Arial, Helvetica, sans-serif;
  box-sizing: border-box;
}

#menu-list{
  display: flex;
  justify-content: center;
  list-style: none;
  text-align: center;
}

#menu-list > li{
  padding: 20px;
  border: 5px solid #e3f1a2;
  margin: 0px 10px;
  width: 100px;
}

#menu-list > li:hover{
  background: #404040;
  transition: 0.6s ease;
  color: white;
  cursor: pointer;
}
</style>
