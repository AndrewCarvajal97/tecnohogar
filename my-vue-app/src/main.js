import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router  from './routes/index'

import Icon from './components/Icon.vue'; // Importa IconWrapper

const app = createApp(App);
app.component('IconWrapper', Icon);
app.use(router)
app.mount('#app')
