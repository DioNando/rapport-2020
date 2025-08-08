<template>
  <div class="creation-valeur-page">
    <HeroSection image-url="/assets/images/backgrounds/DSC_4990.png" image-alt="Création de Valeur - BOA" />
    <article>
      <div class="content-section">
        <h1 class="content-title">{{ $t('creationValeur.businessModelTitle') }}</h1>
        <div class="content-divider"></div>
        <div class="images-grid">
          <div v-for="(image, index) in businessModelImages" :key="index" class="image-item" data-aos="fade-up"
            data-aos-delay="100" :data-aos-duration="300 * (index + 1)">
            <img :src="locale === 'en' ? image.urlEn : image.urlFr" :alt="$t(`creationValeur.businessModelImages.image${index + 1}.alt`)" class="business-image" />
          </div>
        </div>
      </div>
      <div class="content-section">
        <h1 class="content-title">{{ $t('creationValeur.csrStrategyTitle') }}</h1>
        <div class="content-divider"></div>
        <p>{{ $t('creationValeur.csrParagraph1') }}</p>
        <p>{{ $t('creationValeur.csrParagraph2') }}</p>
        <div class="read-more-action">
          <a @click="openPDF('/assets/pdfs/Enjeux-RSE.pdf', '/assets/pdfs/CSR-Strategy.pdf')" class="read-more-btn">
            {{ $t('common.readMore', 'Lire la suite') }}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </a>
        </div>
      </div>
      <div class="content-section">
        <h1 class="content-title">{{ $t('creationValeur.foundationTitle') }}</h1>
        <div class="content-divider"></div>
      </div>
    </article>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import HeroSection from '@/components/ui/HeroSection.vue'

const { t, locale } = useI18n()

const openPDF = (urlFr, urlEn) => {
  window.open(locale === 'fr' ? urlFr : urlEn, '_blank')
}

// Images du business model avec URLs français et anglais
const businessModelImages = ref([
  {
    urlFr: '/assets/images/cards/creation-de-valeur-FR-01.png',
    urlEn: '/assets/images/cards/creation-de-valeur-UK-01.png',
    alt: 'Business Model 1'
  },
  {
    urlFr: '/assets/images/cards/creation-de-valeur-FR-02.png',
    urlEn: '/assets/images/cards/creation-de-valeur-UK-02.png',
    alt: 'Business Model 2'
  },
  {
    urlFr: '/assets/images/cards/creation-de-valeur-FR-03.png',
    urlEn: '/assets/images/cards/creation-de-valeur-UK-03.png',
    alt: 'Business Model 3'
  },
  {
    urlFr: '/assets/images/cards/creation-de-valeur-FR-04.png',
    urlEn: '/assets/images/cards/creation-de-valeur-UK-04.png',
    alt: 'Business Model 4'
  }
])
</script>

<style lang="scss" scoped>
$primary-color: #1369b4;
$dark-primary: #0f5694;
$text-dark: #333;
$text-medium: #666;
$white: white;

article {
  max-width: 1400px;
  margin: 4rem auto;
  padding: 0 2rem;
}

.content-section {
  margin-bottom: 4rem;
}

.content-title {
  font-size: 3rem;
  color: $primary-color;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.content-divider {
  height: 5px;
  width: 150px;
  background-color: $primary-color;
  margin: 2rem 0;
}

.images-grid {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.image-item {
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
  }
}

.business-image {
  margin: auto;
  width: 70%;
  height: auto;
  display: block;
  transition: transform 0.3s ease;

  .image-item:hover & {
    transform: scale(1.05);
  }
}

p {
  font-size: 2rem;
  color: $text-medium;
  margin-bottom: 1.5rem;
  // text-align: justify;
}

.read-more-action {
  display: flex;
  justify-content: flex-end;
  margin-right: 8rem;

  .read-more-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem 1.5rem;
    background: transparent;
    color: $primary-color;
    text-decoration: none;
    border: 2px solid $primary-color;
    border-radius: 1rem;
    font-weight: 600;
    font-size: 1.1rem;
    transition: all 0.3s ease;
    text-shadow: none;
    cursor: pointer;

    svg {
      width: 20px;
      height: 20px;
      transition: transform 0.3s ease;
    }

    &:hover {
      background: $primary-color;
      color: $white;
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba($primary-color, 0.3);

      svg {
        transform: translateX(4px);
      }
    }
  }
}



@media (max-width: 768px) {
  article {
    margin: 2rem auto;
    padding: 0 1rem;
  }

  .content-title {
    font-size: 2rem;
  }

  .content-section {
    margin-bottom: 3rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
  }
}
</style>
