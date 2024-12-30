<script setup>
import { ref, onMounted } from 'vue';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const mapDiv = ref(null);
const map = ref(null);
const marker = ref(null);

const coords = {
  lat: 7.086347,
  lng: -73.0804383
};

onMounted(() => {
  initMap();
});

function initMap() {
  map.value = L.map(mapDiv.value).setView([coords.lat, coords.lng], 16);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map.value);

  marker.value = L.marker([coords.lat, coords.lng]).addTo(map.value)
    .bindPopup('<b>TecnoHogar</b><br>Visítanos en nuestra ubicación')
    .openPopup();
}
</script>

<template>
  <div class="map-container">
    <h2>Nuestra Ubicación</h2>
    <div ref="mapDiv" class="map"></div>
    <div class="address-info">
      <h3>Dirección</h3>
      <p>TECNO HOGAR S.A.S</p>
      <a 
        href="https://www.google.com/maps?q=7.086347,-73.0804383" 
        target="_blank" 
        class="directions-btn"
      >
        Cómo llegar
      </a>
    </div>
  </div>
</template>

<style scoped>
.map-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.map {
  width: 100%;
  height: 400px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.address-info {
  margin-top: 20px;
  padding: 20px;
  background: #f5f5f5;
  border-radius: 8px;
  text-align: center;
}

.address-info h3 {
  color: #333;
  margin-bottom: 10px;
}

.address-info p {
  margin-bottom: 15px;
  color: #666;
}

.directions-btn {
  display: inline-block;
  padding: 10px 20px;
  background: #c7d632;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.directions-btn:hover {
  background: #b1bf2d;
}
</style>
