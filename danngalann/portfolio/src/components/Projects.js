import React from "react";
import { useTranslation } from "react-i18next";

import Project from "./Project";

import bigProjects from '../content/bigProjects'

export default function Projects() {
  const { t } = useTranslation();  

  // Projects
  const projects = bigProjects();

  return (
    <div id="projects" className="container">
      <h2 style={{ marginBottom: "4rem" }}>{t("projects.header")}</h2>
      {projects.map(project => {
        return <Project key={project.id} project={project} />;
      })}
    </div>
  );
}
