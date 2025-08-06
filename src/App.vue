<script setup>
import { useLanguage } from './composables/useLanguage'
import { onMounted } from 'vue'

const { initLanguage } = useLanguage()

// Initialiser la langue au montage du composant
onMounted(() => {
  initLanguage()
})
</script>

<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
/* Styles globaux pour l'application */
#app {
  min-height: 100vh;
}

/* Animations globales pour les transitions de route */
.router-link-active {
  color: #646cff !important;
}

/* Amélioration du scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #646cff;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #535bf2;
}

/* Animations pour AOS */
[data-aos] {
  pointer-events: none;
}

[data-aos].aos-animate {
  pointer-events: auto;
}

/* Styles responsive globaux */
@media (max-width: 768px) {
  html {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  html {
    font-size: 13px;
  }
}
</style>
