<script setup>
  import Header from './layouts/Header.vue';
  import Navbar from './components/Navbar.vue';
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
    width: 100vw;
  }
</style>
