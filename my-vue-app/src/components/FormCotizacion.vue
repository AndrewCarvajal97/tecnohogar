<script setup>
import { ref, reactive } from 'vue'

const formData = reactive({
  fullName: '',
  email: '',
  phone: '',
  propertyType: '',
  profile: '',
  projectDetails: '',
  captchaAnswer: '',
  acceptTerms: false
})

const errors = reactive({})
const submitted = ref(false)

const submitForm = () => {
  // Basic validation
  errors.fullName = !formData.fullName ? 'Nombre completo es requerido' : ''
  errors.email = !formData.email ? 'Email es requerido' : ''
  errors.phone = !formData.phone ? 'Teléfono es requerido' : ''
  errors.propertyType = !formData.propertyType ? 'Seleccione un tipo de inmueble' : ''
  errors.projectDetails = !formData.projectDetails ? 'Detalles del proyecto son requeridos' : ''
  errors.captchaAnswer = formData.captchaAnswer !== '7' ? 'Respuesta incorrecta' : ''
  errors.acceptTerms = !formData.acceptTerms ? 'Debe aceptar los términos' : ''

  if (Object.values(errors).every(error => !error)) {
    submitted.value = true
    console.log('Form submitted:', formData)
  }
}
</script>

<template>
  <div class="quote-container">
    <h2 style="text-align: center;">Cotizador de Proyectos</h2>
    <p class="intro-text">
        ¿Necesitas reparar algo en tu hogar? Completa el siguiente formulario para cotizar tu proyecto 
      sin costo alguno. Servicio disponible solo para BUCARAMANGA Y AREA METROPOLITANA.
    </p>

    <form @submit.prevent="submitForm">
      <div class="form-grid">
        <div class="form-group">
          <label>Nombre Completo</label>
          <input v-model="formData.fullName" type="text">
          <span class="error" v-if="errors.fullName">{{ errors.fullName }}</span>
        </div>

        <div class="form-group">
          <label>Escoge tu inmueble</label>
          <select v-model="formData.propertyType">
            <option value="">Seleccionar...</option>
            <option value="vivienda">Vivienda</option>
            <option value="comercial">Comercial</option>
            <option value="otro">Otro</option>
          </select>
          <span class="error" v-if="errors.propertyType">{{ errors.propertyType }}</span>
        </div>

        <div class="form-group">
          <label>Correo</label>
          <input v-model="formData.email" type="email">
          <span class="error" v-if="errors.email">{{ errors.email }}</span>
        </div>

        <div class="form-group">
          <label>Teléfono</label>
          <input v-model="formData.phone" type="tel">
          <span class="error" v-if="errors.phone">{{ errors.phone }}</span>
        </div>

        <div class="form-group">
          <label>¿Cual es tu perfil?</label>
          <select v-model="formData.profile">
            <option value="">Seleccionar...</option>
            <option value="propietario">Propietario de la vivienda</option>
            <option value="arquitecto">Arquitecto</option>
            <option value="constructor">Constructor</option>
          </select>
        </div>
      </div>

      <div class="form-group full-width">
        <label>Cuéntanos los detalles de tu proyecto</label>
        <textarea v-model="formData.projectDetails" rows="4"></textarea>
        <span class="error" v-if="errors.projectDetails">{{ errors.projectDetails }}</span>
      </div>

      <div class="captcha-group">
        <label>5 + dos = </label>
        <input v-model="formData.captchaAnswer" type="text">
        <span class="error" v-if="errors.captchaAnswer">{{ errors.captchaAnswer }}</span>
      </div>

      <div class="terms-group">
        <input v-model="formData.acceptTerms" type="checkbox">
        <label>
          Acepto las condiciones de uso y 
          <router-link to="/politica-de-privacidad" class="privacy-link">política de privacidad</router-link>
        </label>
        <span class="error" v-if="errors.acceptTerms">{{ errors.acceptTerms }}</span>
      </div>

      <button type="submit">Enviar Solicitud</button>
    </form>

    <div v-if="submitted" class="success-message">
      ¡Gracias! Hemos recibido tu solicitud y te contactaremos pronto.
    </div>
  </div>
</template>

<style>
.quote-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.intro-text {
  margin-bottom: 30px;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

@media (min-width: 768px) {
  .form-grid {
    grid-template-columns: 1fr 1fr;
  }
}

.form-group {
  margin-bottom: 20px;
}

.full-width {
  grid-column: 1 / -1;
}

label {
  display: block;
  margin-bottom: 8px;
}

input, select, textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

textarea {
  resize: vertical;
}

.captcha-group {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}

.captcha-group input {
  width: 80px;
}

.terms-group {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}

.terms-group input {
  width: auto;
}

.error {
  color: red;
  font-size: 14px;
  margin-top: 4px;
  display: block;
}

.privacy-link {
  color: #0066cc;
  text-decoration: none;
}

.privacy-link:hover {
  text-decoration: underline;
}

button {
  width: 100%;
  padding: 12px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

.success-message {
  margin-top: 20px;
  padding: 15px;
  background-color: #dff0d8;
  border: 1px solid #d6e9c6;
  color: #3c763d;
  border-radius: 4px;
}
</style>