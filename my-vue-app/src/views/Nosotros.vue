<script setup>
const values = [
  { title: 'Calidad', description: 'Trabajamos con estándares de excelencia en todos nuestros servicios.' },
  { title: 'Confianza', description: 'Fomentamos relaciones transparentes y duraderas con nuestros clientes.' },
  { title: 'Compromiso', description: 'Estamos dedicados a cumplir nuestras promesas y superar las expectativas.' },
  { title: 'Innovación', description: 'Aplicamos tecnología y creatividad para ofrecer soluciones modernas y efectivas.' },
  { title: 'Seguridad', description: 'Priorizamos el bienestar y la tranquilidad de nuestros clientes en cada proyecto.' },
  { title: 'Sostenibilidad', description: 'Promovemos prácticas responsables con el medio ambiente y la sociedad.' },
  { title: 'Trabajo en equipo', description: 'Valoramos la colaboración y el respeto como pilares de nuestro éxito.' }
]

const services = [
  'Redes de gas natural y GLP',
  'Sistemas de acueducto, plomería y fontanería',
  'Diseño web',
  'Sistemas de seguridad',
  'Arreglos locativos'
]
</script>

<template>
  <div class="about-container">
    <section class="about-hero">
      <h1>Nosotros</h1>
      <div class="intro-text">
        <p>En <strong>TecnoHogar</strong>, somos una empresa santandereana comprometida con ofrecer <strong>soluciones eficientes, integrales y de calidad</strong> para hogares y negocios en toda Colombia.</p>
      </div>
    </section>

    <section class="services-section">
      <h2>Nuestros Servicios</h2>
      <ul class="services-list">
        <li v-for="service in services" :key="service">{{ service }}</li>
      </ul>
    </section>

    <section class="mission-vision">
      <div class="mission">
        <h2>Misión</h2>
        <p>En TecnoHogar, nuestra misión es ofrecer soluciones integrales y de calidad en servicios esenciales como redes de gas, acueducto, plomería, diseño web, sistemas de seguridad y reparaciones locativas.</p>
      </div>
      
      <div class="vision">
        <h2>Visión</h2>
        <p>Ser reconocidos como la empresa líder en Colombia en la provisión de soluciones integrales para hogares y negocios, destacándonos por nuestra innovación, servicio al cliente y compromiso con la sostenibilidad.</p>
      </div>
    </section>

    <section class="values-section">
      <h2>Nuestros Valores</h2>
      <div class="values-grid">
        <div v-for="value in values" :key="value.title" class="value-card">
          <h3>{{ value.title }}</h3>
          <p>{{ value.description }}</p>
        </div>
      </div>
    </section>

    <section class="commitment">
      <h2>Nuestro Compromiso</h2>
      <div class="commitment-grid">
        <div class="commitment-item">
          <h3>SOMOS APASIONADOS</h3>
          <p>Es una empresa registrada en colombia y decidimos dar inicio a nuestra pasión de decorar y mejorar nuestro espacio, utilizando materiales de calidad y ofreciendo a nuestros clientes el soporte y respaldo que necesitan.</p>
        </div>
        <div class="commitment-item">
          <h3>HONESTIDAD Y FIABILIDAD</h3>
          <p>Sabemos lo difícil que es encontrar a alguien de confianza para arreglar nuestra casa, por esa razón nos esforzamos por completar todos los proyectos con integridad.</p>
        </div>
        <div class="commitment-item">
          <h3>PROFESIONALISMO</h3>
          <p>Una de nuestras políticas es siempre ser profesionales en todo lo que hacemos, es la única manera de poder crecer como personas y como empresa.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

.about-hero {
  text-align: center;
  margin-bottom: 60px;
}

.about-hero h1 {
  font-size: 2.5em;
  color: #333;
  margin-bottom: 20px;
}

.intro-text {
  max-width: 800px;
  margin: 0 auto;
  font-size: 1.2em;
  line-height: 1.6;
}

.services-section {
  background-color: #f5f5f5;
  padding: 40px;
  border-radius: 8px;
  margin-bottom: 60px;
}

.services-list {
  list-style: none;
  padding: 0;
}

.services-list li {
  padding: 10px 0;
  font-size: 1.1em;
  border-bottom: 1px solid #ddd;
}

.mission-vision {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 60px;
}

@media (max-width: 768px) {
  .mission-vision {
    grid-template-columns: 1fr;
  }
}

.mission, .vision {
  padding: 30px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 30px;
}

.value-card {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
}

.value-card h3 {
  color: #2c5282;
  margin-bottom: 10px;
}

.commitment-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.commitment-item {
  padding: 25px;
  background-color: #fff;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  border-radius: 8px;
}

.commitment-item h3 {
  color: #2c5282;
  margin-bottom: 15px;
}

h2 {
  color: #2c5282;
  font-size: 2em;
  margin-bottom: 30px;
  text-align: center;
}

p {
  line-height: 1.6;
  color: #4a5568;
}
</style>