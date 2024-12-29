<template>
   <img :src="imagenLogo" alt="Logo" style="height: 120px; margin: 10px 2rem;">
</template>

<script setup>
const props=defineProps({
    imagenLogo: {
        type: String,
        required: true
    }
})
</script>

<style  scoped>

</style>