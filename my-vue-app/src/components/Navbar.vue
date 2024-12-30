<template>
    <div class="navbar-container">
      <div class="menu-toggle" @click="toggleMenu">
        <div class="hamburger" :class="{ 'active': isMenuOpen }">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
  
      <nav :class="{ 'open': isMenuOpen }">
        <div v-if="isMenuOpen"  style="position: absolute; top: 60px; right: 30px; background-color: white; border-radius: 50%; box-shadow: 5px 5px 15px black;" >
        <Logo imagenLogo="/Logo.webp" ></Logo>
        </div>
        <router-link to="/" class="links">
          Inicio
          <span></span>
        </router-link>
        <router-link to="/nosotros" class="links">
          Nosotros
          <span></span>
        </router-link>
        <router-link to="/proyectos" class="links">
          Proyectos
          <span></span>
        </router-link>
        
        <div class="dropdown-container links">
          <router-link to="/servicios" style="text-decoration: none; color: white;">
            Servicios
          </router-link>
          <span></span>
          <div class="dropdown-menu">
            <div class="dropdown-section">
              <h3>Servicios De Gas Natural</h3>
              <router-link to="/servicios/gas-natural/revision">Revisión Periodica</router-link>
              <router-link to="/servicios/gas-natural/instalacion">Instalación y Traslados</router-link>
              <router-link to="/servicios/gas-natural/mantenimiento">Mantenimiento y Reparación</router-link>
              <router-link to="/servicios/gas-natural/mantenimiento">Tramites Usuarios Nuevos</router-link>
            </div>
            <div class="dropdown-section">
              <h3>Servicios De Gas GLP</h3>
              <router-link to="/servicios/gas-glp/instalacion">Instalación</router-link>
              <router-link to="/servicios/gas-glp/mantenimiento">Mantenimiento y Reparación</router-link>
              <router-link to="/servicios/gas-glp/revision">Revisión</router-link>
            </div>
            <div class="dropdown-section">
              <h3>Servicios De Fontaneria y Promeria</h3>
              <router-link to="/servicios/promeria/instalacion">Instalación y Traslados</router-link>
              <router-link to="/servicios/promeria/mantenimiento">Mantenimiento y Reparación</router-link>
              <router-link to="/servicios/promeria/mantenimiento">Tramites Usuarios Nuevos</router-link>
              <router-link to="/servicios/promeria/mantenimiento">Reconexiones </router-link>
            </div>
            <div class="dropdown-section">
              <h3>Desarrollo Web</h3>
              <router-link to="/servicios/web/diseno">Diseño Web</router-link>
              <router-link to="/servicios/web/apps">Aplicaciones a la Medida</router-link>
            </div>
            <div class="dropdown-section">
              <h3>Seguridad</h3>
              <router-link to="/servicios/seguridad/camaras">Cámaras</router-link>
              <router-link to="/servicios/seguridad/alarmas">Alarmas</router-link>
            </div>
            <div class="dropdown-section">
              <h3>Servicio de Arreglos Locativos</h3>
              <router-link to="/servicios/decoracion/interiores">Interiores</router-link>
              <router-link to="/servicios/decoracion/exteriores">Exteriores</router-link>
            </div>
          </div>
        </div>
  
       
        <router-link to="/contacto" class="links">
          Contacto
        </router-link>
      </nav>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Logo from './Logo.vue';
  const isMenuOpen = ref(false);
  
  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };
  </script>
  
  <style scoped>
  .navbar-container {
    position: relative;
    width: 85%;
    margin: auto;
    z-index: 2;
  }
  
  nav {
    display: flex;
    justify-content: center;
    justify-items: center;
    background-color: #0f2ba5;
    width: 100%;
    transition: right 0.3s ease;
    z-index: 2;
  }
  
  .links,.dropdown-container {
    width: 20%;
    color: white;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    text-decoration: none;
    position: relative;
    transition: background-color 0.3s ease;
    cursor: pointer;
  }
  
  .links:hover,.dropdown-container:hover {
    background-color: #f7931e;
  }
  
  .router-link-active {
    background-color: #f7931e;
  }
  
  .links span {
    width: 0.2px;
    height: 90%;
    background-color: white;
    position: absolute;
    right: 0;
  }
  
  /* Estilos del Dropdown */
  .dropdown-container {
    position: relative;
  }
  
  .dropdown-container:hover .dropdown-menu {
    display: flex;
  }
  
  .dropdown-menu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    min-width: 200px;
    z-index: 1000;
    flex-direction: column;
    padding: 10px 0;
  }
  
  .dropdown-section {
    padding: 10px 20px;
  }
  
  .dropdown-section:not(:last-child) {
    border-bottom: 1px solid #eee;
  }
  
  .dropdown-section h3 {
    color: #3155f7;
    font-size: 14px;
    margin-bottom: 8px;
  }
  
  .dropdown-section a {
    display: block;
    color: #333;
    text-decoration: none;
    padding: 5px 0;
    font-size: 13px;
    transition: color 0.3s ease;
  }
  
  .dropdown-section a:hover {
    color: #f7931e;
  }
  
  /* Estilos del menú hamburguesa */
  .menu-toggle {
    display: none;
    position: absolute;
    top: -400px;
    right: 20px;
    z-index: 1001;
    cursor: pointer;
  }
  
  .hamburger {
    width: 30px;
    height: 20px;
    position: relative;
  }
  
  .hamburger span {
    display: block;
    width: 100%;
    height: 2px;
    background-color: rgb(11, 11, 11);
    position: absolute;
    transition: all 0.3s ease;
    
  }
  
  .hamburger span:nth-child(1) { top: 0; }
  .hamburger span:nth-child(2) { top: 9px; }
  .hamburger span:nth-child(3) { top: 18px; }
  
  .hamburger.active span:nth-child(1) {
    transform: rotate(45deg);
    top: 9px;
  }
  
  .hamburger.active span:nth-child(2) {
    opacity: 0;
  }
  
  .hamburger.active span:nth-child(3) {
    transform: rotate(-45deg);
    top: 9px;
  }
  
  /* Media Queries */
  @media (max-width: 768px) {
    .menu-toggle {
      display: block;
    }
  
    nav {
      position: fixed;
      top: 0;
      right: -100%;
      width: 250px;
      height: 100vh;
      flex-direction: column;
      background-color: #2043dd;
      z-index: 1000;
    }
  
    nav.open {
      right: 10px;
    }
  
    .links {
      width: 100%;
      height: 60px;
    }
  
    .links span {
      bottom: 0;
      width: 80%;
      height: 1px;
      right: 20px;  
    }
  
    .dropdown-menu {
      position: static;
      width: 100%;
      box-shadow: none;
      background-color: #2648db;
    }
  
    .dropdown-section {
      padding: 10px 20px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
  
    .dropdown-section h3 {
      color: white;
    }
  
    .dropdown-section a {
      color: #e0e0e0;
    }
  
    .dropdown-section a:hover {
      color: #f7931e;
    }
  }
  </style>
  