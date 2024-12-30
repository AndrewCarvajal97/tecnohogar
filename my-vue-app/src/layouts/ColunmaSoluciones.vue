<template>
    
    <div class="tablas">
        <div class="container">
            <h2>Soluciones: </h2>
            <TarjetaInformativa title="Instalaciones" descripcion="Transformamos tus espacios con soluciones integrales y de alta calidad para garantizar funcionalidad, seguridad y estética. Confía en nosotros para mantener y mejorar tus instalaciones. " icon="wrench"></TarjetaInformativa>
            <TarjetaInformativa title="Mantenimientos" descripcion="Nos encargamos de mantener tus instalaciones en óptimas condiciones con soluciones profesionales y eficientes. Nuestro objetivo es brindarte tranquilidad y confianza." icon="cog"></TarjetaInformativa>
            <TarjetaInformativa title="Camaras y Alarmas" descripcion="Protege lo que más importa con soluciones integrales en vigilancia y alarmas de última generación.Con nuestro equipo profesional, tu seguridad está en las mejores manos. ¡Confía en nosotros para proteger tu hogar o negocio!" icon="bell"></TarjetaInformativa>
            <TarjetaInformativa title="Cotizaciones" descripcion="Brindamos soluciones para hogares y negocios en instalación, mantenimiento, redes de gas, agua, seguridad, diseño web, plomería y reparaciones. ¡Cotiza ahora y comienza tu proyecto!" icon="calculator"></TarjetaInformativa>
        </div>
        <div class="container">
            <h2>Quienes Somos: </h2>
            <TarjetaInformativa title="Misión" descripcion="Ofrecemos soluciones personalizadas y de calidad en gas, agua, seguridad, diseño web y reparaciones locativas para hogares y negocios en Colombia y Santander." icon="check"></TarjetaInformativa>
            <TarjetaInformativa title="Visión" descripcion="Ser líderes en soluciones integrales, reconocidos por nuestra capacidad de adaptarnos y satisfacer las diferentes  necesidades de nuestros clientes para 2030." icon="check"></TarjetaInformativa>
            <TarjetaInformativa title="Profesionalismo" descripcion="En TecnoHogar, ofrecemos soluciones de calidad con un enfoque experto y personalizado, garantizando resultados confiables que superan las expectativas de nuestros clientes." icon="check"></TarjetaInformativa>
            <TarjetaInformativa title="Honestidad y Compromiso:" descripcion="En TecnoHogar, actuamos con transparencia y responsabilidad, cumpliendo siempre con nuestros compromisos y asegurando la confianza de nuestros clientes en cada servicio." icon="check"></TarjetaInformativa>
        </div>
    </div>
</template>

<script setup>
import TarjetaInformativa from '../components/TarjetaInformativa.vue';

</script>

<style  scoped>
    .tablas{
        display: flex;
        width: 100%;
    }
    .container{
        display: flex;
        flex-direction: column;
        gap: 2rem;
        margin: 1rem;
        width: 50%;
    }
    h2{
        text-align: left;
        font-size: 2rem;
        font-weight: 600;
    }
    @media (max-width: 768px) {
        .tablas{
            flex-direction: column;
        }
        .container{
            width: 100%;
        }
    }
</style>