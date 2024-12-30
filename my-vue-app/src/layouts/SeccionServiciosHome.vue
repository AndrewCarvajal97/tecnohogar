<template>
    <div class="contenedor-servicios">
      <div class="serviciosGrandes">
        <CuadroInformativo
          v-for="index in [0, 3]"
          :key="index"
          :imagen="servicios[index].imagen"
          :titulo="servicios[index].titulo"
          :Mensaje="servicios[index].Mensaje"
          :URLServices="servicios[index].UrlService"
        />
      </div>
      <div class="ServiciosPequeños">
        <CuadroInformativoPequeño
          v-for="index in [1, 2, 5, 4]"
          :key="index"
          :imagen="servicios[index].imagen"
          :titulo="servicios[index].titulo"
          :Mensaje="servicios[index].Mensaje"
          :URLServices="servicios[index].UrlService"
        />
      </div>
    </div>
  </template>
  
  <script setup>
  import CuadroInformativo from '../components/CuadroInformativo.vue';
  import CuadroInformativoPequeño from '../components/CuadroInformativoPequeño.vue';
  import { servicios } from '../../public/publicData/Servicios.js'
  </script>
  
  <style scoped>
  .contenedor-servicios {
    display: flex;
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }
  
  .serviciosGrandes {
    flex: 2;
    display: flex;
    gap: 2rem;
  }
  
  .ServiciosPequeños {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  @media (max-width: 1024px) {
    .contenedor-servicios {
      margin-top: 12rem;
      padding: 1rem;
      gap: 1rem;
    }
  }
  
  @media (max-width: 768px) {
    .contenedor-servicios {
      margin-top: 12rem;
      flex-direction: column;
    }
  
    .serviciosGrandes {
      flex-direction: column;
    }
  
    .ServiciosPequeños {
      gap: 1rem;
    }
  }
  </style>