<template>
  <div class="not-found-page">
    <div class="not-found-content" data-aos="fade-up">
      <div class="error-code">404</div>
      <h1>{{ $t('notFound.title', 'Page non trouvée') }}</h1>
      <p>{{ $t('notFound.message', 'Désolé, la page que vous recherchez n\'existe pas.') }}</p>
      
      <div class="not-found-actions">
        <router-link to="/" class="btn btn-primary">
          {{ $t('notFound.backHome', 'Retour à l\'accueil') }}
        </router-link>
        <button @click="goBack" class="btn btn-secondary">
          {{ $t('notFound.goBack', 'Page précédente') }}
        </button>
      </div>
    </div>
    
    <div class="not-found-illustration" data-aos="fade-up" data-aos-delay="200">
      🔍
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
  if (window.history.length > 1) {
    router.go(-1)
  } else {
    router.push('/')
  }
}
</script>

<style scoped>
.not-found-page {
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
}

.error-code {
  font-size: 8rem;
  font-weight: bold;
  background: linear-gradient(135deg, #1369b4, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
}

.not-found-content h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #333;
}

.not-found-content p {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
  max-width: 500px;
}

.not-found-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 0.75rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  cursor: pointer;
  font-size: 1rem;
}

.btn-primary {
  background: #1369b4;
  color: white;
}

.btn-primary:hover {
  background: #0f5694;
  transform: translateY(-2px);
}

.btn-secondary {
  border-color: #1369b4;
  color: #1369b4;
  background: transparent;
}

.btn-secondary:hover {
  background: #1369b4;
  color: white;
  transform: translateY(-2px);
}

.not-found-illustration {
  font-size: 6rem;
  margin-top: 2rem;
  opacity: 0.7;
}

@media (max-width: 768px) {
  .error-code {
    font-size: 6rem;
  }
  
  .not-found-content h1 {
    font-size: 2rem;
  }
  
  .not-found-content p {
    font-size: 1rem;
  }
  
  .not-found-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .not-found-illustration {
    font-size: 4rem;
  }
}

@media (prefers-color-scheme: dark) {
  .not-found-content h1 {
    color: #fff;
  }
  
  .not-found-content p {
    color: #ccc;
  }
}
</style>
