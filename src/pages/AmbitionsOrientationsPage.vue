<template>
  <div class="ambitions-orientations-page">
    <HeroSection image-url="/assets/images/backgrounds/ID60b5e638cffab.png"
      image-alt="Ambitions et Orientations - BOA" />
    <div class="content">
      <p class="content-text">{{ t('ambitionsOrientationsPage.content') }}</p>
      <div class="content-divider"></div>
      
      <!-- Grille des 6 éléments -->
      <div class="grid-container">
        <div 
          v-for="(item, index) in items" 
          :key="index"
          class="grid-item"
          data-aos="fade-up"
          :data-aos-delay="(index * 100) + 200"
        >
          <div class="item-image">
            <img :src="item.image" :alt="$i18n.locale === 'fr' ? item.titleFr : item.titleEn" />
          </div>
          <h3 class="item-title">
            {{ $i18n.locale === 'fr' ? item.titleFr : item.titleEn }}
          </h3>
          <p class="item-content">
            {{ $i18n.locale === 'fr' ? item.contentFr : item.contentEn }}
          </p>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import HeroSection from '@/components/ui/HeroSection.vue'

const { t } = useI18n()

const items = [
  {
    titleFr: "REDYNAMISER LE RETAIL ET CORPORATE BANKING",
    titleEn: "PROVIDE FRESH IMPETUS TO RETAIL BANKING AND CORPORATE BANKING",
    contentFr: "Fort d'un maillage territorial inégalé au niveau du continent, BANK OF AFRICA est déterminé à déployer son expertise en matière de financement et d'accompagnement de la clientèle Retail et Corporate. La culture de proximité avec les clients que BANK OF AFRICA a su tisser à travers son large réseau d'agences et l'accessibilité de ses services à distance, grâce aux innovations digitales, contribuent à renforcer ses parts de marché, aussi bien au Maroc que dans le reste du continent africain.",
    contentEn: "With an unrivalled regional network across Africa, BANK OF AFRICA is determined to leverage its expertise in providing funding and support to retail banking as well as corporate banking customers. With an extensive branch network and a vast array of remote banking services resulting from digital innovations, BANK OF AFRICA has managed to foster close ties with its customers. As a result, it has grown its market share not only in Morocco but in Africa.",
    image: "/assets/images/cards/nIdaC6vEayOVlEnMHSiFqOJYemXAzU.png"
  },
  {
    titleFr: "DÉVELOPPER DE NOUVEAUX RELAIS DE CROISSANCE",
    titleEn: "DEVELOP NEW GROWTH DRIVERS",
    contentFr: "BANK OF AFRICA s'inscrit dans une démarche de développement continu pour ses activités, et demeure constamment à la recherche de nouveaux gisements de croissance pour consolider son positionnement de groupe bancaire panafricain multi-métiers, ouvert sur le monde. Fort d'une alliance solide avec des partenaires internationaux BANK OF AFRICA développe des lignes de financement à fort impact économique, social et environnemental.",
    contentEn: "As part of a process of ongoing development, BANK OF AFRICA is constantly looking for new sources of growth to consolidate its position as a multi-business pan-African banking group with a global outlook. Leveraging its close ties with international partners, BANK OF AFRICA is developing financing facilities which can have a strong economic, social and environmental impact.",
    image: "/assets/images/cards/cwnaFGNBRUTg_14hues3B6R4Hsv7OJ.png"
  },
  {
    titleFr: "STRATÉGIE DE DÉVELOPPEMENT À L'INTERNATIONAL AU SERVICE DE L'AFRIQUE",
    titleEn: "ENSURE THAT AFRICA BENEFITS FROM THE GROUP'S INTERNATIONAL GROWTH STRATEGY",
    contentFr: "BANK OF AFRICA a bâti une organisation ouverte sur le monde autour de son expertise au Maroc et en Afrique. Grâce à la complémentarité de ses activités dans ses 32 pays de présence et son implantation dans les principales places financières mondiales (Londres, Paris, Zurich, Dubaï, Shanghai) BANK OF AFRICA ambitionne d'apporter aux grandes entreprises présentes dans les 3 continents – Afrique, Europe et Asie – son savoir-faire en matière de Corporate Banking et de Trade Finance. Son positionnement unique dans le continent et sa large couverture géographique sont autant d'atouts pour réussir cette ambition de développement.",
    contentEn: "BANK OF AFRICA has built an outward-looking organisation underpinned by high levels of expertise of the Moroccan and African markets. Thanks to the complementary nature of its businesses in the 32 countries in which it has operations and its presence in some of the world's major financial centres – London, Paris, Zurich, Dubai and Shanghai – BANK OF AFRICA aims to offer large enterprises in Africa, Europe and Asia its expertise in corporate banking and trade finance. Its unique profile on the continent and its extensive geographical coverage are just some of its attributes that should enable it to fulfil its aspirations.",
    image: "/assets/images/cards/ID6K6gSwR27aTmbqpQHmLI49gSaZzE.png"
  },
  {
    titleFr: "ACCÉLÉRER LA BANQUE DIGITALE",
    titleEn: "ACCELERATE DIGITAL BANKING",
    contentFr: "Afin de réussir les défis liés aux mutations profondes de l'écosystème du secteur bancaire et à la montée en puissance des acteurs du digital, BANK OF AFRICA s'est dotée d'un ambitieux Programme de Transformation Digitale. Celui-ci vise essentiellement à améliorer l'expérience client sur l'ensemble des canaux de distribution et à renforcer l'efficacité opérationnelle des métiers à travers la digitalisation des processus d'affaires front to back, la réalisation de ces deux finalités permet à BANK OF AFRICA d'affirmer son positionnement en tant que référence de l'innovation digitale des services bancaires et non-bancaires et d'explorer de nouvelles sources de revenu, à travers des modèles économiques novateurs. A l'horizon 2030, BANK OF AFRICA ambitionne de devenir un groupe panafricain présent dans plus de 25 pays, leader en termes de Responsabilité Sociale et Environnementale, outil d'une finance à impact pour les échanges et les investissements dans le Continent et au service des Africains du monde.   Pour atteindre cette Vision, BANK OF AFRICA peut s'appuyer sur sa présence dans 20 pays en Afrique, son leadership dans plusieurs marchés clés (Maroc, zone UEMOA) et son savoir-faire de banque universelle avec une forte proposition de valeur sur les segments Corporate, PME et Professionnels.",
    contentEn: "In order to meet the challenges arising from the profound changes taking place in the banking industry and a growing challenge from e-banking competitors, BANK OF AFRICA has implemented an ambitious ‘Digital Transformation Programme'. This is basically aimed at improving customer experience across all distribution channels and improving the operational efficiency of each business line by digitising front-to-back-office business processes. Achieving these two goals will further underline BANK OF AFRICA's growing reputation as a digital innovation leader in banking and non-banking services whilst enabling it to explore new revenue sources through innovative business models. By 2030, BANK OF AFRICA aims to become a pan-African group with operations in more than 25 countries, a leader in social and environmental responsibility and a catalyst for positive impact finance to promote trade and investment across the continent and serve Africans around the world. To fulfil its ambitions, BANK OF AFRICA is able to leverage its extensive banking network in 20 countries in Africa, its leadership in a number of key markets (Morocco, WAEMU zone) and its universal banking know-how with a strong value proposition in the Corporate Banking, SME Banking and Professional Banking market segments.",
    image: "/assets/images/cards/ID309164-conheca-a-rotina-do-p.png"
  },
  {
    titleFr: "RENFORCER LE POSITIONNEMENT SUR LA PME EN AFRIQUE",
    titleEn: "BOLSTER COVERAGE OF SMES IN AFRICA",
    contentFr: "Convaincu de l'importance de l'écosystème des PME en Afrique, BANK OF AFRICA s'est résolue à accompagner les entreprises du continent avec une offre de financement adaptée et un suivi approprié pour garantir l'émergence d'un tissu économique africain solide. Cet accompagnement sera assorti d'un renforcement des outils de maîtrise des risques et du développement des synergies entre les différentes entités de BANK OF AFRICA.",
    contentEn: "BANK OF AFRICA is convinced of the importance of the SME ecosystem to Africa's development. As a result, it is committed to supporting African businesses through tailor-made financing packages and to monitoring those businesses appropriately, to ensure that the SME sector plays a fundamental role in the development of the African economy. In addition, risk management systems will be further bolstered, and synergies developed between BANK OF AFRICA's various business entities.",
    image: "/assets/images/cards/ID1622061918-GettyImages-89000.png"
  },
  {
    titleFr: "UNE DYNAMIQUE DE DÉVELOPPEMENT DURABLE",
    titleEn: "EMPHASISE SUSTAINABLE DEVELOPMENT",
    contentFr: "En tant que socle historique de son développement et pilier de sa culture d'entreprise, le développement durable est au centre de l'évolution future de BANK OF AFRICA. Le renforcement des acquis durant les dernières années et le positionnement en tant qu'acteur majeur de la Finance à Impact Positif devront permettre à BANK OF AFRICA de donner une nouvelle dimension à ses engagements sociaux, sociétaux et environnementaux, dans une démarche commune à l'ensemble des filiales, et en cohérence avec les actions de la Fondation BMCE Bank. Avec sa démarche « Positive Impact Portfolio Analysis », BANK OF AFRICA peut piloter son portefeuille d'engagements, optimiser leurs impacts positifs et limiter les éventuels impacts négatifs.",
    contentEn: "Sustainable development, which has historically played an essential role in BANK OF AFRICA's development and which permeates its corporate culture, remains one of its strategic priorities. By building on its achievements of recent years and by continuing to enhance its reputation as a key player in positive impact finance, BANK OF AFRICA aims to add a fresh dimension to its social, societal and environmental undertakings. This approach, which is embraced by every Group subsidiary, is consistent with BMCE Bank Foundation's various initiatives. BANK OF AFRICA's Positive Impact Portfolio Analysis approach will enable it to steer its portfolio of loan commitments, optimise their positive impact whilst mitigating their potential negative impact.",
    image: "/assets/images/cards/ID4lfBniPV3v_HelyqQXuUiOJmSHuZ.png"
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
    margin: 2rem 0;
  }

  .grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: 3rem;

    .grid-item {
      background: $white;
      border-radius: 12px;
      padding: 2rem;
      box-shadow: 0 7px 15px rgba(0, 0, 0, 0.5);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      border: 1px solid #e5e5e5;

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 25px rgba($primary-color, 0.15);
      }

      .item-image {
        display: flex;
        justify-content: center;
        margin-bottom: 1.5rem;

        img {
          width: 100%;
          object-fit: contain;
        }
      }

      .item-title {
        font-size: 2rem;
        font-weight: 500;
        color: $primary-color;
        margin-bottom: 1rem;
      }

      .item-content {
        font-size: 1.75rem;
        color: $text-medium;
        // text-align: justify;
        margin: 0;
      }
    }
  }

  // Responsive design
  @media (max-width: 1024px) {
    .grid-container {
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
    }
  }

  @media (max-width: 768px) {
    padding: 1rem;

    .content-text {
      font-size: 1.5rem;
    }

    .grid-container {
      grid-template-columns: 1fr;
      gap: 1rem;
    }

    .grid-item {
      padding: 1.5rem;

      .item-title {
        font-size: 1.3rem;
      }

      .item-content {
        font-size: 0.9rem;
      }
    }
  }
}
</style>
