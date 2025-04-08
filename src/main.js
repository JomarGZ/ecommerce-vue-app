import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import AppSectionWrapper from './components/AppSectionWrapper.vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.component('AppSectionWrapper', AppSectionWrapper)
app.use(router)

app.mount('#app')
