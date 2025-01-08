<template>
    <div class="contenedorFooter">
        <div class="columna">
            <Logo imagenLogo="./Logo.webp" class="logo" style="height: 200px;"></Logo>
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
            <p>¿Necesitas reparar algo en tu hogar? ¡Cotiza gratis en línea y encuentra la solución perfecta!.</p>
            <div class="contacto">
                <IconWrapper 
                    iconName="phone" 
                    prefix="fas" 
                    width="30px" 
                    height="30px" 
                    color="#f7931e" 
                />
                <p>Telefono: <a href="https://wa.me/3112153465" target="_blank">+57 311 215 34 65</a></p>
            </div>
            <div class="contacto">
                <IconWrapper 
                    iconName="envelope" 
                    prefix="fas" 
                    width="30px" 
                    height="30px" 
                    color="#f7931e" 
                />
                <p>Correo: <a href="mailto:andres.carvajal@texelbit.com" target="_blank">andres.carvajal@texelbit.com</a></p>
            </div>
            <div class="contacto">
                <IconWrapper 
                    iconName="calendar-alt" 
                    prefix="fas" 
                    width="30px" 
                    height="30px" 
                    color="#f7931e" 
                />
                <p>Agenda tu cita: <a href="https://wa.me/3112153465" target="_blank"> Lunes - Domingo 06:00 AM - 08:00 PM</a></p>
            </div>
                <IconWrapper 
                    iconName="shield-alt" 
                    prefix="fas" 
                    width="50px" 
                    height="50px" 
                    color="#f7931e" 
                />
            
            <p>Confia tu tranquilidad en las manos de expertos </p>
        </div>
    </div>
</template>

<script setup>
import Logo from '../components/Logo.vue'
const props = defineProps({
    descripcion: {
        type: String,
        default: "Somos una empresa de reparaciones locativas y servicios del hogar que organiza y reúne de manera eficiente, el mejor talento profesional para cubrir todos los esenarios que podrias presentar."
    }
})
</script>

<style scoped>
.contenedorFooter {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    padding: 2rem;
    background-color: #8181815c;
    height: 400px;
}
a{
    text-decoration: none;
    color: #0000FF;
}
a:active{
    text-decoration: none;
}
a:visited{
    text-decoration: none;
    color: #0000FF;
}

.columna {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 300px;
    padding: 1rem;
    gap: 1rem;
    text-align: justify;
    align-items: center;
}

.logo{
    padding: 2rem;
}
.contacto{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 5rem;
    width: 300px;
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
        height: auto;
        width: 100%;
    }
    
    .columna {
        width: 95%;
        min-width: auto;
    }
}
</style>