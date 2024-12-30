<template>
    <div class="container">
        <div class="frase">
            <p>{{ frase }}</p>
        </div>
        
        <div class="botonesAccion">
            <BotonDeAccion
            colorIcon="white"
            colorFondo="green">
            </BotonDeAccion>
            <BotonDeAccion
            icon="briefcase"
            prefi="fas"
            texto="Cotiza Gratis"
            ruta="http://localhost:5173/contacto"
            colorFondo="rgb(89, 133, 255)"></BotonDeAccion>
        </div>
    </div>
</template>

<script setup>
    import BotonDeAccion from '../components/BotonDeAccion.vue';
    const props=defineProps({
        frase: {
            type: String,
            default:"¿Necesitas reparar algo en tu hogar? ¡Cotiza gratis en línea y encuentra la solución perfecta!"
        }
    })
</script>

<style  scoped>
    .container{
        display: flex;
        width: 100%;
        height: 120px;
        justify-content: space-evenly;
        align-items: center;
        background-color: rgb(114, 114, 114);
    }
    .frase{
        width: 50%;
        margin-left: 2rem;
        font-size: 1.1rem;
        font-weight: 500;
        color: aliceblue;
    }
    .botonesAccion{
        display: flex;
        gap: 1rem;
    }
    @media (max-width: 768px) {
        .container{
            flex-direction: column;
            gap: 2rem;
            height: 100%;
        }
        .frase{
            width: 100%;
            font-size: 1.5rem;
            margin: 1rem 1rem;
            
        }
        .botonesAccion{
            flex-direction: column;
            margin-bottom: 1rem;
        }
    }
</style>