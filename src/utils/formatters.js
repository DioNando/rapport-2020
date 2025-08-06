// Utilitaires pour le formatage

export const formatters = {
  // Formatage des dates
  date: (date, locale = 'fr-FR', options = {}) => {
    const defaultOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }
    return new Date(date).toLocaleDateString(locale, { ...defaultOptions, ...options })
  },

  dateTime: (date, locale = 'fr-FR') => {
    return new Date(date).toLocaleString(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  },

  // Formatage des nombres
  number: (num, locale = 'fr-FR', options = {}) => {
    return new Intl.NumberFormat(locale, options).format(num)
  },

  currency: (amount, currency = 'EUR', locale = 'fr-FR') => {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency
    }).format(amount)
  },

  percentage: (value, locale = 'fr-FR', decimals = 1) => {
    return new Intl.NumberFormat(locale, {
      style: 'percent',
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    }).format(value / 100)
  },

  // Formatage du texte
  capitalize: (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
  },

  titleCase: (str) => {
    return str.replace(/\w\S*/g, (txt) => 
      txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    )
  },

  truncate: (str, length = 100, suffix = '...') => {
    if (str.length <= length) return str
    return str.substring(0, length).trim() + suffix
  },

  // Formatage des tailles de fichier
  fileSize: (bytes, decimals = 2) => {
    if (bytes === 0) return '0 Bytes'
    
    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
    
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]
  },

  // Formatage des numéros de téléphone
  phone: (phoneNumber) => {
    const cleaned = phoneNumber.replace(/\D/g, '')
    const match = cleaned.match(/^(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})$/)
    
    if (match) {
      return `${match[1]} ${match[2]} ${match[3]} ${match[4]} ${match[5]}`
    }
    
    return phoneNumber
  },

  // Formatage des durées
  duration: (seconds) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const remainingSeconds = seconds % 60
    
    if (hours > 0) {
      return `${hours}h ${minutes}m ${remainingSeconds}s`
    } else if (minutes > 0) {
      return `${minutes}m ${remainingSeconds}s`
    } else {
      return `${remainingSeconds}s`
    }
  }
}

export default formatters
