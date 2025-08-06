<template>
  <div class="mot-president-page">
    <HeroSection 
      image-url="/assets/images/backgrounds/othmane-benjelloun.png"
      image-alt="Mot du Président - BOA"
    />
    
    <div class="container">
      <div class="page-header" data-aos="fade-up">
        <h1 class="page-title">Mot du Président</h1>
        <p class="page-subtitle">Message du Président de la BOA</p>
      </div>
      
      <div class="content-section" data-aos="fade-up" data-aos-delay="200">
        <div class="card">
          <div class="card__header">
            <h2>Message du Président</h2>
          </div>
          <div class="card__content">
            <p>Contenu à venir...</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import HeroSection from '@/components/ui/HeroSection.vue'
// Logique de la page à venir
</script>

<style lang="scss" scoped>
.mot-president-page {
  min-height: 100vh;
}

.page-header {
  text-align: center;
  margin-bottom: 3rem;
}

.page-title {
  font-size: 3rem;
  color: #1369b4;
  margin-bottom: 1rem;
  font-weight: 700;
}

.page-subtitle {
  font-size: 1.2rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
}

.content-section {
  margin-bottom: 2rem;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }
  
  .page-subtitle {
    font-size: 1rem;
  }
}
</style>
