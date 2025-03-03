// EN
import generalEn from './en/general.json';

// AR
import generalAr from './ar/general.json';

export const fallbackLng = 'en';
export const languages = [fallbackLng, 'en', 'de'];
export const defaultNS = 'translation';
export const cookieName = 'i18next';

// the translations
const resources = {
  en: {
    translation: {
      ...generalEn,
    },
  },
  de: {
    translation: {
      ...generalAr,
    },
  },
};

export default resources;
