import './assets/tailwind.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import BaseCard from './components/BaseCard.vue'

const ckapp = createApp(App)
ckapp.component('base-card', BaseCard)
ckapp.use(router).mount('#app')