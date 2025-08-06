<template>
  <div class="ra2020-pdf-page">
    <div class="container">
      <div class="page-header" data-aos="fade-up">
        <h1 class="page-title">Rapport Annuel 2020 PDF</h1>
        <p class="page-subtitle">Version PDF du rapport annuel 2020</p>
      </div>
      
      <div class="content-section" data-aos="fade-up" data-aos-delay="200">
        <div class="card">
          <div class="card__header">
            <h2>Téléchargement du Rapport PDF</h2>
          </div>
          <div class="card__content">
            <p>Lien de téléchargement à venir...</p>
            <div class="download-actions">
              <button class="btn btn--primary" disabled>
                📄 Télécharger le PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Logique de la page à venir
</script>

<style lang="scss" scoped>
.ra2020-pdf-page {
  min-height: 100vh;
  padding: 2rem 0;
}

.page-header {
  text-align: center;
  margin-bottom: 3rem;
}

.page-title {
  font-size: 3rem;
  color: #1369b4;
  margin-bottom: 1rem;
  font-weight: 700;
}

.page-subtitle {
  font-size: 1.2rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
}

.content-section {
  margin-bottom: 2rem;
}

.download-actions {
  margin-top: 2rem;
  text-align: center;
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
