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
        leadManager: {
          title: "Lead Manager with Django and React",
          text:
            "Lead manager app made with Django and React, following a tutorial by Traversy Media. This was my first project implementing React with a Django backend (this portfolio being the second). I learned a great deal about Redux, Django APIs, and user authentication both in the frontend and the backend."
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
        leadManager: {
          title: "Gestor de contactos con Django y React",
          text:
            "Gestor de contactos hecho con Django y React siguiendo un tutorial de Traversy Media. Este fue mi primer proyecto implementando React con un backend de Django (siendo este portfolio el segundo). Aprendí mucho sobre React Redux, APIs en Django y autenticación de usuarios tanto en el frontend como en el backend."
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
