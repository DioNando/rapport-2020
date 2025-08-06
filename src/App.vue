<script setup>
import HelloWorld from './components/HelloWorld.vue'
import { useLanguage } from './composables/useLanguage'
import { onMounted } from 'vue'

const { currentLanguage, availableLanguages, changeLanguage, initLanguage, t } = useLanguage()

// Initialiser la langue au montage du composant
onMounted(() => {
  initLanguage()
})
</script>

<template>
  <div>
    <!-- Sélecteur de langue -->
    <div class="language-selector" data-aos="fade-down">
      <button 
        v-for="lang in availableLanguages"
        :key="lang.code"
        @click="changeLanguage(lang.code)" 
        :class="{ active: currentLanguage === lang.code }"
        class="lang-btn"
      >
        {{ lang.flag }} {{ lang.name }}
      </button>
    </div>

    <!-- Titre avec traduction -->
    <h1 data-aos="fade-up" data-aos-delay="200">
      {{ $t('welcome') }}
    </h1>

    <div data-aos="fade-up" data-aos-duration="1000">
      <a href="https://vite.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </div>
  </div>
  <div data-aos="fade-in" data-aos-delay="300">
    <HelloWorld :msg="t('hello') + ' Vite + Vue'" />
  </div>
</template>

<style scoped>
.language-selector {
  position: fixed;
  top: 20px;
  right: 20px;
  display: flex;
  gap: 10px;
  z-index: 1000;
}

.lang-btn {
  padding: 8px 16px;
  border: 2px solid #646cff;
  background: transparent;
  color: #646cff;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s ease;
}

.lang-btn:hover {
  background: #646cff;
  color: white;
}

.lang-btn.active {
  background: #646cff;
  color: white;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

h1 {
  margin: 2rem 0;
  font-size: 3.2em;
  line-height: 1.1;
}
</style>
