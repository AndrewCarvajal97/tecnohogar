<template>
    <div class="cabecera">
        <div class="logoPrincipal">
            <Logo class="logo" imagenLogo="./Logo.webp"></Logo>
        </div>
        <div class="Informacion">
            <CajaContactoWhatsapp 
                iconName="whatsapp" 
                prefix="fab" 
                InfoSuperiror="+57 311  215 34 65"
                InfoInferior="andres.carvajal@texelbit.com" 
                style="cursor: pointer;" 
                @click="openWhatsApp"
            ></CajaContactoWhatsapp>
            <CajaContactoWhatsapp 
                iconName="clock" 
                prefix="far" 
                colorIcon="#3155f7" 
                InfoSuperiror="8:00 am - 6:00 pm" 
                InfoInferior="Lunes a Sabado" 
                colorLetra="black" 
                tamanoLetra="1rem"
            ></CajaContactoWhatsapp>
            <CajaRedesSociales></CajaRedesSociales>
        </div>
    </div>
</template>

<script setup>
    import Logo from '../components/Logo.vue';
    import CajaContactoWhatsapp from './CajaContactoWhatsapp.vue';
    import CajaRedesSociales from './CajaRedesSociales.vue';
    const phoneNumber = '3112153465'; // Número de teléfono (sin el símbolo +)
    const openWhatsApp = () => {
    const message = '¡Hola! Quisiera más información.'; // Mensaje predefinido
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank'); // Abre la URL en una nueva ventana o pestaña
    };
</script>


<style scoped>
.cabecera {
    display: flex;
    width: 100%;
    justify-content: space-around;
    flex-wrap: wrap; /* Permite que los elementos se envuelvan en pantallas pequeñas */
    box-sizing: border-box;
}

.logo{
    padding-right: 12rem;
}


.Informacion {
    display: flex;
    margin: 0 1rem;
    gap: 1rem; /* Reducido para mejor espaciado en pantallas pequeñas */
    flex-wrap: wrap; /* Permite que los elementos se envuelvan */
    justify-content: center; /* Centra los elementos cuando están en columna */
}

/* Media query para pantallas pequeñas */
@media (max-width: 768px) {
    header {
        flex-direction: column;
        
    }

    .logoPrincipal {
        margin: 0 0 1rem 0;
        text-align: center;
    }

    .Informacion {
        flex-direction: column;
        gap:0;
        margin: 1rem 1rem;
        width: 100%;
    }
}

/* Media query para pantallas medianas */
@media (min-width: 769px) and (max-width: 1024px) {
    .Informacion {
        gap: 1rem;
    }
    
    .logoPrincipal {
        margin-left: 2rem;
    }
}

/* Media query para pantallas grandes */
@media (min-width: 1025px) {
    .logoPrincipal {
        margin-left: 5rem;
    }

    .Informacion {
        gap: 3rem;
        margin: 0 2rem;
    }
}
</style>