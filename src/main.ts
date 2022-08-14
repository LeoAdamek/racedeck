import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import { initializeFirebase } from './lib/firebase'
import piniaPersist from 'pinia-plugin-persist'
import Vuelidate from '@vuelidate/core'

initializeFirebase()

const app = createApp(App)

app.use(createPinia().use(piniaPersist))
app.use(router)
app.use(Vuelidate)

app.mount('#app')