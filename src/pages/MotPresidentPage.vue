<template>
  <div class="mot-president-page">
    <HeroSection image-url="/assets/images/backgrounds/othmane-benjelloun.png" image-alt="Mot du Président - BOA" :title="$t('motPresident.title')" :subtitle="$t('motPresident.subtitle')" />
    <div class="content-section" data-aos="fade-up" data-aos-delay="200">
      <!-- Contenu français -->
      <div v-if="currentLanguage === 'fr'" class="president-message">
        <p>
          Engagé pleinement auprès de ses parties prenantes au Maroc et en Afrique, dans ce contexte historique lié à la
          pandémie du Coronavirus, BANK OF AFRICA a fait preuve d’une mobilisation exemplaire. Pour faire face à cet
          environnement inédit et à ses répercussions, des réponses fortes et rapides ont été apportées par l’Etat
          marocain sous les hautes instructions de Sa Majesté le Roi Mohammed VI. Acteur majeur du secteur bancaire
          marocain, notre Groupe a répondu fortement à l’urgence nationale à travers notamment sa contribution au fonds
          spécial pour la gestion de la pandémie à hauteur d’un milliard de Dirhams.
        </p>
        <p>
          Un accompagnement ciblé a ainsi été proposé au tissu économique national, notamment auprès des TPME, à travers
          une enveloppe globale de financement de plus de 14 milliards de Dirhams et la mise à la disposition de notre
          clientèle de mesures spécifiques et de produits adaptés.
        </p>
        <p>
          Tout en mettant en place des mesures exceptionnelles pour protéger nos collaborateurs et nos clients, nous
          avons également instauré un plan de continuité d’activité de manière à réduire l’impact de la crise sur nos
          différents métiers.
        </p>
        <p>
          Ainsi, BANK OF AFRICA a démontré sa résilience et a confirmé la solidité de son modèle économique et la
          justesse de ses choix stratégiques.
        </p>
        <p>
          Notre dynamique de développement s’est matérialisée, en 2020, par un encours de crédits consolidés en hausse
          de +4% à 194 milliards de dirhams et une épargne maintenue avec un total des dépôts consolidés de 207
          milliards de dirhams, en progression de +2% à fin décembre 2020. Cette dynamique commerciale s’est également
          reflétée au niveau de la performance opérationnelle du Groupe BANK OF AFRICA, avec un Produit Net Bancaire
          consolidé de 14 milliards de dirhams, en hausse de +1%.
        </p>
        <p>
          Précurseur de la banque digitale, composante essentielle de l’inclusion bancaire et sociale, BANK OF AFRICA a
          réaffirmé en 2020 son positionnement de groupe bancaire résolument tourné vers l’avenir, avec le développement
          de nouveaux services évolutifs de banque à distance. Nos clients, particuliers, professionnels et entreprises,
          tant au Maroc que dans plusieurs de nos pays d’implantation en Afrique, ont pu bénéficier de divers canaux
          pour réaliser leurs opérations et disposent désormais d’une panoplie de solutions novatrices simples et
          fluides, dans un contexte où les services à distance sont devenus incontournables.
        </p>
        <p>
          Sur le plus long terme, la période post-Covid exigera des banques une adaptation de leur Business Model.
        </p>
        <p>
          Autrefois relégués au rang d’ambitions, les enjeux de développement durable et de responsabilité sociale sont
          désormais une priorité mondiale. Très tôt, BANK OF AFRICA a pris le soin d’intégrer ces dimensions au cœur de
          sa stratégie de développement et en première ligne de ses engagements, en étant le premier signataire du
          continent africain de la déclaration des institutions financières sur l’environnement et le développement
          durable du Programme des Nations Unies pour l’Environnement – PNUE- et en adoptant les principes fondamentaux
          de la finance responsable. Nous sommes désormais entièrement engagés auprès de nos clients et de nos
          partenaires institutionnels à relever les défis futurs du continent Africain, en matière de financement de la
          croissance, d’inclusion sociale et de développement économique durable.
        </p>
        <p>A ce titre, le Programme en faveur de l’Entrepreneuriat Intelaka, lancé par Sa Majesté le Roi Mohammed VI est
          un modèle d’engagement des banques auprès des entrepreneurs et des jeunes porteurs de projet, au travers d’un
          accompagnement financier et extra-financier.</p>
        <p>
          2020 est résolument l’année où BANK OF AFRICA a témoigné de la pluralité de sa performance avec des
          fondamentaux solides, une empreinte environnementale en constante amélioration et un impact social positif
          auprès de ses différentes parties prenantes.
        </p>
        <p>Notre ambition se poursuit et anime au quotidien l’ensemble du capital humain du Groupe BANK OF AFRICA pour
          le rayonnement du Maroc et du continent africain afin d’en faire une référence mondiale en matière de
          développement durable et de finance à impact positif.</p>
      </div>
      <!-- English -->
      <div v-else-if="currentLanguage === 'en'" class="president-message">
        <p>
          BANK OF AFRICA’s wholehearted commitment to its stakeholders is best illustrated by the exemplary manner in
          which it has responded to the COVID-19 pandemic. The Moroccan government, as instructed by His Majesty King
          Mohammed VI, has introduced strong and rapid measures in response to this unprecedented situation and its
          consequences.
        </p>
        <p>As one of Morocco’s ma jor banking groups, BANK OF AFRICA’s response to the national emergency has been
          robust, contributing MAD 1 billion to the special fund set up to manage the pandemic. Targeted support has
          been provided to the domestic economy, particularly small and medium-sized enterprises, with more than MAD 14
          billion of additional funding set aside, specific measures adopted, and products adapted to meet the needs of
          our customers.</p>
        <p>
          As well as implementing exceptional measures to protect our employees and customers, we activated a business
          continuity plan so as to mitigate the impact from the crisis on our various businesses.
        </p>
        <p>
          BANK OF AFRICA has demonstrated a high level of resilience, a solid business model and sound strategic
          choices.
        </p>
        <p>We continued to grow our business in 2020 with outstanding consolidated loans up 4% at MAD 194 billion.
          Customer savings also held up well with total consolidated deposits up 2% at MAD 207 billion at 31 December
          2020. This strong performance in terms of loan and deposit growth was reflected in BANK OF AFRICA’s
          operational performance, with consolidated net banking income up 1% at MAD 14 billion.</p>
        <p>
          BANK OF AFRICA’s reputation as a pioneer in digital banking, a catalyst for financial and social inclusion,
          and a banking group which is resolutely turned towards the future, was further enhanced in 2020 with the
          introduction of new scalable remote banking services. Our personal, professional and corporate banking
          customers, both in Morocco and in African countries, benefited from having a variety of channels available to
          them to be able to carry out their day-to-day banking transactions. An extensive range of straightforward,
          flexible and innovative solutions is now available, in a context in which remote banking services have become
          vital.
        </p>
        <p>
          Longer term, post-COVID, banks will be required to adapt their business model.
        </p>
        <p>
          Whereas the challenges of sustainable development and social responsibility were once a simple aspiration,
          they are now a global priority. Very early on, BANK OF AFRICA made a conscious decision to incorporate such
          considerations within its development strategy and prioritise them, becoming the first African signatory to
          the UNEP FI’s Statement of Commitment by Financial Institutions on the Environment and Sustainable Development
          and adopting the UN’s Principles for Responsible Banking. We are now fully committed to helping our customers
          and our institutional partners meet the future challenges of our African continent by funding growth, social
          inclusion and sustainable economic development.
        </p>
        <p>
          In this regard, the Intelaka Programme launched by His Majesty Mohammed VI promoting entrepreneurship is a
          blueprint for banks when it comes to engaging with entrepreneurs and those youngsters wanting to set up a
          business, by providing not only financial but also non-financial support.
        </p>
        <p>
          2020 was clearly a year in which BANK OF AFRICA delivered a strong performance across a wide range of
          businesses, demonstrating its solid fundamentals, a constantly improving environmental footprint and a
          positive social impact with regard to its stakeholders.
        </p>
        <p>
          Our goal, which drives the daily actions of BANK OF AFRICA’s entire staff, remains unchanged, which is to
          enhance the African continent’s reputation and ensure that it emerges as a leader in sustainable development
          and positive impact finance.
        </p>
      </div>
      <img src="/assets/images/backgrounds/image-africa-many.png" alt="Image d'Afrique">
    </div>
  </div>
</template>

<script setup>
import HeroSection from '@/components/ui/HeroSection.vue'
import { useLanguage } from '@/composables/useLanguage'

const { currentLanguage } = useLanguage()
</script>

<style lang="scss" scoped>
.content-section {
  max-width: 1700px;
  display: flex;
  align-items: start;
  margin: 5rem auto;
  font-size: 2rem;
  gap: 3rem;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }

  .page-subtitle {
    font-size: 1rem;
  }
}
</style>
