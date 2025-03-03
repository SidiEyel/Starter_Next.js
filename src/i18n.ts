import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import resources from './dict';

const language =
  typeof window !== 'undefined' ? localStorage.getItem('I18N_LANGUAGE') : 'en';
if (!language) {
  if (typeof window !== 'undefined')
    localStorage.setItem('I18N_LANGUAGE', 'en');
}

i18n
  .use(detector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng:
      typeof window !== 'undefined'
        ? localStorage.getItem('I18N_LANGUAGE') || 'en'
        : 'en',

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
