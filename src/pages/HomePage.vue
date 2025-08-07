<template>
    <div class="home-page">
        <HeroSection video-url="/assets/videos/BANK-OF-AFRICA-Our-Continent-Our-Future.mp4"
            image-alt="BOA Rapport Annuel 2020" />

        <!-- MOT DU PRESIDENT -->
        <section class="mot-president" data-aos="fade-up" data-aos-delay="200">
            <div class="mot-president-content">
                <div>
                    <h2 class="mot-president-title">{{ $t('navigation.motPresident') }}</h2>
                    <div class="mot-president-divider"></div>
                    <p>{{ $t('home.motPresidentSubtitle') }}</p>
                </div>
                <img src="/assets/images/backgrounds/president.png" alt="">
            </div>
            <div class="mot-president-btn">
                <router-link to="/mot-president" class="readMore-btn">
                    {{ $t('common.readMore', 'Lire la suite') }}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </router-link>
            </div>
            <img class="image-africa" src="/assets/images/backgrounds/africa.png" alt="">
        </section>

        <!-- PARTENAIRES -->
        <section class="partenaires" data-aos="fade-up" data-aos-delay="300">
            <div class="partenaires-container">
                <div class="marquee-container">
                    <div class="marquee">
                        <div class="marquee-content">
                            <img src="/assets/images/logos/Logo1.jpg" alt="Logo 1" class="partner-logo">
                            <img src="/assets/images/logos/Logo2.jpg" alt="Logo 2" class="partner-logo">
                            <img src="/assets/images/logos/Logo3.jpg" alt="Logo 3" class="partner-logo">
                            <img src="/assets/images/logos/Logo4.jpg" alt="Logo 4" class="partner-logo">
                            <img src="/assets/images/logos/Logo5.jpg" alt="Logo 5" class="partner-logo">
                            <img src="/assets/images/logos/Logo6.jpg" alt="Logo 6" class="partner-logo">
                            <img src="/assets/images/logos/Logo7.jpg" alt="Logo 7" class="partner-logo">
                            <img src="/assets/images/logos/Logo8.jpg" alt="Logo 8" class="partner-logo">
                            <img src="/assets/images/logos/Logo9.jpg" alt="Logo 9" class="partner-logo">
                            <img src="/assets/images/logos/Logo10.jpg" alt="Logo 10" class="partner-logo">
                            <img src="/assets/images/logos/Logo11.jpg" alt="Logo 11" class="partner-logo">
                            <img src="/assets/images/logos/Logo12.jpg" alt="Logo 12" class="partner-logo">
                        </div>
                        <!-- Duplicate pour effet continu -->
                        <div class="marquee-content">
                            <img src="/assets/images/logos/Logo1.jpg" alt="Logo 1" class="partner-logo">
                            <img src="/assets/images/logos/Logo2.jpg" alt="Logo 2" class="partner-logo">
                            <img src="/assets/images/logos/Logo3.jpg" alt="Logo 3" class="partner-logo">
                            <img src="/assets/images/logos/Logo4.jpg" alt="Logo 4" class="partner-logo">
                            <img src="/assets/images/logos/Logo5.jpg" alt="Logo 5" class="partner-logo">
                            <img src="/assets/images/logos/Logo6.jpg" alt="Logo 6" class="partner-logo">
                            <img src="/assets/images/logos/Logo7.jpg" alt="Logo 7" class="partner-logo">
                            <img src="/assets/images/logos/Logo8.jpg" alt="Logo 8" class="partner-logo">
                            <img src="/assets/images/logos/Logo9.jpg" alt="Logo 9" class="partner-logo">
                            <img src="/assets/images/logos/Logo10.jpg" alt="Logo 10" class="partner-logo">
                            <img src="/assets/images/logos/Logo11.jpg" alt="Logo 11" class="partner-logo">
                            <img src="/assets/images/logos/Logo12.jpg" alt="Logo 12" class="partner-logo">
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- PERFORMANCES & REALISATIONS -->
        <section class="performances" data-aos="fade-up" data-aos-delay="400">
            <div class="performances-container">
                <div class="performances-video">
                    <video autoplay muted loop>
                        <source src="/assets/videos/Video-BOA-2020-highlights-FINAL-1.mp4" type="video/mp4">
                        Votre navigateur ne supporte pas la lecture de vidéos.
                    </video>
                </div>
                <div class="performances-content">
                    <h2 class="performances-title">{{ $t('home.performances.title', 'Performances & Réalisations') }}</h2>
                    <div class="performances-divider"></div>
                    <p class="performances-text">{{ $t('home.performances.description', 'Découvrez nos performances exceptionnelles et réalisations marquantes de l\'année 2020. Bank of Africa continue de démontrer sa solidité financière et son engagement envers le développement économique du continent africain.') }}</p>
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
        url: '/assets/images/backgrounds/DSC_4990.png',
        alt: 'Image BOA 1',
        title: 'Création de Valeur & Impact Positif',
        titleEn: 'Value Creation & Positive Impact',
        link: '/creation-valeur'
    },
    {
        url: '/assets/images/backgrounds/ID60b5e638cffab.png',
        alt: 'Image BOA 2',
        title: 'Ambitions & Orientations Stratégiques',
        titleEn: 'Goals & Strategic Priorities',
        link: '/ambitions-orientations'
    },
    {
        url: '/assets/images/backgrounds/ID60b5e706060d3-1.png',
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

.mot-president {
    position: relative;
    max-width: 1600px;
    margin: 6rem auto;

    .image-africa {
        height: 20rem;
        position: absolute;
        top: 40%;
        left: 10%;
        z-index: -1;
    }

    .mot-president-divider {
        height: 4px;
        width: 150px;
        background: $primary-color;
        margin: 2rem 0;
    }

    .mot-president-content {
        display: flex;
        align-items: start;
        justify-content: center;
        gap: 5rem;
        // text-align: center;

        h2 {
            font-size: 3em;
            color: $primary-color;
        }

        p {
            font-size: 2em;
            color: $text-medium;
        }
    }

    .mot-president-btn {
        display: flex;
        justify-content: center;
    }

    .readMore-btn {
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

        svg {
            width: 20px;
            height: 20px;
            transition: transform 0.3s ease;
        }

        &:hover {
            // background: $primary-color;
            color: $primary-color;
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(255, 255, 255, 0.2);

            svg {
                transform: translateX(4px);
            }
        }
    }
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

.partenaires {
    margin: 6rem 0;
    padding: 0 2rem;

    &-container {
        margin: 0 auto;
        text-align: center;
    }
}

.marquee-container {
    overflow: hidden;
    white-space: nowrap;
    position: relative;
    width: 100%;
    
    &::before,
    &::after {
        content: '';
        position: absolute;
        top: 0;
        width: 100px;
        height: 100%;
        z-index: 2;
        pointer-events: none;
    }
    
    &::before {
        left: 0;
        // background: linear-gradient(to right, rgba(19, 105, 180, 0.05), transparent);
    }
    
    &::after {
        right: 0;
        // background: linear-gradient(to left, rgba(19, 105, 180, 0.05), transparent);
    }
}

.marquee {
    display: flex;
    animation: scroll 30s linear infinite;
    
    &:hover {
        animation-play-state: paused;
    }
}

.marquee-content {
    display: flex;
    align-items: center;
    justify-content: space-around;
    min-width: 100%;
    gap: 3rem;
    
    @media (max-width: 768px) {
        gap: 2rem;
    }
}

.partner-logo {
    height: 10rem;
    // width: auto;
    object-fit: contain;
    // filter: grayscale(100%) opacity(0.7);
    transition: all 0.3s ease;
    flex-shrink: 0;
    
    &:hover {
        // filter: grayscale(0%) opacity(1);
        transform: scale(1.1);
    }
    
    @media (max-width: 768px) {
        height: 60px;
    }
    
    @media (max-width: 480px) {
        height: 50px;
    }
}

@keyframes scroll {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-100%);
    }
}

.performances {
    margin: 6rem 0;
    padding: 0 2rem;

    &-container {
        max-width: 1700px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        gap: 4rem;
        min-height: 500px;

        @media (max-width: 768px) {
            flex-direction: column;
            gap: 2rem;
            min-height: auto;
        }
    }

    &-video {
        flex: 1;
        position: relative;
        // border-radius: 1rem;
        overflow: hidden;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);

        video {
            width: 100%;
            // height: 400px;
            object-fit: cover;
            object-position: center;

            @media (max-width: 768px) {
                height: 250px;
            }
        }
    }

    &-content {
        flex: 1;
        padding: 2rem 0;

        @media (max-width: 768px) {
            text-align: center;
            padding: 1rem 0;
        }
    }

    &-title {
        font-family: 'Nexa', sans-serif;
        font-weight: 700;
        font-size: 3rem;
        color: $primary-color;
        text-transform: uppercase;
        letter-spacing: 2px;
        margin: 0 0 2rem 0;
        line-height: 1.2;

        @media (max-width: 768px) {
            font-size: 2rem;
            letter-spacing: 1px;
        }

        @media (max-width: 480px) {
            font-size: 1.5rem;
        }
    }

    &-divider {
        width: 150px;
        height: 5px;
        background: $primary-color;
        margin: 0 0 2rem 0;
        border-radius: 2px;

        @media (max-width: 768px) {
            margin: 0 auto 2rem auto;
        }
    }

    &-text {
        font-family: 'Nexa', sans-serif;
        font-weight: 400;
        font-size: 1.2rem;
        color: $text-medium;
        line-height: 1.8;
        margin: 0;

        @media (max-width: 768px) {
            font-size: 1rem;
            line-height: 1.6;
        }
    }
}

.image-section {
    position: relative;
    height: 809px;
    overflow: hidden;
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
