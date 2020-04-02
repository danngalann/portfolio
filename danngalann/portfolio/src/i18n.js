import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      nav: {
        link1: "About",
        link2: "Projects",
        link3: "Contact",
        lang: "Languages"
      },
      hero: {
        title: "Hello World",
        content: "Web developing with React and Python"
      },
      projects: {
        header: "Projects",
        content: {
          source: "Source",
          nosource: "Closed source"
        },
        leadManager : {
          title: 'Lead Manager with Django and React',
          text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et corporis unde, quidem minima accusantium rem odit provident eaque! Aut, quo. Lorem, ipsum dolor sit amet consectetur adipisicing elit. '
        }
      },
      contact: {
        header: "Get in touch",
        name: "Name",
        message: "Message",
        send: "Send"
      }
    }
  },
  es: {
    translation: {
      nav: {
        link1: "Sobre mi",
        link2: "Proyectos",
        link3: "Contacto",
        lang: "Idiomas"
      },
      hero: {
        title: "Hola Mundo",
        content: "Desarrollando webs con React y Python"
      },
      projects: {
        header: "Proyectos",
        content: {
          source: "Fuente",
          nosource: "Fuente cerrada"
        },
        leadManager : {
          title: 'Gestor de contactos con Django y React',
          text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et corporis unde, quidem minima accusantium rem odit provident eaque! Aut, quo. Lorem, ipsum dolor sit amet consectetur adipisicing elit. '
        }
      },
      contact: {
        header: "Contacto",
        name: "Nombre",
        message: "Mensaje",
        send: "Enviar"
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
