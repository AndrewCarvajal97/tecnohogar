<template>
    <div class="contact-container">
        
        <FormCotizacion></FormCotizacion>
        <Map></Map>
    </div>
</template>

<script setup>
import FormCotizacion from '../components/FormCotizacion.vue';
import Map from '../components/Map.vue';
</script>

<style  scoped>
.contact-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}


</style>