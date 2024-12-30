import { createRouter, createWebHistory } from 'vue-router'

// Importa tus componentes de vista
import Home from '../views/Home.vue'
import Nosotros from '../views/Nosotros.vue'
import Proyectos from '../views/Proyectos.vue'
import Servicios from '../views/Servicios.vue'
import Productos from '../views/Productos.vue'
import Contacto from '../views/Contacto.vue'
import PoliticasPrivacidad from '../views/PoliticasPrivacidad.vue'
import Error404 from '../views/Error404.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/nosotros',
      name: 'nosotros',
      component: Nosotros
    },
    {
      path: '/proyectos',
      name: 'proyectos',
      component: Proyectos
    },
    {
      path: '/servicios',
      name: 'servicios',
      component: Servicios
    },
    {
      path: '/productos',
      name: 'productos',
      component: Productos
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: Contacto
    },
    {
      path: '/politica-de-privacidad',
      name: 'politica-de-privacidad',
      component: PoliticasPrivacidad
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'Error404',
      component: Error404
    }


  ],
  scrollBehavior(to, from, savedPosition) {
    // Si hay una posición guardada, muévete a esa posición
    if (savedPosition) {
      return savedPosition;
    } else {
      // Desplázate al inicio de la página
      return { top: 0 };
    }
  },
})

export default router