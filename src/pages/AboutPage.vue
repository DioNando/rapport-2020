<template>
  <div class="about-page">
    <div class="about-header" data-aos="fade-up">
      <h1>{{ $t('navigation.about') }}</h1>
      <p class="about-intro">{{ $t('about.intro', 'Découvrez notre projet et notre vision') }}</p>
    </div>
    
    <div class="about-content">
      <section class="about-section" data-aos="fade-up" data-aos-delay="200">
        <div class="section-content">
          <h2>{{ $t('about.mission.title', 'Notre Mission') }}</h2>
          <p>{{ $t('about.mission.description', 'Créer des applications web modernes et performantes en utilisant les dernières technologies.') }}</p>
        </div>
        <div class="section-image">
          <div class="placeholder-image">🎯</div>
        </div>
      </section>
      
      <section class="about-section reverse" data-aos="fade-up" data-aos-delay="300">
        <div class="section-image">
          <div class="placeholder-image">⚡</div>
        </div>
        <div class="section-content">
          <h2>{{ $t('about.technology.title', 'Technologies') }}</h2>
          <p>{{ $t('about.technology.description', 'Nous utilisons Vue.js, Vite, et les meilleures pratiques du développement moderne.') }}</p>
          <div class="tech-stack">
            <span class="tech-tag">Vue.js</span>
            <span class="tech-tag">Vite</span>
            <span class="tech-tag">Vue Router</span>
            <span class="tech-tag">Vue I18n</span>
            <span class="tech-tag">AOS</span>
          </div>
        </div>
      </section>
      
      <section class="stats-section" data-aos="fade-up" data-aos-delay="400">
        <h2>{{ $t('about.stats.title', 'En Chiffres') }}</h2>
        <div class="stats-grid">
          <div class="stat-card" v-for="stat in stats" :key="stat.label" data-aos="zoom-in" data-aos-delay="500">
            <div class="stat-number">{{ stat.value }}</div>
            <div class="stat-label">{{ $t(stat.label) }}</div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const stats = ref([
  { value: '100%', label: 'about.stats.modern' },
  { value: '⚡', label: 'about.stats.fast' },
  { value: '🌍', label: 'about.stats.international' },
  { value: '🎨', label: 'about.stats.beautiful' }
])
</script>

<style scoped>
.about-page {
  max-width: 1000px;
  margin: 0 auto;
}

.about-header {
  text-align: center;
  margin-bottom: 4rem;
}

.about-header h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #1369b4, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.about-intro {
  font-size: 1.2rem;
  color: #666;
}

.about-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  margin-bottom: 4rem;
}

.about-section.reverse {
  direction: rtl;
}

.about-section.reverse > * {
  direction: ltr;
}

.section-content h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333;
}

.section-content p {
  line-height: 1.6;
  color: #666;
  margin-bottom: 1.5rem;
}

.placeholder-image {
  width: 200px;
  height: 200px;
  background: linear-gradient(135deg, #1369b4, #764ba2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  margin: 0 auto;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  background: #1369b4;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
}

.stats-section {
  text-align: center;
  padding: 3rem 0;
  background: rgba(100, 108, 255, 0.05);
  border-radius: 12px;
}

.stats-section h2 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #333;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.stat-card {
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.stat-number {
  font-size: 3rem;
  font-weight: bold;
  color: #1369b4;
  margin-bottom: 0.5rem;
}

.stat-label {
  color: #666;
  font-weight: 500;
}

@media (max-width: 768px) {
  .about-header h1 {
    font-size: 2rem;
  }
  
  .about-section {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
  
  .about-section.reverse {
    direction: ltr;
  }
  
  .placeholder-image {
    width: 150px;
    height: 150px;
    font-size: 3rem;
  }
  
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (prefers-color-scheme: dark) {
  .about-intro,
  .section-content p,
  .stat-label {
    color: #ccc;
  }
  
  .section-content h2,
  .stats-section h2 {
    color: #fff;
  }
  
  .stats-section {
    background: rgba(100, 108, 255, 0.1);
  }
  
  .stat-card {
    background: rgba(36, 36, 36, 0.8);
  }
}
</style>
