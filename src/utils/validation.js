// Utilitaires pour la validation de formulaires

export const validators = {
  required: (value) => {
    if (!value || value.toString().trim() === '') {
      return 'Ce champ est requis'
    }
    return true
  },

  email: (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(value)) {
      return 'Veuillez entrer une adresse email valide'
    }
    return true
  },

  minLength: (min) => (value) => {
    if (value && value.length < min) {
      return `Ce champ doit contenir au moins ${min} caractères`
    }
    return true
  },

  maxLength: (max) => (value) => {
    if (value && value.length > max) {
      return `Ce champ ne peut pas dépasser ${max} caractères`
    }
    return true
  },

  phone: (value) => {
    const phoneRegex = /^(\+33|0)[1-9](\d{8})$/
    if (value && !phoneRegex.test(value.replace(/\s/g, ''))) {
      return 'Veuillez entrer un numéro de téléphone valide'
    }
    return true
  },

  url: (value) => {
    try {
      new URL(value)
      return true
    } catch {
      return 'Veuillez entrer une URL valide'
    }
  }
}

// Fonction pour valider un objet avec des règles
export const validateForm = (data, rules) => {
  const errors = {}
  
  for (const [field, fieldRules] of Object.entries(rules)) {
    const value = data[field]
    
    for (const rule of fieldRules) {
      const result = rule(value)
      if (result !== true) {
        errors[field] = result
        break // Arrêter à la première erreur pour ce champ
      }
    }
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  }
}

// Exemple d'utilisation :
// const formRules = {
//   email: [validators.required, validators.email],
//   name: [validators.required, validators.minLength(2)],
//   phone: [validators.phone]
// }
// const { isValid, errors } = validateForm(formData, formRules)
