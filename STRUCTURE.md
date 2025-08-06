# Structure du Projet Vue.js

Ce projet Vue.js suit une architecture modulaire et scalable avec les meilleures pratiques.

## 📁 Structure des Dossiers

```
src/
├── assets/              # Ressources statiques (images, icônes, etc.)
├── components/          # Composants Vue réutilisables
│   ├── ui/             # Composants d'interface utilisateur
│   └── layout/         # Composants de mise en page
├── composables/        # Fonctions réutilisables (Composition API)
├── layouts/            # Layouts de page (DefaultLayout, AuthLayout, etc.)
├── locales/            # Fichiers de traduction (i18n)
├── pages/              # Pages/Vues principales de l'application
├── router/             # Configuration des routes
├── services/           # Services API et logique métier
├── stores/             # Gestion d'état (Pinia/Vuex)
├── styles/             # Fichiers de styles globaux
└── utils/              # Fonctions utilitaires
```

## 🏗️ Composants de Layout

### DefaultLayout
- Layout principal avec header, main content, et footer
- Utilisé pour les pages publiques standards

### AuthLayout
- Layout pour les pages d'authentification
- Design centré avec carte de connexion

## 📄 Pages

- **HomePage** : Page d'accueil avec hero section et fonctionnalités
- **AboutPage** : Page à propos avec sections d'information
- **ContactPage** : Page de contact avec formulaire
- **NotFoundPage** : Page 404 personnalisée

## 🔧 Services et Utilitaires

### Services
- **api.js** : Service pour les appels API avec configuration de base

### Utilitaires
- **validation.js** : Fonctions de validation de formulaires
- **formatters.js** : Fonctions de formatage (dates, nombres, texte)

## 🌍 Internationalisation

- Support français et anglais
- Fichiers de traduction dans `src/locales/`
- Composable `useLanguage` pour gérer les langues

## 🎨 Composants UI

- **LanguageSelector** : Sélecteur de langue réutilisable
- **Header** : Navigation principale avec menu responsive
- **Footer** : Pied de page avec liens et informations

## 🚦 Routing

- Routes organisées par layout
- Navigation guards pour les meta-informations
- Gestion du scroll automatique

## ⚡ Fonctionnalités Intégrées

- ✅ Vue Router 4
- ✅ Vue I18n (internationalisation)
- ✅ AOS (animations on scroll)
- ✅ Responsive design
- ✅ Mode sombre/clair
- ✅ SEO-friendly (meta tags)
- ✅ Validation de formulaires
- ✅ Service API centralisé

## 🚀 Démarrage

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Construire pour la production
npm run build
```

## 📦 Extensions Recommandées

Pour une expérience de développement optimale :

- Pinia (gestion d'état) : `npm install pinia`
- VueUse (utilitaires Composition API) : `npm install @vueuse/core`
- Vee-Validate (validation avancée) : `npm install vee-validate`
- Tailwind CSS (framework CSS) : Configuration selon la documentation

## 🎯 Bonnes Pratiques

1. **Composants** : Un composant = un fichier, nommage PascalCase
2. **Composables** : Préfixe `use`, logique réutilisable
3. **Pages** : Suffixe `Page`, dans le dossier `pages/`
4. **Services** : Logique métier séparée des composants
5. **Types** : Utiliser TypeScript pour les projets plus importants
6. **Tests** : Ajouter Vitest pour les tests unitaires
