<template>
  <footer class="footer" data-aos="fade-up">
    <div class="footer-content">
      <div class="footer-section">
        <h3>{{ $t('navigation.about') }}</h3>
        <p>{{ $t('footer.description', 'Une application Vue.js moderne avec les meilleures pratiques.') }}</p>
      </div>
      
      <div class="footer-section">
        <h3>{{ $t('footer.quickLinks', 'Liens rapides') }}</h3>
        <ul class="footer-links">
          <li>
            <router-link to="/">{{ $t('navigation.home') }}</router-link>
          </li>
          <li>
            <router-link to="/about">{{ $t('navigation.about') }}</router-link>
          </li>
          <li>
            <router-link to="/contact">{{ $t('navigation.contact') }}</router-link>
          </li>
        </ul>
      </div>
      
      <div class="footer-section">
        <h3>{{ $t('footer.contact', 'Contact') }}</h3>
        <div class="contact-info">
          <p>📧 contact@example.com</p>
          <p>📱 +33 1 23 45 67 89</p>
        </div>
      </div>
    </div>
    
    <div class="footer-bottom">
      <p>&copy; {{ currentYear }} Vue App. {{ $t('footer.allRightsReserved', 'Tous droits réservés.') }}</p>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.footer {
  background: #1a1a1a;
  color: #fff;
  padding: 3rem 0 1rem;
  margin-top: 4rem;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.footer-section h3 {
  color: #646cff;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.footer-section p {
  line-height: 1.6;
  color: #ccc;
}

.footer-links {
  list-style: none;
  padding: 0;
}

.footer-links li {
  margin-bottom: 0.5rem;
}

.footer-links a {
  color: #ccc;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #646cff;
}

.contact-info p {
  margin: 0.5rem 0;
  color: #ccc;
}

.footer-bottom {
  border-top: 1px solid #333;
  margin-top: 2rem;
  padding: 1rem 2rem 0;
  text-align: center;
  color: #999;
}

@media (max-width: 768px) {
  .footer-content {
    padding: 0 1rem;
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .footer-bottom {
    padding: 1rem 1rem 0;
  }
}
</style>
