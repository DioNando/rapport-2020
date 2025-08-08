<template>
  <div class="perspectives-page">
    <HeroSection image-url="/assets/images/backgrounds/ID60b5e706060d3-1.png" image-alt="Perspectives - BOA" :title="$t('perspectives.title')" />
    <div class="content">
      <p class="content-text">{{ t('perspectivesPage.content') }}</p>
      <div class="content-divider"></div>
      <h3 class="title">{{ t('perspectivesPage.developmentPriorities') }}</h3>
      <div class="images-grid">
        <div v-for="(image, index) in developmentImages" :key="index" class="image-item" data-aos="zoom-in"
          :data-aos-delay="(index * 100) + 200">
          <img :src="$i18n.locale === 'fr' ? image.urlFr : image.urlEn"
            :alt="$i18n.locale === 'fr' ? image.altFr : image.altEn" class="priority-image" />
        </div>
      </div>
      <h3 class="title">{{ t('perspectivesPage.strategicDrivers') }}</h3>
      <div class="content-list">
        <div>
          {{ t('perspectivesPage.operationalEfficiency') }}
        </div>
        <div>
          {{ t('perspectivesPage.riskManagement') }}
        </div>
      </div>
      <p class="content-text">{{ t('perspectivesPage.content-2') }}</p>
    </div>

  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import HeroSection from '@/components/ui/HeroSection.vue'

const { t } = useI18n()

const developmentImages = [
  {
    urlFr: "/assets/images/perspectives/PERSPECTIVES-02.png",
    urlEn: "/assets/images/perspectives/OUTLOOK-02.png",
    altFr: "Excellence Opérationnelle",
    altEn: "Operational Excellence"
  },
  {
    urlFr: "/assets/images/perspectives/PERSPECTIVES-03.png",
    urlEn: "/assets/images/perspectives/OUTLOOK-03.png",
    altFr: "Innovation Technologique",
    altEn: "Technological Innovation"
  },
  {
    urlFr: "/assets/images/perspectives/PERSPECTIVES-04.png",
    urlEn: "/assets/images/perspectives/OUTLOOK-04.png",
    altFr: "Expansion Géographique",
    altEn: "Geographic Expansion"
  },
  {
    urlFr: "/assets/images/perspectives/PERSPECTIVES-05.png",
    urlEn: "/assets/images/perspectives/OUTLOOK-05.png",
    altFr: "Partenariats Stratégiques",
    altEn: "Strategic Partnerships"
  },
  {
    urlFr: "/assets/images/perspectives/PERSPECTIVES-06.png",
    urlEn: "/assets/images/perspectives/OUTLOOK-06.png",
    altFr: "Durabilité",
    altEn: "Sustainability"
  },
  {
    urlFr: "/assets/images/perspectives/PERSPECTIVES-07.png",
    urlEn: "/assets/images/perspectives/OUTLOOK-07.png",
    altFr: "Inclusion Financière",
    altEn: "Financial Inclusion"
  }
]
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
    margin: 4rem 0;
  }

  .images-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    margin: 3rem 0;
    padding: 2rem;

    .image-item {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 15px;


      .priority-image {
        width: 100%;
        height: 15rem;
        object-fit: contain;
        transition: transform 0.3s ease;
      }
    }

    // Responsive design
    @media (max-width: 1024px) {
      flex-direction: column;
      gap: 1.5rem;
    }

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 1rem;
      padding: 1rem;

      .image-item {
        padding: 1.5rem;

        .priority-image {
          width: 100px;
          height: 100px;
        }
      }
    }
  }
}

.title {
  font-size: 2rem;
  text-transform: uppercase;
  color: $white;
  margin-bottom: 1rem;
  background-image: linear-gradient(90deg, #172975 0%, #5BB4BA 100%);
  width: 100%;
  text-align: center;
  border-radius: 5rem;
  padding: 1rem;
}

.content-list {
  display: flex;
  gap: 1rem;
  margin-top: 3rem;

  div {
    font-size: 2rem;
    color: $white;
    margin-bottom: 1rem;
    color: $primary-color;
    width: 100%;
    text-align: center;
    border: 3px solid $primary-color;
    border-radius: 5rem;
    padding: 2rem 1rem;
  }
}
</style>
