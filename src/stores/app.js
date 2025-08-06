// Exemple de store avec Pinia (à installer si nécessaire : npm install pinia)
// import { defineStore } from 'pinia'

// export const useAppStore = defineStore('app', {
//   state: () => ({
//     user: null,
//     theme: 'light',
//     notifications: []
//   }),

//   getters: {
//     isAuthenticated: (state) => !!state.user,
//     unreadNotifications: (state) => state.notifications.filter(n => !n.read)
//   },

//   actions: {
//     setUser(user) {
//       this.user = user
//     },

//     toggleTheme() {
//       this.theme = this.theme === 'light' ? 'dark' : 'light'
//     },

//     addNotification(notification) {
//       this.notifications.push({
//         id: Date.now(),
//         read: false,
//         timestamp: new Date(),
//         ...notification
//       })
//     },

//     markNotificationAsRead(id) {
//       const notification = this.notifications.find(n => n.id === id)
//       if (notification) {
//         notification.read = true
//       }
//     }
//   }
// })

// Example d'utilisation simple avec Composition API
export const useAppState = () => {
  // État global simple sans Pinia
  return {
    // État réactif global de base
  }
}
