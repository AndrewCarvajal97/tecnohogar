<template>
    <div class="carousel">
      <!-- Slides -->
      <div class="carousel-inner" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div v-for="(slide, index) in slides" :key="index" class="carousel-slide">
          <img :src="slide.image" :alt="slide.title">
          <div class="slide-content">
            <h2>{{ slide.title }}</h2>
            <p>{{ slide.description }}</p>
          </div>
        </div>
      </div>
  
      <!-- Controles de navegación -->
      <button class="carousel-control prev" @click="prevSlide" aria-label="Previous slide">
        &#10094;
      </button>
      <button class="carousel-control next" @click="nextSlide" aria-label="Next slide">
        &#10095;
      </button>
  
      <!-- Indicadores -->
      <div class="carousel-indicators">
        <button
          v-for="(slide, index) in slides"
          :key="index"
          class="indicator"
          :class="{ active: currentIndex === index }"
          @click="goToSlide(index)"
          :aria-label="`Go to slide ${index + 1}`"
        ></button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  
  // Datos de ejemplo para el carrusel
  import { slides } from '../../public/publicData/Carrousel';
  
  const currentIndex = ref(0);
  const autoPlayInterval = ref(null);
  
  // Funciones de navegación
  const nextSlide = () => {
    currentIndex.value = (currentIndex.value + 1) % slides.length;
  };
  
  const prevSlide = () => {
    currentIndex.value = (currentIndex.value - 1 + slides.length) % slides.length;
  };
  
  const goToSlide = (index) => {
    currentIndex.value = index;
  };
  
  // Autoplay
  const startAutoPlay = () => {
    autoPlayInterval.value = setInterval(() => {
      nextSlide();
    }, 5000); // Cambia de slide cada 5 segundos
  };
  
  const stopAutoPlay = () => {
    if (autoPlayInterval.value) {
      clearInterval(autoPlayInterval.value);
    }
  };
  
  // Lifecycle hooks
  onMounted(() => {
    
  });
  
  onBeforeUnmount(() => {
    stopAutoPlay();
  });
  </script>
  
  <style scoped>
  .carousel {
    position: relative;
    width: 100%;
    height: 320px; /* Ajusta según tus necesidades */
    margin-top: -30px;
    overflow: hidden;
  }
  
  .carousel-inner {
    display: flex;
    transition: transform 0.5s ease-in-out;
    height: 100%;
  }
  
  .carousel-slide {
    min-width: 100%;
    position: relative;
  }
  
  .carousel-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .slide-content {
    position: absolute;
    bottom: 20px;
    left: 80px;
    background-color: rgba(70, 70, 70, 0.7);
    color: white;
    padding: 20px;
    max-width: 400px;
    border-radius: 4px;
  }
  
  .slide-content h2 {
    margin: 0 0 10px 0;
    font-size: 24px;
  }
  
  .slide-content p {
    margin: 0;
    font-size: 16px;
    line-height: 1.4;
  }
  
  .carousel-control {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    transition: background-color 0.3s;
  }
  
  .carousel-control:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
  
  .prev {
    left: 20px;
  }
  
  .next {
    right: 20px;
  }
  
  .carousel-indicators {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 10px;
  }
  
  .indicator {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.5);
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .indicator.active {
    background-color: white;
  }
  
  /* Hover states */
  .carousel-control:hover,
  .indicator:hover {
    opacity: 0.8;
  }
  
  /* Responsive adjustments */
  @media (max-width: 768px) {
    .carousel {
      height: 300px;
    }
  
    .slide-content {
      bottom: 20px;
      left: 60px;
      padding: 15px;
      max-width: 60%;
    }
  
    .slide-content h2 {
      font-size: 20px;
    }
  
    .slide-content p {
      font-size: 14px;
    }
  
    .carousel-control {
      width: 30px;
      height: 30px;
      font-size: 16px;
    }
  }
  </style>