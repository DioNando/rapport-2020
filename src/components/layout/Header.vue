<template>
    <header class="header" data-aos="fade-down">
        <nav class="navbar">
            <div class="nav-brand">
                <router-link to="/" class="brand-link">
                    <img src="@/assets/images/logos/Logo_BOA_Plan_de_travail_1_cop.png" alt="Logo BOA"
                        class="logo-image" />
                </router-link>
            </div>

            <div class="nav-menu" :class="{ 'is-active': isMenuOpen }">
                <router-link v-for="item in navItems" :key="item.path" :to="item.path" class="nav-link"
                    @click="closeMenu">
                    {{ $t(item.label) }}
                </router-link>
                <LanguageSelector />
            </div>

            <!-- <div class="nav-actions">
                <button class="menu-toggle" @click="toggleMenu" :aria-expanded="isMenuOpen">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div> -->
        </nav>
    </header>
</template>

<script setup>
import { ref } from 'vue'
import LanguageSelector from '@/components/ui/LanguageSelector.vue'

const isMenuOpen = ref(false)

const navItems = [
    // { path: '/', label: 'navigation.home' },
    { path: '/mot-president', label: 'navigation.motPresident' },
    { path: '/creation-valeur', label: 'navigation.creationValeur' },
    { path: '/ambitions-orientations', label: 'navigation.ambitionsOrientations' },
    { path: '/performances', label: 'navigation.performances' },
    { path: '/perspectives', label: 'navigation.perspectives' },
    { path: '/ra2020pdf', label: 'navigation.ra2020pdf' }
]

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
    isMenuOpen.value = false
}
</script>

<style lang="scss" scoped>
.header {
    background: black;
    position: sticky;
    top: 0;
    z-index: 1000;
}

.navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 5rem;
    margin: 0 auto;
}

.nav-brand {
    display: flex;
    align-items: center;
}

.nav-menu {
    display: flex;
    gap: 2rem;
    align-items: center;

    &.is-active {
        transform: translateY(0);
    }
}

.nav-link {
    text-decoration: none;
    color: white;
    // font-weight: 400;
    transition: color 0.3s ease;
    // padding: 0.5rem 1rem;
    border-radius: 6px;
    text-transform: uppercase;
    font-size: .9em;

    &:hover,
    &.router-link-active {
        color: white !important;
    }
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

    span {
        width: 20px;
        height: 2px;
        background: #333;
        margin: 2px 0;
        transition: 0.3s;
    }

    &.is-active {
        span {
            &:nth-child(1) {
                transform: rotate(-45deg) translate(-5px, 6px);
            }

            &:nth-child(2) {
                opacity: 0;
            }

            &:nth-child(3) {
                transform: rotate(45deg) translate(-5px, -6px);
            }
        }
    }
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

    .menu-toggle {
        display: flex;
    }

    .logo-image {
        width: 85%;
    }
}
</style>
