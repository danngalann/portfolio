import React from "react";
import { useTranslation } from "react-i18next";

import Project from "./Project";

export default function Projects() {
  const { t, i18n } = useTranslation();  

  // Projects
  const projects = [
    {
      id: 1,
      title: t("projects.leadManager.title"),
      text: t("projects.leadManager.text"),
      demo: "http://djangoreactleadmanager.pythonanywhere.com",
      source: "https://github.com/danngalann/react-django-leads",
      alternated: false
    },
    {
      id: 2,
      title: "Project 2",
      text:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et corporis unde, quidem minima accusantium rem odit provident eaque! Aut, quo. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et corporis unde, quidem minima accusantium rem odit provident eaque! Aut, quo. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et corporis unde, quidem minima accusantium rem odit provident eaque! Aut, quo. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et corporis unde, quidem minima accusantium rem odit provident eaque! Aut, quo.",
      demo: "#",
      source: "#",
      alternated: true
    },
    {
      id: 3,
      title: "Project 3",
      text:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et corporis unde, quidem minima accusantium rem odit provident eaque! Aut, quo. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et corporis unde, quidem minima accusantium rem odit provident eaque! Aut, quo. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et corporis unde, quidem minima accusantium rem odit provident eaque! Aut, quo. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et corporis unde, quidem minima accusantium rem odit provident eaque! Aut, quo.",
      demo: "#",
      source: null,
      alternated: false
    }
  ];

  return (
    <div id="projects" className="container">
      <h2 style={{ marginBottom: "4rem" }}>{t("projects.header")}</h2>
      {projects.map(project => {
        return <Project key={project.id} project={project} />;
      })}
    </div>
  );
}
