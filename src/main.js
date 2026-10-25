import { createApp } from 'vue'
import './style.css'
import 'lineicons/assets/icon-fonts/lineicons.css'
import App from './App.vue'
import router from './router'
import reveal from './directives/reveal.js'

const app = createApp(App)

app.directive('reveal', reveal)
app.use(router)
app.mount('#app')
