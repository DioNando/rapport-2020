<template>
  <div class="home-page">
    <section class="hero" data-aos="fade-up">
      <h1 class="hero-title">{{ $t('welcome') }}</h1>
      <p class="hero-subtitle">{{ $t('home.subtitle', 'Une application Vue.js moderne avec les meilleures pratiques') }}</p>
      
      <div class="hero-actions" data-aos="fade-up" data-aos-delay="200">
        <router-link to="/about" class="btn btn-primary">
          {{ $t('home.learnMore', 'En savoir plus') }}
        </router-link>
        <router-link to="/contact" class="btn btn-secondary">
          {{ $t('navigation.contact') }}
        </router-link>
      </div>
    </section>
    
    <section class="features" data-aos="fade-up" data-aos-delay="300">
      <h2>{{ $t('home.features', 'Fonctionnalités') }}</h2>
      <div class="features-grid">
        <div 
          v-for="(feature, index) in features" 
          :key="index"
          class="feature-card"
          data-aos="fade-up" 
          :data-aos-delay="400 + index * 100"
        >
          <div class="feature-icon">{{ feature.icon }}</div>
          <h3>{{ $t(feature.title) }}</h3>
          <p>{{ $t(feature.description) }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const features = ref([
  {
    icon: '⚡',
    title: 'home.feature1.title',
    description: 'home.feature1.description'
  },
  {
    icon: '🌍',
    title: 'home.feature2.title', 
    description: 'home.feature2.description'
  },
  {
    icon: '🎨',
    title: 'home.feature3.title',
    description: 'home.feature3.description'
  }
])
</script>

<style scoped>
.home-page {
  min-height: 80vh;
}

.hero {
  text-align: center;
  padding: 4rem 0;
  background: linear-gradient(135deg, rgba(100, 108, 255, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  border-radius: 12px;
  margin-bottom: 4rem;
}

.hero-title {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #1369b4, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.hero-actions {
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
}

.btn-secondary:hover {
  background: #1369b4;
  color: white;
  transform: translateY(-2px);
}

.features {
  padding: 2rem 0;
}

.features h2 {
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2.5rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.feature-card {
  text-align: center;
  padding: 2rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  margin-bottom: 1rem;
  color: #333;
}

.feature-card p {
  color: #666;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
  }
  
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
}

@media (prefers-color-scheme: dark) {
  .hero-subtitle,
  .feature-card p {
    color: #ccc;
  }
  
  .feature-card {
    background: rgba(36, 36, 36, 0.5);
    border-color: rgba(255, 255, 255, 0.1);
  }
  
  .feature-card h3 {
    color: #fff;
  }
}
</style>
