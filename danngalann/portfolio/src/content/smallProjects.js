import { useTranslation } from "react-i18next";

export default function smallProjects() {
  const { t } = useTranslation();

  return [
    {
      id: 1,
      title: "bootstrap-project",
      demo: "http://djangoreactleadmanager.pythonanywhere.com",
      source: "https://danngalann.github.io/bootstrap-project/",
      imgsrc: "/static/frontend/media/projects/bootstrap-project.png",
    },
    {
      id: 2,
      title: "ScrollMagic GSAP animation",
      demo: "https://danngalann.github.io/gsap-scrollmagic/",
      source: "https://github.com/danngalann/gsap-scrollmagic",
      imgsrc: "/static/frontend/media/projects/gsap-scrollmagic.png",
    },
    {
      id: 3,
      title: "Proactive-framework",
      demo: "https://danngalann.github.io/proactive-framework/",
      source: "https://github.com/danngalann/proactive-framework",
      imgsrc: "/static/frontend/media/projects/proactive-framework.png",
    },
    {
      id: 4,
      title: "GSAP Animation",
      demo: "https://danngalann.github.io/gsap-animation/",
      source: "https://github.com/danngalann/gsap-animation",
      imgsrc: "/static/frontend/media/projects/gsap-animation.png",
    },
    {
      id: 5,
      title: "React Material UI multi-step form",
      demo: "https://react-step-form.neocities.org",
      source: "https://github.com/danngalann/react-step-form",
      imgsrc: "/static/frontend/media/projects/react-multistep-form.png",
    },
    {
      id: 6,
      title: "React Recipe App",
      demo: "https://react-recipe-app.neocities.org",
      source: "https://github.com/danngalann/react-recipe-app",
      imgsrc: "/static/frontend/media/projects/react-recipes.png",
    },
    {
      id: 7,
      title: "React GSAP Hero section",
      demo: "https://react-gsap-hero-section.neocities.org",
      source: "https://github.com/danngalann/react-gsap-hero-section",
      imgsrc: "/static/frontend/media/projects/gsap-hero.png",
    },
  ];
}
