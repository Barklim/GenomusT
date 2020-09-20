import i18n from 'i18next';
// import Backend from 'i18next-http-backend';
// import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import resources from './resources';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          "w": "Welcome to React and react-i18next"
        }
      }
    },
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });

let gLang = localStorage.getItem('genomusLang');
if (gLang === undefined) {
  localStorage.setItem('genomusLang', "en");
}

// initialize i18next with catalog and language to use
i18n.init({
  resources,
  lng: localStorage.getItem('genomusLang')
});

export default i18n;