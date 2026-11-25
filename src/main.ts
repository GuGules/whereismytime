import { createApp } from 'vue'
import './style.css'
import PrimeVue from 'primevue/config';
import { createPinia } from 'pinia';
import Aura from '@primeuix/themes/aura';
import App from './App.vue'

let app = createApp(App)
const pinia = createPinia(); 

app.use(pinia);
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: 'none',
            cssLayer: false,
            cssVariables: true
        }
    },
    license: import.meta.env.VITE_PV_LICENCE_KEY
})

app.mount('#app')
