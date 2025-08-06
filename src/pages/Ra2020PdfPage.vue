<template>
    <div class="ra2020-pdf-page">
        <HeroSection image-url="src/assets/images/backgrounds/RAPDF.png" image-alt="Rapport Annuel 2020 - BOA" />

        <div class="content-section">
            <div class="report-sections">
                <div v-for="(section, index) in reportSections" :key="index" class="section-card" data-aos="fade-up"
                    :data-aos-delay="300 + index * 100" @click="openPDF(section)">
                    <div>
                        <h3 class="section-title">{{ locale === 'en' ? section.titleEn : section.title }}</h3>
                        <div class="slide-divider"></div>
                    </div>

                    <img src="/src/assets/images/icons/Image_3.png" alt="PDF Icon" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import HeroSection from '@/components/ui/HeroSection.vue'

const { locale } = useI18n()

const reportSections = ref([
    {
        title: 'RAPPORT ANNUEL INTÉGRÉ 2020',
        titleEn: 'INTEGRATED ANNUAL REPORT 2020',
        pdfUrlFr: '/src/assets/pdfs/RAPPORT-BMCE-INTEGRAL-XG-defBR-29-9-BON-1-2.pdf',
        pdfUrlEn: '/src/assets/pdfs/RAPPORT-RAI-ANGLAIS.pdf'
    },
    {
        title: 'RAPPORT DE GOUVERNANCE',
        titleEn: 'GOVERNANCE REPORT',
        pdfUrlFr: '/src/assets/pdfs/Rapport-de-gouvernance.pdf',
        pdfUrlEn: '/src/assets/pdfs/Le-rapport-Governance-BOA-ENglish.pdf'
    },
    {
        title: 'DISPOSITIF DE GESTION DES RISQUES',
        titleEn: 'ORGANIZATION OF RISK MANAGEMENT',
        pdfUrlFr: '/src/assets/pdfs/Dispositif-de-gestion-des-risques.pdf',
        pdfUrlEn: '/src/assets/pdfs/Le-rapport-Risk-Management-BOA-ENglish.pdf'
    },
    {
        title: 'RAPPORT RSE',
        titleEn: 'SUSTAINABILITY REPORT',
        pdfUrlFr: '/src/assets/pdfs/RAPPORT-BMCE-DD-2021-XG-def.pdf',
        pdfUrlEn: '/src/assets/pdfs/RAPPORT-BMCE-DD-2021-XG-ANGLAIS-23-11.pdf'
    },
    {
        title: 'RAPPORT FINANCIER ANNUEL 2020',
        titleEn: 'ANNUAL FINANCIAL REPORT 2020',
        pdfUrlFr: '/src/assets/pdfs/RFA-Bank-Of-Africa_2020.pdf',
        pdfUrlEn: '/src/assets/pdfs/Annual-financial-report-2020-2.pdf'
    },
    {
        title: 'RAPPORT ABRÉGÉ 2020 EN SIX LANGUES',
        titleEn: 'ABRIDGED REPORT 2020 IN SIX LANGUAGES',
        pdfUrlFr: '/src/assets/pdfs/ABREGE-COMPLET-2021-FR.pdf',
        pdfUrlEn: '/src/assets/pdfs/ABREGE-COMPLET-2021-FR.pdf'
    }
])

const openPDF = (section) => {
    // Ouvrir le PDF dans la langue appropriée
    const pdfUrl = locale.value === 'en' ? section.pdfUrlEn : section.pdfUrlFr
    window.open(pdfUrl, '_blank')
}
</script>

<style lang="scss" scoped>
.ra2020-pdf-page {
    position: relative;
}

.content-section {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    // align-items: center;
    justify-content: center;
    max-width: 1600px;
    margin: auto;
}

.report-sections {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.section-card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
}

.section-title {
    font-size: 2rem;
    font-weight: 400;
    color: #1369b4;
    margin: 0;
    text-transform: uppercase;
}

.slide-divider {
    width: 64px;
    height: 5px;
    background: white;
    margin-top: 1rem;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
    // border-radius: 0.5rem;
}

img {
    height: 100%;
}

@media (max-width: 768px) {
    .section-card {
        flex-direction: column;
        text-align: center;
        gap: 1rem;
        padding: 1rem;
    }

    .section-title {
        font-size: 1.2rem;
    }

    .slide-divider {
        width: 60px;
        align-self: center;
    }

    img {
        width: 40px;
    }
}
</style>
