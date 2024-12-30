<!-- ServiceCard.vue -->
<template>
    <div class="service-card">
      <div class="image-container">
        <img :src="imagen" alt="prueba">
      </div>
      <div class="content">
        <div class="titulo">
          <h2>{{ titulo }}</h2>
        </div>
        <div class="mensaje">
          <p>{{ Mensaje }}</p>
        </div>
        
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
    display: flex;
    background: white;
    border-radius: 0.5rem;
    transition: all 0.3s ease;
    min-height: 120px;
    width: 100%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  }
  
  .service-card:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
  
  .image-container {
    flex: 0 0 30%;
    max-width: 30%;
  }
  
  .image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.5rem 0 0 0.5rem;
    transition: transform 0.3s ease;
  }
  
  .service-card:hover .image-container img {
    transform: scale(1.05);
  }
  
  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: 0.5rem;
  }
  
  .titulo {
    width: 100%;
    word-wrap: break-word;
    text-align: center;
  }
  
  h2 {
    font-size: 1.1rem;
    font-weight: bold;
    color: #333;
    margin: 0;
  }
  
  .mensaje {
    flex: 1;
  }
  
  p {
    margin: 0;
    color: #666;
    line-height: 1.4;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  
  
  @media (max-width: 768px) {
    .service-card {
      flex-direction: row;
      min-height: 100px;
    }
    
    .image-container {
      flex: 0 0 40%;
      max-width: 40%;
    }
  
    h2 {
      font-size: 1rem;
    }
  
    p {
      font-size: 0.9rem;
    }
  }
  
  @media (max-width: 480px) {
    .service-card {
      flex-direction: column;
      min-height: auto;
    }
    
    .image-container {
      flex: 0 0 150px;
      max-width: 100%;
    }
  
    .image-container img {
      border-radius: 0.5rem 0.5rem 0 0;
    }
  }
  </style>