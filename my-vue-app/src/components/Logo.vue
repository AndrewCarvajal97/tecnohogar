<template>
    <img 
      :src="imagenLogo" 
      alt="Logo" 
      style="height: 120px; margin: 10px 2rem;" 
      @click="goHome"
      class="clickable-logo"
    >
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  
  const props = defineProps({
    imagenLogo: {
      type: String,
      required: true
    }
  });
  
  const router = useRouter();
  
  const goHome = () => {
    router.push('/');
  };
  </script>
  
  <style scoped>
  .clickable-logo {
    cursor: pointer;
  }
  </style>
  