import i18n from 'i18next'
import LngDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

const options = {
  order: ['navigator'],
  lookupQuerystring: 'lng',
  lookupLocalStorage: 'i18nextLng'
}

i18n
  .use(Backend)
  .use(LngDetector)
  .use(initReactI18next)
  .init({
    detection: options,
    fallbackLng: 'en',
    debug: false,
    supportedLngs: ['en'],
    saveMissing: true,
    keySeparator: '.' 
  })

export default i18n
