import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'
import AppSectionWrapper from './components/AppSectionWrapper.vue'
import AppGrayRouterLink from './components/AppGrayRouterLink.vue'
import AppDarkButton from './components/AppDarkButton.vue'
import AppHeader from './components/AppHeader.vue'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)

app.component('AppSectionWrapper', AppSectionWrapper)
app.component('AppGrayRouterLink', AppGrayRouterLink)
app.component('AppDarkButton', AppDarkButton)
app.component('AppHeader', AppHeader)
app.use(router)
app.mount('#app')
