<script setup>
  import Header from './layouts/Header.vue';
  import Navbar from './components/Navbar.vue';
  import Footer from './components/Footer.vue'
  
</script>

<template>
  <main>
    <header>
      <Header></Header>
      <Navbar></Navbar>
    </header>
    <section>
      <router-view />
    </section>
    <footer>
      <Footer></Footer>
    </footer>  
  </main>
  
  
</template>

<style scoped>
  main{
    display: grid;
    grid-template-rows: auto auto 1fr;
  }
  header{
    width: 100%;
    z-index: 2;
  }
</style>
