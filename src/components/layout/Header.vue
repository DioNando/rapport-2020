<template>
    <header class="header" :class="{ 'scrolled': isScrolled }" data-aos="fade-down">
        <nav class="navbar">
            <div class="nav-brand">
                <router-link to="/" class="brand-link">
                    <img src="/assets/images/logos/Logo_BOA_Plan_de_travail_1_cop.png" alt="Logo BOA"
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
import { ref, onMounted, onUnmounted } from 'vue'
import LanguageSelector from '@/components/ui/LanguageSelector.vue'

const isMenuOpen = ref(false)
const isScrolled = ref(false)

const navItems = [
    // { path: '/', label: 'navigation.home' },
    { path: '/mot-president', label: 'navigation.motPresident' },
    { path: '/creation-valeur', label: 'navigation.creationValeur' },
    { path: '/ambitions-orientations', label: 'navigation.ambitionsOrientations' },
    { path: '/performances', label: 'navigation.performances' },
    { path: '/perspectives', label: 'navigation.perspectives' },
    { path: '/ra2020pdf', label: 'navigation.ra2020pdf' }
]

const handleScroll = () => {
    isScrolled.value = window.scrollY > 50
}

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
    isMenuOpen.value = false
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="scss" scoped>
.header {
    background: transparent;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
    transition: background-color 0.3s ease, backdrop-filter 0.3s ease;

    &.scrolled {
        background: black;
        // background: rgba(0, 0, 0, 0.95);
        // backdrop-filter: blur(10px);
    }
}

.navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 7.5rem;
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
    font-weight: 600;
    transition: color 0.3s ease;
    // padding: 0.5rem 1rem;
    border-radius: 6px;
    text-transform: uppercase;
    font-size: .95em;
    text-align: center;

    &:hover,
    &.router-link-active {
        color: white;
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

// @media (max-width: 1200px) {
//     .navbar {
//         padding: 1rem;
//     }

//     .nav-menu {
//         position: fixed;
//         top: 100%;
//         left: 0;
//         width: 100%;
//         background: rgba(255, 255, 255, 0.98);
//         backdrop-filter: blur(10px);
//         flex-direction: column;
//         padding: 2rem;
//         transform: translateY(-100vh);
//         transition: transform 0.3s ease;
//     }

//     .menu-toggle {
//         display: flex;
//     }

//     .logo-image {
//         width: 50%;
//     }
// }

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
