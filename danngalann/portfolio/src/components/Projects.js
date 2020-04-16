import React from "react";
import { useTranslation } from "react-i18next";

import Project from "./Project";
import ProjectCard from "./ProjectCard";

import bigProjects from "../content/bigProjects";

export default function Projects() {
  const { t } = useTranslation();

  // Projects
  const projects = bigProjects();

  return (
    <section id="projects" className="container">
      <h2 style={{ marginBottom: "4rem" }}>{t("projects.header")}</h2>
      <div id="bigprojects">
        {projects.map((project) => {
          return <Project key={project.id} project={project} />;
        })}
      </div>
      <div id="smallprojects">
        <ProjectCard project={{title:"Project 1", img:"https://picsum.photos/300/200", demo:"#!", source:null}} />
      </div>
    </section>
  );
}
