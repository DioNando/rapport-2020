<template>
  <section class="hero">
    <div class="hero-background">
      <!-- Image -->
      <img 
        v-if="!videoUrl" 
        :src="imageUrl" 
        :alt="imageAlt" 
        class="hero-image" 
      />
      
      <!-- Video -->
      <video 
        v-if="videoUrl"
        :src="videoUrl"
        class="hero-video"
        autoplay
        loop
        muted
        playsinline
      >
        <source :src="videoUrl" type="video/mp4">
        Votre navigateur ne supporte pas les vidéos HTML5.
      </video>
      
      <div class="hero-overlay" v-if="overlay"></div>
    </div>
    <div class="hero-content" v-if="title || subtitle">
      <h1 v-if="title" class="hero-title">{{ title }}</h1>
      <p v-if="subtitle" class="hero-subtitle">{{ subtitle }}</p>
    </div>
  </section>
</template>

<script setup>
defineProps({
  imageUrl: {
    type: String,
    default: ''
  },
  videoUrl: {
    type: String,
    default: ''
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

  &-image,
  &-video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  &-video {
    pointer-events: none; // Empêche les interactions utilisateur avec la vidéo
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
