<template>
    <div @click="redirectToPage" class="contenedorBoton" :style="styleFondo">
      <IconWrapper 
        :iconName="icon" 
        :prefix="prefi" 
        width="30px" 
        height="30px" 
        :color="colorIcon" 
      />  
      <div class="texto">
        <p>{{ texto }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useRouter } from 'vue-router';
  
  const props = defineProps({
    icon: {
      type: String,
      default: 'whatsapp',
    },
    prefi: {
      type: String,
      default: 'fab',
    },
    texto: {
      type: String,
      default: 'Contactanos',
    },
    ruta: {
      type: String,
      default: 'https://wa.me/3112153465',
    },
    colorIcon: {
      type: String,
      default: 'white',
    },
    colorFondo: {
      type: String,
      default: 'grey',
    }
  });
  
  const router = useRouter();
  
  const redirectToPage = () => {
    window.open(props.ruta, '_blank');
  };
  
  const styleFondo = computed(() => ({
    backgroundColor: props.colorFondo,
  }));
  </script>
  
  <style scoped>
  .contenedorBoton {
    display: flex;
    cursor: pointer;
    width: 220px;
    height: 50px;
    align-items: center;
    margin: 0;
    color: white;
  }
  
  .texto {
    font-size: 1.4rem;
    font-weight: 600;
    margin: auto;
  }
  </style>
  