import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      nav: {
        link1: "About",
        link2: "Projects",
        link3: "Contact"
      },
      hero: {
        title: "Hello World"
      }
    }
  },
  es: {
    translation: {
      nav: {
        link1: "Sobre mi",
        link2: "Proyectos",
        link3: "Contacto"
      },
      hero: {
        title: "Hola Mundo"
      }
    }
  }
};

i18n
  // detect user language
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    fallbackLng: "en",
    debug: true,

    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    }
  });

export default i18n;
