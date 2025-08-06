<template>
  <div class="auth-layout">
    <div class="auth-container">
      <div class="auth-card" data-aos="fade-up">
        <div class="auth-header">
          <img src="/vite.svg" alt="Logo" class="logo" />
          <h1>{{ $t('welcome') }}</h1>
        </div>
        
        <div class="auth-content">
          <router-view />
        </div>
        
        <div class="auth-footer">
          <LanguageSelector />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import LanguageSelector from '@/components/ui/LanguageSelector.vue'
</script>

<style scoped>
.auth-layout {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 1rem;
}

.auth-container {
  width: 100%;
  max-width: 400px;
}

.auth-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
}

.auth-header {
  text-align: center;
  margin-bottom: 2rem;
}

.logo {
  width: 60px;
  height: 60px;
  margin-bottom: 1rem;
}

.auth-header h1 {
  color: #333;
  margin: 0;
  font-size: 1.8rem;
}

.auth-content {
  margin-bottom: 1.5rem;
}

.auth-footer {
  text-align: center;
}

@media (prefers-color-scheme: dark) {
  .auth-card {
    background: rgba(36, 36, 36, 0.95);
  }
  
  .auth-header h1 {
    color: #fff;
  }
}
</style>
