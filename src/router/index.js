import { createRouter, createWebHistory } from 'vue-router'

// Layouts
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'

// Pages
import HomePage from '@/pages/HomePage.vue'
import MotPresidentPage from '@/pages/MotPresidentPage.vue'
import CreationValeurPage from '@/pages/CreationValeurPage.vue'
import AmbitionsOrientationsPage from '@/pages/AmbitionsOrientationsPage.vue'
import PerspectivesPage from '@/pages/PerspectivesPage.vue'
import Ra2020PdfPage from '@/pages/Ra2020PdfPage.vue'
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
          description: 'Rapport annuel 2020 - BOA'
        }
      },
      {
        path: '/mot-president',
        name: 'MotPresident',
        component: MotPresidentPage,
        meta: {
          title: 'Mot du Président',
          description: 'Message du Président de la BOA'
        }
      },
      {
        path: '/creation-valeur',
        name: 'CreationValeur',
        component: CreationValeurPage,
        meta: {
          title: 'Création de Valeur',
          description: 'Nos stratégies de création de valeur'
        }
      },
      {
        path: '/ambitions-orientations',
        name: 'AmbitionsOrientations',
        component: AmbitionsOrientationsPage,
        meta: {
          title: 'Ambitions & Orientations Stratégiques',
          description: 'Nos ambitions et orientations pour l\'avenir'
        }
      },
      {
        path: '/performances',
        name: 'Performances',
        redirect: { name: 'Home', hash: '#performances' },
        meta: {
          title: 'Performances',
          description: 'Nos performances financières et opérationnelles'
        }
      },
      {
        path: '/perspectives',
        name: 'Perspectives',
        component: PerspectivesPage,
        meta: {
          title: 'Perspectives',
          description: 'Nos perspectives d\'avenir'
        }
      },
      {
        path: '/ra2020pdf',
        name: 'Ra2020Pdf',
        component: Ra2020PdfPage,
        meta: {
          title: 'Rapport Annuel 2020 PDF',
          description: 'Version PDF du rapport annuel 2020'
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
