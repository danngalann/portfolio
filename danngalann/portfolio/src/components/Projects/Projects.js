import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

import Project from "./Project";
import ProjectCard from "./ProjectCard";
import AIProjects from "./AIProjects";

import bigProjects from "../../content/bigProjects";
import smallProjects from "../../content/smallProjects";

export default function Projects() {
  const { t } = useTranslation();

  // Projects
  const projects = bigProjects();
  const sprojects = smallProjects();

  useEffect(() => {
    $(".carousel").carousel({ padding: 20 });
  }, []);

  return (
    <section id="projects" className="container">
      <div id="bigprojects">
        <h1 id="projects-header">{t("projects.header")}</h1>
        {/* <div className="project-section-header">
          {t("projects.subheaders.big")}
        </div> */}
        {projects.map((project) => {
          return <Project key={project.id} project={project} />;
        })}
      </div>

      <div id="smallprojects">
        <div className="project-section-header">
          {t("projects.subheaders.small")}
        </div>
        <div className="carousel">
          {sprojects.map((project) => {
            return (
              <div className="carousel-item" key={project.id}>
                <ProjectCard project={project} />
              </div>
            );
          })}
        </div>
      </div>

      <AIProjects projects={sprojects} />
    </section>
  );
}
