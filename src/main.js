import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import i18n from './i18n'

const app = createApp(App)

app.use(i18n)
app.mount('#app')

// Initialize AOS
AOS.init({
  duration: 1000, // Animation duration
  easing: 'ease-in-out', // Animation easing
  once: true, // Animation happens only once
  mirror: false // Elements animate when scrolling past them
})
