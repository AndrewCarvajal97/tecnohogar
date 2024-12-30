<script setup>
  import Header from './layouts/Header.vue';
  import Navbar from './components/Navbar.vue';
  import ImagenCarrousel from './components/ImagenCarrousel.vue';
</script>

<template>
  <header>
    <Header></Header>
    <Navbar></Navbar>
  </header>
  
  <router-view />
  
</template>

<style scoped>
  header{
    width: 100%;
    z-index: 2;
  }
</style>
