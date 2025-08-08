<template>
  <div class="creation">
    <HeroSection image-url="/assets/images/backgrounds/DSC_4990.png" image-alt="Création de Valeur - BOA" :title="$t('creationValeur.title')" />
    <article>
      <div class="content-section">
        <h1 class="content-title">{{ $t('creationValeur.businessModelTitle') }}</h1>
        <div class="content-divider"></div>
        <div class="images-grid">
          <div v-for="(image, index) in businessModelImages" :key="index" class="image-item" data-aos="fade-up"
            :data-aos-delay="300 * (index + 1)">
            <img :src="locale === 'en' ? image.urlEn : image.urlFr"
              :alt="$t(`creationValeur.businessModelImages.image${index + 1}.alt`)" class="business-image" />
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
      <div class="content-section business-model-section">
        <div>
          <h1 class="content-title">{{ $t('creationValeur.foundationDescription.title') }}</h1>
          <div class="content-divider"></div>
          <p>{{ $t('creationValeur.foundationDescription.paragraph1') }}</p>
          <p>{{ $t('creationValeur.foundationDescription.paragraph2') }}</p>
        </div>
        <div>
          <img src="/assets/images/cards/La_fondation_BMCE_Bank_un-1.png" alt="">
          <div class="read-more-action">
            <a @click="openPDF('/assets/pdfs/Fondation-et-RSE.pdf', '/assets/pdfs/Foundation-and-CSR.pdf')"
              class="read-more-btn">
              {{ $t('common.readMore', 'Lire la suite') }}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="content-section">
        <h1 class="content-title">{{ $t('creationValeur.foundationTitle') }}</h1>
        <div class="content-divider"></div>

        <!-- 4 CARDS FONDATION -->
        <div class="foundation-grid">
          <div v-for="(item, index) in foundationItems" :key="index" class="foundation-card" data-aos="fade-up"
            :data-aos-delay="(index * 100) + 200">
            <div class="card-image">
              <img :src="item.image" :alt="locale === 'en' ? item.titleEn : item.titleFr" />
            </div>
            <h3 class="card-title">
              {{ locale === 'en' ? item.titleEn : item.titleFr }}
            </h3>
            <p class="card-content">
              {{ locale === 'en' ? item.contentEn : item.contentFr }}
            </p>
            <div class="card-action">
              <a @click="openPDF(item.urlFr, item.urlEn)" class="card-read-more-btn">
                {{ $t('common.readMore', 'Lire la suite') }}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="french" data-aos="fade-right" data-aos-delay="200">
          <div class="french-content">
            <h3 class="card-title">{{ $t('creationValeur.frenchLegion.title') }}</h3>
            <p>{{ $t('creationValeur.frenchLegion.content') }}</p>
          </div>
          <div class="french-image">
            <img src="/assets/images/cards/IMG_6529.png" :alt="$t('creationValeur.frenchLegion.title')">
          </div>
        </div>

        <div class="award">
          <div class="award-content">
            <div class="foundation-card" data-aos="fade-right" data-aos-delay="100">
              <h3 class="card-title">{{ $t('creationValeur.awards.africanAward.title') }}</h3>
              <p>{{ $t('creationValeur.awards.africanAward.content') }}</p>
            </div>
            <div class="foundation-card" data-aos="fade-right" data-aos-delay="200">
              <h3 class="card-title">{{ $t('creationValeur.awards.teachMorocco.title') }}</h3>
              <p>{{ $t('creationValeur.awards.teachMorocco.content') }}</p>
            </div>
          </div>
          <div class="award-image" data-aos="fade-left" data-aos-delay="300">
            <img src="/assets/images/cards/Bejellouns-receiving-MEI-visionary-award-768x455-1.jpg"
              :alt="$t('creationValeur.awards.africanAward.title')">
          </div>
        </div>
      </div>

    </article>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import HeroSection from '@/components/ui/HeroSection.vue'

const { t, locale } = useI18n()

// Fonction réactive pour ouvrir les PDFs selon la langue
const openPDF = (urlFr, urlEn) => {
  // Utilise la valeur actuelle de locale au moment de l'appel
  const selectedUrl = locale.value === 'fr' ? urlFr : urlEn
  window.open(selectedUrl, '_blank')
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

// Items de la fondation BMCE Bank avec URLs français et anglais
const foundationItems = ref([
  {
    titleFr: "AUX CÔTÉS DE SES BÉNÉFICIAIRES DANS UN CONTEXTE DE CRISE SANITAIRE",
    titleEn: "PUPILS CONTINUING TO RECEIVE AN EDUCATION DESPITE THE PANDEMIC",
    contentFr: "Le contexte particulier de l'année 2020 et l'adoption de l'enseignement à distance ont révélé de nouvelles inégalités dans le milieu scolaire, liées notamment à une fracture numérique, résultat d'un déficit en équipements technologiques dans les foyers et d'une couverture réseau quelquefois inexistante. La qualité de l'enseignement à distance a également pâti d'un manque d'expérience des enseignants et de l'absence de plateformes d'accompagnement appropriées. Cette situation a rappelé une nouvelle fois l'importance de l'engagement de la Fondation BMCE Bank en faveur d'un accès équitable au savoir.",
    contentEn: "The particular context of 2020 saw distance learning adopted as an alternative learning platform across the Kingdom. This phenomenon underlined further educational inequalities, primarily due to a growing digital divide resulting from a lack of technological equipment in homes and sometimes non-existent network coverage. The quality of distance learning has also been hindered by a lack of teaching experience and a shortage of appropriate support mechanisms. This situation is a further reminder of the extent to which BMCE Bank Foundation's commitment is vital to building equitable access to knowledge.",
    image: "/assets/images/cards/Beni_Chiker_Nador.png",
    urlFr: "/assets/pdfs/Beneficiares-Medersat.com_.pdf",
    urlEn: "/assets/pdfs/Beneficiaries-Medersat.com_.pdf"
  },
  {
    titleFr: "MEDERSAT.COM ACADEMY, LE DÉFI DE LA FORMATION POUR LE CORPS ENSEIGNANT",
    titleEn: "MEDERSAT.COM ACADEMY, OVERCOMING THE STAFF TRAINING CHALLENGE",
    contentFr: "En réponse au déficit de formation des enseignants durant la crise sanitaire mondiale, La Fondation BMCE Bank pour l'éducation et l'environnement a créé Medersat.com Academy, un institut virtuel de formation. Avec pour mission d'assurer dans une première phase la formation continue et la qualification permanente des enseignants sous format digital, cet institut a vocation à développer dans un second temps la numérisation des pratiques et de l'enseignement dans les écoles du réseau.",
    contentEn: "In response to a lack of teacher training during the global pandemic, BMCE Bank Foundation for Education and the Environment created Medersat.com Academy, a virtual training institute. The initial aim of this institute is to provide teacher training and qualification in digital format. Subsequently, the institute aims to digitise practices and teaching in network schools.",
    image: "/assets/images/cards/enfant_journee_de_la_terre_clu.png",
    urlFr: "/assets/pdfs/Beneficiares-Medersat.com_.pdf",
    urlEn: "/assets/pdfs/Beneficiaries-Medersat.com_.pdf"
  },
  {
    titleFr: "CONSOLIDATION DE L'ENSEIGNEMENT DU PRÉSCOLAIRE DANS LE RÉSEAU MEDERSAT.COM",
    titleEn: "PRE-SCHOOL EDUCATION BOLSTERED ACROSS THE MEDERSAT.COM NETWORK",
    contentFr: "Afin de continuer à déployer ses efforts en faveur d'un accès au savoir au plus grand nombre, la Fondation BMCE Bank a ouvert 18 nouvelles classes de la Moyenne Section du préscolaire dans les écoles du réseau Medersat.com. Cette initiative qui répond à l'Appel Royal relatif à la généralisation du préscolaire, a été réalisée en partenariat avec l'Association Teach For Morocco, dont Dr. Leila Mezian Benjelloun est Présidente d'Honneur, et représentante au Maroc de l'Association internationale Teach For All basée à New York.",
    contentEn: "BMCE Bank Foundation endeavours to enable as many pupils as possible to gain access to knowledge, opening 18 middle section pre-school classes in Medersat.com network schools. This initiative was carried out in response to the Royal Appeal to make preschool education widely accessible and in partnership with Teach For Morocco, of which Dr Leila Mezian Benjelloun is Honorary President. Teach For Morocco is the Moroccan representative for Teach For All, a New York-based international NGO.",
    image: "/assets/images/cards/Acr5783459992512-2858569.png",
    urlFr: "/assets/pdfs/Consolidation-medersat.com_.pdf",
    urlEn: "/assets/pdfs/Consolidation-Medersat.com_.pdf"
  },
  {
    titleFr: "CONCLUSION DE PARTENARIATS STRATÉGIQUES",
    titleEn: "STRATEGIC PARTNERSHIPS SIGNED",
    contentFr: "En quête d'excellence, la Fondation BMCE Bank continue à déployer ses efforts pour assurer aux écoles bénéficiaires du réseau Medersat.com les meilleures conditions pour un enseignement de qualité. Au-delà du partenariat stratégique qui lie la Fondation BMCE Bank au Ministère de l'Éducation Nationale qui porte notamment sur la construction des écoles, la gestion des ressources humaines et la mise en œuvre du concept Medersat.com, plusieurs partenariats nationaux et étrangers sont venus renforcer les projets de la Fondation BMCE Bank.",
    contentEn: "BMCE Bank Foundation, relentless in its pursuit of excellence, strives to ensure that its Medersat.com network schools enjoy an optimal environment to be able to provide the best possible educational experience. In addition to the strategic partnership between BMCE Bank Foundation for Education and the Environment and the Ministry of National Education to build schools and manage human resources as part of the Medersat.com programme, BMCE Bank Foundation has also teamed up with the following Moroccan and overseas partners : BMCE Bank Foundation has also teamed up with Moroccan and overseas partners.",
    image: "/assets/images/cards/Acr5783459992512-47764.png",
    urlFr: "/assets/pdfs/Consolidation-partenariats-stategiques.pdf",
    urlEn: "/assets/pdfs/Partnerships.pdf"
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
  // max-width: 1400px;
  margin: 4rem auto;
  // padding: 0 2rem;
}

.content-section {
  margin-bottom: 4rem;
  padding: 0 10rem;
}

.business-model-section {
  display: flex;
  background-image: url('/assets/images/backgrounds/ID2e811172d8e1d8e1fe6b20007391.png');
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 5rem;

  div {
    flex: 1;
  }

  img {
    width: 100%;
  }
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
  width: 50%;
  height: auto;
  display: block;
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

// Styles pour les cards de la fondation
.foundation-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 3rem;

}

.foundation-card {
  flex: 1;
  background: $white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #e5e5e5;
  display: flex;
  flex-direction: column;
  // height: 100%;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 40px rgba($primary-color, 0.15);
  }

  .card-image {
    display: flex;
    justify-content: center;
    margin-bottom: 1.5rem;
    height: 200px;
    overflow: hidden;
    border-radius: 8px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    &:hover img {
      transform: scale(1.05);
    }
  }

  .card-title {
    font-size: 1.75rem;
    font-weight: 400;
    color: $primary-color;
    margin-bottom: 1rem;
    line-height: 1.3;
  }

  .card-content {
    font-size: 1.5rem;
    color: $text-medium;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    flex-grow: 1;
  }

  .card-action {
    margin-top: auto;
    display: flex;
    justify-content: flex-end;
  }

  .card-read-more-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.25rem;
    background: transparent;
    color: $primary-color;
    text-decoration: none;
    border: 2px solid $primary-color;
    border-radius: 0.75rem;
    font-weight: 600;
    font-size: 0.9rem;
    transition: all 0.3s ease;
    cursor: pointer;

    svg {
      width: 16px;
      height: 16px;
      transition: transform 0.3s ease;
    }

    &:hover {
      background: $primary-color;
      color: $white;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba($primary-color, 0.3);

      svg {
        transform: translateX(4px);
      }
    }
  }
}

.french {
  display: flex;
  background: $white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #e5e5e5;
  display: flex;
  margin-top: 2rem;
  gap: 2rem;

  .french-content {
    flex: 1;

    h3 {
      color: $primary-color;
      font-weight: 400;
    }

    p {
      font-size: 1.3rem;
      color: $text-medium;
    }
  }

  .french-image {
    flex: 1;
    height: auto;
    overflow: hidden;
    border-radius: 8px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

.award {
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  .award-content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    flex: 1;

    p {
      font-size: 1.3rem;
    }
  }

  .award-image {
    flex: 1;
    height: auto;
    overflow: hidden;
    border-radius: 8px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
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

  .foundation-card {
    padding: 1.5rem;

    .card-title {
      font-size: 1.3rem;
    }

    .card-content {
      font-size: 0.9rem;
    }

    .card-image {
      height: 150px;
    }
  }
}
</style>
