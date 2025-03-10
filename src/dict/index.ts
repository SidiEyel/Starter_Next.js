import generalEn from './en/general.json';
import generalFr from './fr/general.json';
import generalAr from './ar/general.json';

export const fallbackLng = 'en';
export const languages = [fallbackLng, 'en', 'fr', 'ar'];
export const defaultNS = 'translation';
export const cookieName = 'i18next';

// the translations
const resources = {
  en: {
    translation: {
      ...generalEn,
    },
  },
  fr: {
    translation: {
      ...generalFr,
    },
  },
  ar: {
    translation: {
      ...generalAr,
    },
  },
};

export default resources;
