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
        lang: "Languages",
      },
      hero: {
        title: "Hello World",
        content:
          "React web developer with knowledge of Django, SASS, Wordpress, and other tecnologies.",
      },
      projects: {
        header: "Projects",
        subheaders: {
          big: "React and Django",
          small: "Other web Projects",
          ai: "Machine Learning and Computer Vision"
        },
        content: {
          source: "Source",
          nosource: "Closed source",
        },
        leadManager: {
          title: "Lead Manager with Django and React",
          text:
            "Lead manager app made with Django and React, following a tutorial by Traversy Media. This was my first project implementing React with a Django backend (this portfolio being the second). I learned a great deal about Redux, Django APIs, and user authentication both in the frontend and the backend.",
        },
        portfolio: {
          text:
            "My personal portfolio and my second project implementing React in a Django backend. Here I learned to connect Gmail's SMTP server with Django to send mails through the React frontend. I also got some more practice using GIT in a real project, and I learned how to keep secret credentials in a public Github repository. It's also the first time I've made a multi-language website.",
        },
        notes: {
          title: "React Notes",
          text:
            "Single page notes app made with React. Here I was trying to learn how to use the browser's local storage to persist the user's notes. This way every user on the Internet can have a unique set of notes without having to login. This was also the first project were I used React Transition Group to animate each note as it appears or disapears.",
        },
      },
      about: {
        title: "About me",
        text:
          "I'm a React web developer with a passion for machine learning and computer vision. I started my journey as a web developer two years ago at a local school, and I've learning ever since, both through my teachers and online courses. I focus mainly on frontend development (though I've made a couple fullstack projects), but my true passion is machine learning and data analysis. My dream is to mix the best of both worlds; implementing complex machine learning models into user-friendly web apps, making data analysis more accesible to everyone.",
      },
      contact: {
        header: "Get in touch",
        name: "Name",
        message: "Message",
        send: "Send",
      },
      footer: {
        rights: "All rights reserved.",
      },
    },
  },
  es: {
    translation: {
      nav: {
        link1: "Sobre mi",
        link2: "Proyectos",
        link3: "Contacto",
        lang: "Idiomas",
      },
      hero: {
        title: "Hola Mundo",
        content:
          "Desarrollador web React con conocimientos de Django, SASS, Wordpress y otras tecnologías",
      },
      projects: {
        header: "Proyectos",
        subheaders: {
          big: "React y Django",
          small: "Otros proyectos web",
          ai: "Aprendizaje automático y Visión Computerizada"
        },
        content: {
          source: "Fuente",
          nosource: "Fuente cerrada",
        },
        leadManager: {
          title: "Gestor de contactos con Django y React",
          text:
            "Gestor de contactos hecho con Django y React siguiendo un tutorial de Traversy Media. Este fue mi primer proyecto implementando React con un backend de Django (siendo este portfolio el segundo). Aprendí mucho sobre React Redux, APIs en Django y autenticación de usuarios tanto en el frontend como en el backend.",
        },
        portfolio: {
          text:
            "Mi portfolio personal y mi segundo proyecto implementando React en un backed con Django. Aquí he aprendido a conectar el SMTP de Gmail con Django para enviar mails desde el frontend React. También he ganado más practica usando GIT en un proyecto real, además de aprender a guardar credenciales secretas en un repositorio público. Es también la primera vez que he hecho una web multilenguaje.",
        },
        notes: {
          title: "Notas React",
          text:
            "Aplicación de notas hecha con React. Aquí estaba intentando aprender cómo usar el almacenamiento local del navegador para guardar las notas del usuario. De esta forma, cada usuario en internet puede tener un conjunto único de notas sin tener que registrarse. También fue el primero proyecto donde utilicé React Transition Group para animar las notas según aparecen o desaparecen.",
        },
      },
      about: {
        title: "Sobre mi",
        text:
          "Soy un desarrollador web React con una gran pasión por la inteligencia artificial y la visión computerizada. Mi viaje en el desarrollo web empezó hace dos años, cuando inicié un grado superior de DAW. He seguido aprendiento desde entonces, a través tanto de mis profesores como de recursos online. Me centro mayoritariamente en frontend (aunque he hecho un par de proyectos fullstack), pero mi pasión está en el aprendizaje automático y el análisis de datos. Mi sueño es juntar lo mejor de ambos mundos; implentar complejos modelos de inteligencia artificial en aplicaciones web sencillas para el usuario, haciendo el análisis de datos más accesible para todos.",
      },
      contact: {
        header: "Contacto",
        name: "Nombre",
        message: "Mensaje",
        send: "Enviar",
      },
      footer: {
        rights: "Todos los derechos reservados.",
      },
    },
  },
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
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
