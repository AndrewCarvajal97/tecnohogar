<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { computed } from 'vue'
import { projects,categories } from '../../public/publicData/Proyects.js'

const router = useRouter()
const activeCategory = ref('INSTALACIONES DE GAS NATURAL Y GLP')

const filteredProjects = computed(() => {
  if (activeCategory.value === 'PROYECTOS DESTACADOS') {
    return projects
  }
  return projects.filter(project => project.category === activeCategory.value)
})

const navigateToProject = (projectName) => {
  router.push(`/proyectos/${projectName.toLowerCase().replace(/\s+/g, '-')}`)
}
</script>

<template>
  <div class="projects-container">
    <div class="projects-header">
      <h1>Algunos Proyectos</h1>
      <p class="subtitle">CONOCE NUESTRO PORTAFOLIO DE PROYECTOS REALIZADOS</p>
    </div>

    <nav class="categories-nav">
      <button 
        v-for="category in categories"
        :key="category"
        :class="['category-btn', { active: category === activeCategory }]"
        @click="activeCategory = category"
      >
        {{ category }}
      </button>
    </nav>

    <div class="projects-grid">
      <div 
        v-for="project in filteredProjects" 
        :key="project.id"
        class="project-card"
        @click="navigateToProject(project.name)"
      >
        <img :src="project.image" :alt="project.name">
        <div class="project-overlay">
          <h3>{{ project.name }}</h3>
          <button class="view-project-btn">Ver Proyecto</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.projects-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

.projects-header {
  text-align: center;
  margin-bottom: 40px;
}

.projects-header h1 {
  font-size: 2.5em;
  color: #333;
  margin-bottom: 10px;
}

.subtitle {
  color: #666;
  font-size: 1.1em;
}

.categories-nav {
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  overflow-x: auto;
  padding: 10px 0;
  position: relative;
}

.categories-nav::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: #eee;
}

.category-btn {
  padding: 12px 24px;
  background: none;
  border: none;
  cursor: pointer;
  font-weight: 500;
  color: #666;
  position: relative;
  white-space: nowrap;
}

.category-btn.active {
  color: #000;
}

.category-btn.active::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 100%;
  height: 2px;
  background: #c7d632;
  z-index: 1;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  padding: 20px 0;
}

.project-card {
  position: relative;
  aspect-ratio: 4/3;
  overflow: hidden;
  cursor: pointer;
}

.project-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  padding: 20px;
  text-align: center;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-card:hover img {
  transform: scale(1.1);
}

.project-overlay h3 {
  color: white;
  margin-bottom: 15px;
  margin-right: 15px;
  font-size: 1.2em;
  width: 90%;
}

.view-project-btn {
  padding: 10px 0;
  width: 50%;
  margin-right: 20px;
  background: #c7d632;
  border: none;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.view-project-btn:hover {
  background: #b1bf2d;
}

@media (max-width: 768px) {
  .categories-nav {
    justify-content: flex-start;
  }
  
  .projects-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
}
</style>