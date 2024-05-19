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

// Composables
import { createApp } from 'vue'
import { createPinia } from 'pinia'

const pinia = createPinia()
const app = createApp(App)

registerPlugins(app)

app.use(pinia)
app.use(router)
app.mount('#app')
