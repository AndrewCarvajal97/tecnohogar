<template>
    <div class="contenedor">
        <ImagenCarrousel></ImagenCarrousel>
        <ConjuntoTarjetasInformativas></ConjuntoTarjetasInformativas>
        <SeccionServiciosHome></SeccionServiciosHome>
        <CintaDeCotizacion></CintaDeCotizacion>
        <ColunmaSoluciones></ColunmaSoluciones>
        <Footer></Footer>
        <div>aca ira algo mas</div>
    </div>
    
    
    
</template>

<script setup>
    import ImagenCarrousel from '../components/ImagenCarrousel.vue';
    import ConjuntoTarjetasInformativas from '../layouts/ConjuntoTarjetasInformativas.vue';
    import SeccionServiciosHome from '../layouts/SeccionServiciosHome.vue';
    import CintaDeCotizacion from '../layouts/CintaDeCotizacion.vue';
    import ColunmaSoluciones from '../layouts/ColunmaSoluciones.vue';
    import Footer from '../components/Footer.vue';
</script>

<style  scoped>
    .contenedor{
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>