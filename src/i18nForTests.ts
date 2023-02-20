import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import translations from '../public/locals/en/translation.json'

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',

  ns: ['translationsNS'],
  defaultNS: 'translationsNS',

  resources: {
    en: {
      translationsNS: translations
    }
  }
})

export default i18n
