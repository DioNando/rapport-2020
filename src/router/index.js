import { createRouter, createWebHistory } from 'vue-router'
import { useI18n } from 'vue-i18n'

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
          title: {
            fr: 'Accueil - Rapport Annuel 2020 BOA',
            en: 'Home - Annual Report 2020 BOA'
          },
          description: {
            fr: 'Rapport annuel 2020 - Bank of Africa',
            en: 'Annual Report 2020 - Bank of Africa'
          }
        }
      },
      {
        path: '/mot-president',
        name: 'MotPresident',
        component: MotPresidentPage,
        meta: {
          title: {
            fr: 'Mot du Président - BOA 2020',
            en: 'CEO Message - BOA 2020'
          },
          description: {
            fr: 'Message du Président de la Bank of Africa',
            en: 'Message from the CEO of Bank of Africa'
          }
        }
      },
      {
        path: '/creation-valeur',
        name: 'CreationValeur',
        component: CreationValeurPage,
        meta: {
          title: {
            fr: 'Création de Valeur - BOA 2020',
            en: 'Value Creation - BOA 2020'
          },
          description: {
            fr: 'Nos stratégies de création de valeur durable',
            en: 'Our sustainable value creation strategies'
          }
        }
      },
      {
        path: '/ambitions-orientations',
        name: 'AmbitionsOrientations',
        component: AmbitionsOrientationsPage,
        meta: {
          title: {
            fr: 'Ambitions & Orientations - BOA 2020',
            en: 'Ambitions & Strategic Orientations - BOA 2020'
          },
          description: {
            fr: 'Nos ambitions et orientations stratégiques pour l\'avenir',
            en: 'Our ambitions and strategic orientations for the future'
          }
        }
      },
      {
        path: '/performances',
        name: 'Performances',
        redirect: { name: 'Home', hash: '#performances' },
        meta: {
          title: {
            fr: 'Performances - BOA 2020',
            en: 'Performance - BOA 2020'
          },
          description: {
            fr: 'Nos performances financières et opérationnelles 2020',
            en: 'Our financial and operational performance 2020'
          }
        }
      },
      {
        path: '/perspectives',
        name: 'Perspectives',
        component: PerspectivesPage,
        meta: {
          title: {
            fr: 'Perspectives - BOA 2020',
            en: 'Perspectives - BOA 2020'
          },
          description: {
            fr: 'Nos perspectives d\'avenir et vision stratégique',
            en: 'Our future perspectives and strategic vision'
          }
        }
      },
      {
        path: '/ra2020pdf',
        name: 'Ra2020Pdf',
        component: Ra2020PdfPage,
        meta: {
          title: {
            fr: 'Rapport Annuel 2020 PDF - BOA',
            en: 'Annual Report 2020 PDF - BOA'
          },
          description: {
            fr: 'Téléchargez le rapport annuel 2020 en format PDF',
            en: 'Download the 2020 annual report in PDF format'
          }
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
      title: {
        fr: 'Page non trouvée - BOA',
        en: 'Page not found - BOA'
      },
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
  // Fonction pour obtenir la locale actuelle
  const getCurrentLocale = () => {
    // Récupérer la locale depuis localStorage ou utiliser 'en' par défaut
    return localStorage.getItem('preferred-language') || 'en'
  }
  
  const locale = getCurrentLocale()
  
  // Mettre à jour le titre de la page
  if (to.meta?.title) {
    const title = typeof to.meta.title === 'object' 
      ? to.meta.title[locale] || to.meta.title.fr 
      : to.meta.title
    document.title = title
  } else {
    document.title = locale === 'en' ? 'BOA Annual Report 2020' : 'Rapport Annuel BOA 2020'
  }
  
  // Mettre à jour la meta description
  if (to.meta?.description) {
    const description = typeof to.meta.description === 'object'
      ? to.meta.description[locale] || to.meta.description.fr
      : to.meta.description
      
    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.name = 'description'
      document.getElementsByTagName('head')[0].appendChild(metaDescription)
    }
    metaDescription.content = description
  }
  
  next()
})

export default router
