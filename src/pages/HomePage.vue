<template>
    <div class="home-page">
        <HeroSection 
            video-url="src/assets/videos/BANK-OF-AFRICA-Our-Continent-Our-Future-V2.mp4"
            image-alt="BOA Rapport Annuel 2020"
        />

        <section class="features" data-aos="fade-up" data-aos-delay="300">
            <h2>{{ $t('home.features', 'Fonctionnalités') }}</h2>
            <div class="features-grid">
                <div v-for="(feature, index) in features" :key="index" class="feature-card" data-aos="fade-up"
                    :data-aos-delay="400 + index * 100">
                    <div class="feature-icon">{{ feature.icon }}</div>
                    <h3>{{ $t(feature.title) }}</h3>
                    <p>{{ $t(feature.description) }}</p>
                </div>
            </div>
        </section>

        <section id="performances" class="performances" data-aos="fade-up" data-aos-delay="500">
            <h2>{{ $t('navigation.performances', 'Performances') }}</h2>
            <div class="performances-content">
                <div class="card">
                    <div class="card__header">
                        <h3>Performances 2020</h3>
                    </div>
                    <div class="card__content">
                        <p>Contenu des performances financières et opérationnelles à venir...</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="image-section">
            <div class="slideshow-container">
                <div v-for="(image, index) in slideshowImages" :key="index" class="slide"
                    :class="{ active: currentSlide === index }">
                    <img :src="image.url" :alt="image.alt" class="slide-image" />
                    <div class="slide-overlay"></div>
                    <div class="slide-content">
                        <h2 class="slide-title">{{ locale === 'en' ? image.titleEn : image.title }}</h2>
                        <div class="slide-divider"></div>
                    </div>
                    <div class="slide-action">
                        <router-link :to="image.link" class="slide-btn">
                            {{ $t('common.readMore', 'Lire la suite') }}
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </router-link>
                    </div>
                </div>

                <!-- Navigation dots -->
                <div class="dots-container">
                    <span v-for="(image, index) in slideshowImages" :key="index" class="dot"
                        :class="{ active: currentSlide === index }" @click="goToSlide(index)"></span>
                </div>

                <!-- Navigation arrows -->
                <button class="nav-arrow prev" @click="prevSlide">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </button>
                <button class="nav-arrow next" @click="nextSlide">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </button>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import HeroSection from '@/components/ui/HeroSection.vue'

const { t, locale } = useI18n()

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

// Diaporama
const currentSlide = ref(0)
const slideshowImages = ref([
    {
        url: '/src/assets/images/backgrounds/DSC_4990.png',
        alt: 'Image BOA 1',
        title: 'Création de Valeur & Impact Positif',
        titleEn: 'Value Creation & Positive Impact',
        link: '/creation-valeur'
    },
    {
        url: '/src/assets/images/backgrounds/ID60b5e638cffab.png',
        alt: 'Image BOA 2',
        title: 'Ambitions & Orientations Stratégiques',
        titleEn: 'Goals & Strategic Priorities',
        link: '/ambitions-orientations'
    },
    {
        url: '/src/assets/images/backgrounds/ID60b5e706060d3-1.png',
        alt: 'Image BOA 3',
        title: 'Perspectives',
        titleEn: 'Perspectives',
        link: '/perspectives'
    }
])

let slideInterval = null

const nextSlide = () => {
    currentSlide.value = (currentSlide.value + 1) % slideshowImages.value.length
}

const prevSlide = () => {
    currentSlide.value = currentSlide.value === 0 ? slideshowImages.value.length - 1 : currentSlide.value - 1
}

const goToSlide = (index) => {
    currentSlide.value = index
}

const startAutoSlide = () => {
    slideInterval = setInterval(nextSlide, 10000) // Change toutes les 10 secondes
}

const stopAutoSlide = () => {
    if (slideInterval) {
        clearInterval(slideInterval)
        slideInterval = null
    }
}

onMounted(() => {
    startAutoSlide()
})

onUnmounted(() => {
    stopAutoSlide()
})
</script>

<style lang="scss" scoped>
$primary-color: #1369b4;
$dark-primary: #0f5694;
$text-dark: #333;
$text-medium: #666;
$white: white;

.home-page {
    min-height: 80vh;
}

.btn {
    padding: 0.75rem 2rem;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;
    border: 2px solid transparent;

    &-primary {
        background: $primary-color;
        color: $white;

        &:hover {
            background: $dark-primary;
            transform: translateY(-2px);
        }
    }

    &-secondary {
        border-color: $primary-color;
        color: $primary-color;

        &:hover {
            background: $primary-color;
            color: $white;
            transform: translateY(-2px);
        }
    }
}

.features {
    padding: 2rem 0;

    h2 {
        text-align: center;
        margin-bottom: 3rem;
        font-size: 2.5rem;
    }

    &-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
    }
}

.feature-card {
    text-align: center;
    padding: 2rem;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: transform 0.3s ease;

    &:hover {
        transform: translateY(-5px);
    }

    h3 {
        margin-bottom: 1rem;
        color: $text-dark;
    }

    p {
        color: $text-medium;
        line-height: 1.6;
    }
}

.feature-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.performances {
    margin-top: 4rem;
    text-align: center;

    h2 {
        font-size: 2.5rem;
        color: $primary-color;
        margin-bottom: 2rem;
    }

    &-content {
        max-width: 800px;
        margin: 0 auto;
    }
}

.image-section {
    position: relative;
    height: 809px;
    overflow: hidden;
    margin-top: 4rem;
}

.slideshow-container {
    position: relative;
    width: 100%;
    height: 100%;
}

.slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;

    &.active {
        opacity: 1;
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
        top: 15%;
        left: 8%;
        color: $white;
        z-index: 3;
        max-width: 800px;
        padding: 0 2rem;
    }

    &-action {
        position: absolute;
        bottom: 10%;
        left: 8%;
        color: $white;
        z-index: 3;
        padding: 0 2rem;
    }

    &-title {
        font-size: 3.5rem;
        font-weight: 700;
        text-transform: uppercase;
        margin-bottom: 0;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
        line-height: 1.2;
    }

    &-divider {
        width: 150px;
        height: 5px;
        background: $white;
        margin-top: 2rem;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
        // border-radius: 0.5rem;
    }

    &-btn {
        display: inline-flex;
        align-items: center;
        gap: 0.75rem;
        padding: 1rem 1.5rem;
        background: transparent;
        color: $white;
        text-decoration: none;
        border: 2px solid $white;
        border-radius: 1rem;
        font-weight: 600;
        font-size: 1.1rem;
        transition: all 0.3s ease;
        text-shadow: none;

        svg {
            width: 20px;
            height: 20px;
            transition: transform 0.3s ease;
        }

        &:hover {
            background: $white;
            color: $primary-color;
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(255, 255, 255, 0.2);

            svg {
                transform: translateX(4px);
            }
        }
    }
}

.dots-container {
    display: none;
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    // display: flex;
    gap: 10px;
    z-index: 10;
}

.dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.5);
    cursor: pointer;
    transition: background 0.3s ease;

    &.active,
    &:hover {
        background: rgba(255, 255, 255, 0.9);
    }
}

.nav-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: transparent;
    color: $white;
    border: none;
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s ease;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        width: 5rem;
        height: 5rem;
        transition: transform 0.3s ease;
    }

    &:hover {
        transform: translateY(-50%) scale(1.1);

        svg {
            transform: scale(1.1);
        }
    }

    &.prev {
        left: 20px;
    }

    &.next {
        right: 20px;
    }
}

@media (max-width: 768px) {
    .image-section {
        height: 40vh;
    }

    .slide {

        &-content,
        &-action {
            padding: 0 1rem;
        }

        &-title {
            font-size: 2rem;
        }

        &-btn {
            padding: 0.8rem 2rem;
            font-size: 1rem;
        }
    }

    .nav-arrow {
        width: 40px;
        height: 40px;

        svg {
            width: 18px;
            height: 18px;
        }

        &.prev {
            left: 10px;
        }

        &.next {
            right: 10px;
        }
    }

    .dots-container {
        bottom: 10px;
    }

    .dot {
        width: 10px;
        height: 10px;
    }

    .features-grid {
        grid-template-columns: 1fr;
    }
}

@media (prefers-color-scheme: dark) {
    .feature-card p {
        color: #ccc;
    }

    .feature-card {
        background: rgba(36, 36, 36, 0.5);
        border-color: rgba(255, 255, 255, 0.1);

        h3 {
            color: #fff;
        }
    }
}
</style>
