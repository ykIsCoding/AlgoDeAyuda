/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'
import {router} from './utils/routing/routeUtils.js'
import showToastObject from './utils/service/ToastService.js'

// Composables
import { createApp,ref } from 'vue'
import { createPinia } from 'pinia'




const pinia = createPinia()
const app = createApp(App)

registerPlugins(app)

app.provide('showToast',showToastObject)
app.use(pinia)
app.use(router)
app.mount('#app')
