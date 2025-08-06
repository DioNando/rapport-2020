import { createRouter, createWebHistory } from 'vue-router'

// Layouts
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'

// Pages
import HomePage from '@/pages/HomePage.vue'
import AboutPage from '@/pages/AboutPage.vue'
import ContactPage from '@/pages/ContactPage.vue'
import NotFoundPage from '@/pages/NotFoundPage.vue'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: HomePage,
        meta: {
          title: 'Accueil',
          description: 'Page d\'accueil de notre application Vue.js'
        }
      },
      {
        path: '/about',
        name: 'About',
        component: AboutPage,
        meta: {
          title: 'À propos',
          description: 'En savoir plus sur notre projet'
        }
      },
      {
        path: '/contact',
        name: 'Contact',
        component: ContactPage,
        meta: {
          title: 'Contact',
          description: 'Contactez-nous pour toute question'
        }
      }
    ]
  },
  {
    path: '/auth',
    component: AuthLayout,
    children: [
      // Routes d'authentification futures
      // {
      //   path: 'login',
      //   name: 'Login',
      //   component: () => import('@/pages/auth/LoginPage.vue')
      // }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundPage,
    meta: {
      title: 'Page non trouvée',
      layout: 'minimal'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

// Navigation guards
router.beforeEach((to, from, next) => {
  // Mettre à jour le titre de la page
  if (to.meta?.title) {
    document.title = `${to.meta.title} - Vue App`
  } else {
    document.title = 'Vue App'
  }
  
  // Mettre à jour la meta description
  if (to.meta?.description) {
    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.name = 'description'
      document.getElementsByTagName('head')[0].appendChild(metaDescription)
    }
    metaDescription.content = to.meta.description
  }
  
  next()
})

export default router
