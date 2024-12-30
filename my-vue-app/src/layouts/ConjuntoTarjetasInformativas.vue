<template>
    <div class="contenedorTarjetas">
        <TarjetaInformativa title="Expertos" descripcion="Soluciones de calidad, respaldadas por la experiencia de nuestros expertos." icon="search"></TarjetaInformativa>
        <TarjetaInformativa title="Cotizaciones" descripcion="Solicita tu cotización personalizada con precios justos y soluciones conforme a tu necesidad." icon="calendar-alt"></TarjetaInformativa>
        <TarjetaInformativa title="Calidad" descripcion="soluciones de alta calidad que superan tus expectativas." ></TarjetaInformativa>
    </div>
</template>

<script setup>
 import TarjetaInformativa from '../components/TarjetaInformativa.vue';
</script>

<style  scoped>
    .contenedorTarjetas{
        width: 90%;
        height: 200px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin-top: .5rem;
       align-items: center;
       box-sizing: border-box;
    }
    @media (max-width: 768px) {
        .contenedorTarjetas{
            margin-top: 1rem;
            flex-direction: column;
            row-gap: 3rem;
        }
    }

</style>