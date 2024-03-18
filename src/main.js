/**
 * main.js
 *
 * Bootstraps Vuetify, Vue Router, and other plugins then mounts the App
 */

import { registerPlugins } from '@/plugins'
import router from '@/router'

import App from './App.vue'

import { createApp } from 'vue'

const app = createApp(App)

registerPlugins(app)

app.use(router)

app.mount('#app')
