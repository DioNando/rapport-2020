<template>
  <div class="perspectives-page">
    <HeroSection image-url="/assets/images/backgrounds/ID60b5e706060d3-1.png" image-alt="Perspectives - BOA" />

    <div class="content">
      <p class="content-text">{{ t('perspectivesPage.content') }}</p>
      <div class="content-divider"></div>
      <p class="content-text">{{ t('perspectivesPage.content-2') }}</p>
    </div>

  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import HeroSection from '@/components/ui/HeroSection.vue'

const { t } = useI18n()
</script>

<style lang="scss" scoped>
$primary-color: #1369b4;
$dark-primary: #0f5694;
$text-dark: #333;
$text-medium: #666;
$white: white;

.content {
  margin: auto;
  max-width: 1800px;
  color: $text-medium;
  padding: 2rem;
  margin-bottom: 7rem;

  .content-text {
    margin: 2rem 0;
    font-size: 2rem;
    line-height: 1.6;
  }

  .content-divider {
    height: 5px;
    width: 200px;
    background-color: $primary-color;
    margin: 2rem 0;
  }

}
</style>
