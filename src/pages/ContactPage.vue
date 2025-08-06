<template>
  <div class="contact-page">
    <div class="contact-header" data-aos="fade-up">
      <h1>{{ $t('navigation.contact') }}</h1>
      <p class="contact-intro">{{ $t('contact.intro', 'Nous serions ravis d\'avoir de vos nouvelles') }}</p>
    </div>
    
    <div class="contact-content">
      <div class="contact-info" data-aos="fade-right">
        <h2>{{ $t('contact.getInTouch', 'Prenez Contact') }}</h2>
        
        <div class="contact-item">
          <div class="contact-icon">📧</div>
          <div class="contact-details">
            <h3>{{ $t('contact.email', 'Email') }}</h3>
            <p>contact@example.com</p>
          </div>
        </div>
        
        <div class="contact-item">
          <div class="contact-icon">📱</div>
          <div class="contact-details">
            <h3>{{ $t('contact.phone', 'Téléphone') }}</h3>
            <p>+33 1 23 45 67 89</p>
          </div>
        </div>
        
        <div class="contact-item">
          <div class="contact-icon">📍</div>
          <div class="contact-details">
            <h3>{{ $t('contact.address', 'Adresse') }}</h3>
            <p>123 Rue Example<br>75001 Paris, France</p>
          </div>
        </div>
      </div>
      
      <div class="contact-form-container" data-aos="fade-left">
        <form @submit.prevent="handleSubmit" class="contact-form">
          <h2>{{ $t('contact.sendMessage', 'Envoyez-nous un message') }}</h2>
          
          <div class="form-group">
            <label for="name">{{ $t('contact.form.name', 'Nom') }} *</label>
            <input 
              type="text" 
              id="name" 
              v-model="form.name" 
              :placeholder="$t('contact.form.namePlaceholder', 'Votre nom')"
              required 
            />
          </div>
          
          <div class="form-group">
            <label for="email">{{ $t('contact.form.email', 'Email') }} *</label>
            <input 
              type="email" 
              id="email" 
              v-model="form.email" 
              :placeholder="$t('contact.form.emailPlaceholder', 'votre@email.com')"
              required 
            />
          </div>
          
          <div class="form-group">
            <label for="subject">{{ $t('contact.form.subject', 'Sujet') }}</label>
            <input 
              type="text" 
              id="subject" 
              v-model="form.subject" 
              :placeholder="$t('contact.form.subjectPlaceholder', 'Sujet de votre message')"
            />
          </div>
          
          <div class="form-group">
            <label for="message">{{ $t('contact.form.message', 'Message') }} *</label>
            <textarea 
              id="message" 
              v-model="form.message" 
              :placeholder="$t('contact.form.messagePlaceholder', 'Votre message...')"
              rows="5" 
              required
            ></textarea>
          </div>
          
          <button type="submit" class="submit-btn" :disabled="isSubmitting">
            {{ isSubmitting ? $t('contact.form.sending', 'Envoi...') : $t('contact.form.send', 'Envoyer') }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const isSubmitting = ref(false)

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const handleSubmit = async () => {
  isSubmitting.value = true
  
  // Simulation d'envoi
  await new Promise(resolve => setTimeout(resolve, 2000))
  
  console.log('Form submitted:', form)
  alert('Message envoyé avec succès !')
  
  // Reset form
  Object.assign(form, {
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  isSubmitting.value = false
}
</script>

<style scoped>
.contact-page {
  max-width: 1200px;
  margin: 0 auto;
}

.contact-header {
  text-align: center;
  margin-bottom: 4rem;
}

.contact-header h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #646cff, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.contact-intro {
  font-size: 1.2rem;
  color: #666;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

.contact-info h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #333;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 2rem;
}

.contact-icon {
  font-size: 2rem;
  margin-right: 1rem;
  margin-top: 0.5rem;
}

.contact-details h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #333;
}

.contact-details p {
  color: #666;
  line-height: 1.5;
}

.contact-form-container {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.contact-form h2 {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #333;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #333;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  background: rgba(255, 255, 255, 0.9);
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #646cff;
}

.submit-btn {
  width: 100%;
  padding: 1rem;
  background: #646cff;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-btn:hover:not(:disabled) {
  background: #535bf2;
  transform: translateY(-2px);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

@media (max-width: 768px) {
  .contact-header h1 {
    font-size: 2rem;
  }
  
  .contact-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .contact-form-container {
    padding: 1.5rem;
  }
}

@media (prefers-color-scheme: dark) {
  .contact-intro,
  .contact-details p {
    color: #ccc;
  }
  
  .contact-info h2,
  .contact-form h2,
  .contact-details h3,
  .form-group label {
    color: #fff;
  }
  
  .contact-form-container {
    background: rgba(36, 36, 36, 0.8);
    border-color: rgba(255, 255, 255, 0.1);
  }
  
  .form-group input,
  .form-group textarea {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.2);
    color: #fff;
  }
  
  .form-group input::placeholder,
  .form-group textarea::placeholder {
    color: #ccc;
  }
}
</style>
