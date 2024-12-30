<!-- CuadroInformativo.vue (Versión grande) -->
<template>
    <div class="service-card">
      <div class="image-container">
        <img :src="imagen" alt="prueba">
      </div>
      <div class="content">
        <div class="titulo">
          <h2>{{ titulo }}</h2>
        </div>
        <p>{{ Mensaje }}</p>
        <router-link :to="URLServices" class="read-more">
          LEER MÁS
        </router-link>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    imagen: {
      type: String,
      default: ""
    },
    Mensaje: {
      type: String,
      default: "asdfasdfqwerqwerqwe"
    },
    titulo: {
      type: String,
      default: "tituloPrueba"
    },
    URLServices: {
      type: String,
      default: ""
    }
  })
  </script>
  
  <style scoped>
  .service-card {
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    background: white;
    border-radius: 0.5rem;
    overflow: hidden;
    transition: all 0.3s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  }
  
  .service-card:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
  
  .image-container {
    position: relative;
    padding-top: 56.25%; /* 16:9 aspect ratio */
  }
  
  .image-container img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  .service-card:hover .image-container img {
    transform: scale(1.05);
  }
  
  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    gap: 1rem;
  }
  
  .titulo {
    text-align: center;
  }
  
  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
    margin: 0;
  }
  
  p {
    flex: 1;
    color: #666;
    line-height: 1.6;
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  .read-more {
    display: inline-block;
    color: #3490dc;
    font-weight: 600;
    text-decoration: none;
    transition: color 0.3s ease;
    text-align: right;
  }
  
  .read-more:hover {
    color: #2779bd;
  }
  
  @media (max-width: 768px) {
    .service-card {
      margin-bottom: 1rem;
    }
  
    h2 {
      font-size: 1.25rem;
    }
  
    .content {
      padding: 1rem;
    }
  }
  </style>