<template>
    <div class="not-found-container">
      <h1>Error 404</h1>
      <p>La página que estás buscando no existe.</p>
      <router-link to="/" class="home-link">Volver al Inicio</router-link>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .not-found-container {
    text-align: center;
    color: #333;
    padding: 2rem;
  }
  
  h1 {
    font-size: 3rem;
    color: #ffa500; /* Color del texto principal */
  }
  
  p {
    font-size: 1.25rem;
    margin: 1rem 0;
  }
  
  .home-link {
    display: inline-block;
    margin-top: 2rem;
    padding: 0.5rem 1rem;
    background-color: #ffa500; /* Color del botón */
    color: #fff;
    text-decoration: none;
    border-radius: 0.25rem;
  }
  </style>
  