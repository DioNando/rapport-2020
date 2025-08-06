import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

export function useLanguage() {
  const { locale, t, availableLocales } = useI18n()

  const currentLanguage = computed(() => locale.value)
  
  const allLanguages = [
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'en', name: 'English', flag: '🇬🇧' }
  ]
  
  const availableLanguages = computed(() => 
    allLanguages.filter(lang => lang.code !== currentLanguage.value)
  )

  const changeLanguage = (langCode) => {
    if (availableLocales.includes(langCode)) {
      locale.value = langCode
      // Optionnel: sauvegarder dans localStorage
      localStorage.setItem('preferred-language', langCode)
    }
  }

  const initLanguage = () => {
    // Récupérer la langue sauvegardée ou utiliser celle du navigateur
    const savedLang = localStorage.getItem('preferred-language')
    const browserLang = navigator.language.split('-')[0]
    
    if (savedLang && availableLocales.includes(savedLang)) {
      locale.value = savedLang
    } else if (availableLocales.includes(browserLang)) {
      locale.value = browserLang
    }
  }

  return {
    currentLanguage,
    availableLanguages,
    changeLanguage,
    initLanguage,
    t
  }
}
