<template>
  <header class="header" data-aos="fade-down">
    <nav class="navbar">
      <div class="nav-brand">
        <router-link to="/" class="brand-link">
          <img src="/vite.svg" alt="Logo" class="brand-logo" />
          <span class="brand-text">Vue App</span>
        </router-link>
      </div>
      
      <div class="nav-menu" :class="{ 'is-active': isMenuOpen }">
        <router-link 
          v-for="item in navItems" 
          :key="item.path"
          :to="item.path" 
          class="nav-link"
          @click="closeMenu"
        >
          {{ $t(item.label) }}
        </router-link>
      </div>
      
      <div class="nav-actions">
        <LanguageSelector />
        <button 
          class="menu-toggle"
          @click="toggleMenu"
          :aria-expanded="isMenuOpen"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import LanguageSelector from '@/components/ui/LanguageSelector.vue'

const isMenuOpen = ref(false)

const navItems = [
  { path: '/', label: 'navigation.home' },
  { path: '/about', label: 'navigation.about' },
  { path: '/contact', label: 'navigation.contact' }
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<style scoped>
.header {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.nav-brand {
  display: flex;
  align-items: center;
}

.brand-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
}

.brand-logo {
  width: 40px;
  height: 40px;
  margin-right: 0.5rem;
}

.brand-text {
  font-size: 1.5rem;
  font-weight: bold;
  color: #646cff;
}

.nav-menu {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-link {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: color 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 6px;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: #646cff;
  background: rgba(100, 108, 255, 0.1);
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.menu-toggle span {
  width: 20px;
  height: 2px;
  background: #333;
  margin: 2px 0;
  transition: 0.3s;
}

@media (max-width: 768px) {
  .navbar {
    padding: 1rem;
  }
  
  .nav-menu {
    position: fixed;
    top: 100%;
    left: 0;
    width: 100%;
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(10px);
    flex-direction: column;
    padding: 2rem;
    transform: translateY(-100vh);
    transition: transform 0.3s ease;
  }
  
  .nav-menu.is-active {
    transform: translateY(0);
  }
  
  .menu-toggle {
    display: flex;
  }
  
  .menu-toggle.is-active span:nth-child(1) {
    transform: rotate(-45deg) translate(-5px, 6px);
  }
  
  .menu-toggle.is-active span:nth-child(2) {
    opacity: 0;
  }
  
  .menu-toggle.is-active span:nth-child(3) {
    transform: rotate(45deg) translate(-5px, -6px);
  }
}

@media (prefers-color-scheme: dark) {
  .header {
    background: rgba(36, 36, 36, 0.95);
    border-bottom-color: rgba(255, 255, 255, 0.1);
  }
  
  .nav-link {
    color: #fff;
  }
  
  .menu-toggle span {
    background: #fff;
  }
  
  .nav-menu {
    background: rgba(36, 36, 36, 0.98);
  }
}
</style>
