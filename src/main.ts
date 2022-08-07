import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import { initializeFirebase } from './lib/firebase'
import piniaPersist from 'pinia-plugin-persist'

initializeFirebase()

const app = createApp(App)

app.use(createPinia().use(piniaPersist))
app.use(router)

app.mount('#app')