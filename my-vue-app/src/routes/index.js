import { createRouter, createWebHistory } from 'vue-router'

// Importa tus componentes de vista
import Home from '../views/Home.vue'
import Nosotros from '../views/Nosotros.vue'
import Proyectos from '../views/Proyectos.vue'
import Servicios from '../views/Servicios.vue'
import Productos from '../views/Productos.vue'
import Contacto from '../views/Contacto.vue'

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
    }
  ]
})

export default router