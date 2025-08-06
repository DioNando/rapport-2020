<template>
  <div class="language-selector">
    <button 
      v-for="lang in availableLanguages"
      :key="lang.code"
      @click="changeLanguage(lang.code)" 
      :class="{ active: currentLanguage === lang.code }"
      class="lang-btn"
      :title="lang.name"
    >
      {{ lang.flag }}
      <span v-if="showText" class="lang-text">{{ lang.name }}</span>
    </button>
  </div>
</template>

<script setup>
import { useLanguage } from '@/composables/useLanguage'

defineProps({
  showText: {
    type: Boolean,
    default: false
  }
})

const { currentLanguage, availableLanguages, changeLanguage } = useLanguage()
</script>

<style scoped>
.language-selector {
  display: flex;
  gap: 0.5rem;
}

.lang-btn {
  padding: 0.5rem;
  border: 2px solid #646cff;
  background: transparent;
  color: #646cff;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.lang-btn:hover {
  background: #646cff;
  color: white;
}

.lang-btn.active {
  background: #646cff;
  color: white;
}

.lang-text {
  font-size: 12px;
  white-space: nowrap;
}

@media (max-width: 480px) {
  .lang-text {
    display: none;
  }
}
</style>
