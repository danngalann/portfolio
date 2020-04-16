import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

import Project from "./Project";
import ProjectCard from "./ProjectCard";

import bigProjects from "../content/bigProjects";

export default function Projects() {
  const { t } = useTranslation();

  // Projects
  const projects = bigProjects();

  useEffect(() => {
    $(".carousel").carousel({ padding: 20 });
  }, []);

  return (
    <section id="projects" className="container">
      <h1 id="projects-header">{t("projects.header")}</h1>
      <div className="project-section-header">React and Django</div>
      <div id="bigprojects">
        {projects.map((project) => {
          return <Project key={project.id} project={project} />;
        })}
      </div>
      <div className="project-section-header">Other JS Projects</div>
      <div id="smallprojects">
        <div className="carousel">
          <div className="carousel-item">
            <ProjectCard
              project={{
                title: "Project 1",
                img: "https://picsum.photos/300/200",
                demo: "#!",
                source: null,
              }}
            />
          </div>
          <div className="carousel-item">
            <ProjectCard
              project={{
                title: "Project 1",
                img: "https://picsum.photos/300/200",
                demo: "#!",
                source: null,
              }}
            />
          </div>
          <div className="carousel-item">
            <ProjectCard
              project={{
                title: "Project 1",
                img: "https://picsum.photos/300/200",
                demo: "#!",
                source: null,
              }}
            />
          </div>
          <div className="carousel-item">
            <ProjectCard
              project={{
                title: "Project 1",
                img: "https://picsum.photos/300/200",
                demo: "#!",
                source: null,
              }}
            />
          </div>
          <div className="carousel-item">
            <ProjectCard
              project={{
                title: "Project 1",
                img: "https://picsum.photos/300/200",
                demo: "#!",
                source: null,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
