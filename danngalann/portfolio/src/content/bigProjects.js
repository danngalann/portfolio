import { useTranslation } from "react-i18next";


export default function bigProjects() {

  const { t } = useTranslation();

  return [
    {
      id: 1,
      title: t("projects.leadManager.title"),
      text: t("projects.leadManager.text"),
      demo: "http://djangoreactleadmanager.pythonanywhere.com",
      source: "https://github.com/danngalann/react-django-leads",
      imgsrc: "/static/frontend/media/projects/leadmanager.jpg",
      alternated: false,
    },
    {
      id: 2,
      title: "Portfolio",
      text: t("projects.portfolio.text"),
      demo: "#!",
      source: null,
      imgsrc: "https://picsum.photos/300/200",
      alternated: true,
    },
    {
      id: 3,
      title: t("projects.notes.title"),
      text: t("projects.notes.text"),
      demo: "https://react-notes.neocities.org",
      source: "https://github.com/danngalann/react-notes",
      imgsrc: "/static/frontend/media/projects/notes.jpg",
      alternated: false,
    },
  ];
}
