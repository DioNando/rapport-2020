<template>
  <section class="hero">
    <div class="hero-background">
      <img :src="imageUrl" :alt="imageAlt" class="hero-image" />
      <div class="hero-overlay" v-if="overlay"></div>
    </div>
    <div class="hero-content" v-if="title || subtitle">
      <h1 v-if="title" class="hero-title">{{ title }}</h1>
      <p v-if="subtitle" class="hero-subtitle">{{ subtitle }}</p>
    </div>
    <img src="/src/assets/images/backgrounds/RAPDF.png" alt="Rapport Annuel 2020 - BOA ">
  </section>
</template>

<script setup>
defineProps({
  imageUrl: {
    type: String,
    required: true
  },
  imageAlt: {
    type: String,
    default: 'Hero Background'
  },
  title: {
    type: String,
    default: ''
  },
  subtitle: {
    type: String,
    default: ''
  },
  overlay: {
    type: Boolean,
    default: false
  },
  height: {
    type: String,
    default: '100vh'
  }
})
</script>

<style lang="scss" scoped>
$primary-color: #1369b4;
$white: white;

.hero {
  position: relative;
  height: v-bind(height);
  overflow: hidden;

  &-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  &-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 2;
  }

  &-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: $white;
    z-index: 3;
    max-width: 800px;
    padding: 0 2rem;
  }

  &-title {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
    line-height: 1.2;
  }

  &-subtitle {
    font-size: 1.2rem;
    font-weight: 400;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
    line-height: 1.4;
  }
}

@media (max-width: 768px) {
  .hero {
    height: 70vh;
    
    &-title {
      font-size: 2.5rem;
    }
    
    &-subtitle {
      font-size: 1rem;
    }
    
    &-content {
      padding: 0 1rem;
    }
  }
}
</style>
