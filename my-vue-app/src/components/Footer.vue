<template>
    <div class="contenedorFooter">
        <div class="columna">
            <Logo imagenLogo="/Logo.webp"></Logo>
            <p>{{ descripcion }}</p>
        </div>
        <div class="columna">
            <h2>SERVICIOS</h2>
            <ul class="menu-servicios">
                <li><router-link to="/servicios/web/apps">Aplicaciones a la Medida</router-link></li>
                <li>
                    <router-link to="/servicios/promeria/instalacion">Servicios De Gas Natural</router-link>
                    <ul>
                        <li><router-link to="/servicios/promeria/instalacion">Instalación y Traslados</router-link></li>
                        <li><router-link to="/servicios/gas-natural/revision">Revisión Periodica</router-link></li>
                        <li><router-link to="/servicios/gas-natural/instalacion">Instalación y Traslados</router-link></li>
                        <li><router-link to="/servicios/gas-natural/mantenimiento">Mantenimiento y Reparación</router-link></li>
                        <li><router-link to="/servicios/gas-natural/mantenimiento">Tramites Usuarios Nuevos</router-link></li>
                    </ul>
                </li>
                <li>
                    <router-link to="/servicios/promeria/instalacion">Servicios De Gas GLP</router-link>
                    <ul>
                        <li><router-link to="/servicios/gas-glp/instalacion">Instalación</router-link></li>
                        <li><router-link to="/servicios/gas-glp/mantenimiento">Mantenimiento y Reparación</router-link></li>
                        <li><router-link to="/servicios/gas-glp/revision">Revisión</router-link></li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="columna">
            <h2>CONTACTO</h2>
            <p>¿Estás listo para hacer realidad tu sueño y Mejorar tu Casa?</p>
            <p>Cualquier inquietud que tengas no dudes en contactarnos por los siguientes medios.</p>
            <p>Correo: <a href="mailto:info@mejoracasa.com">info@mejoracasa.com</a></p>
        </div>
    </div>
</template>

<script setup>
import Logo from '../components/Logo.vue'
const props = defineProps({
    descripcion: {
        type: String,
        default: "Somos una empresa de consultoría que organiza y reúne de manera eficiente, el mejor talento profesional para diseñar y remodelar tus espacios."
    }
})
</script>

<style scoped>
.contenedorFooter {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    padding: 2rem;
    background-color: #f5f5f5;
}

.columna {
    flex: 1;
    min-width: 300px;
    padding: 1rem;
}

.columna h2 {
    margin-bottom: 1.5rem;
    font-size: 1.25rem;
    font-weight: bold;
    color: #333;
}

.menu-servicios {
    list-style: none;
    padding: 0;
}

.menu-servicios li {
    margin-bottom: 0.75rem;
    position: relative;
    padding-left: 1.5rem;
}

.menu-servicios li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 8px;
    height: 8px;
    background-color: #666;
    border-radius: 50%;
    transition: background-color 0.3s ease;
}

.menu-servicios li:hover::before {
    background-color: #007bff;
}

.menu-servicios ul {
    list-style: none;
    padding-left: 1.5rem;
    margin-top: 0.5rem;
}

.menu-servicios a {
    text-decoration: none;
    color: #333;
    transition: color 0.3s ease;
    display: inline-block;
}

.menu-servicios a:hover {
    color: #007bff;
}

/* Estilos específicos para sublistas */
.menu-servicios ul li::before {
    width: 6px;
    height: 6px;
    background-color: #999;
}

.menu-servicios ul li:hover::before {
    background-color: #007bff;
}

@media (max-width: 768px) {
    .contenedorFooter {
        flex-direction: column;
    }
    
    .columna {
        width: 100%;
        min-width: auto;
    }
}
</style>