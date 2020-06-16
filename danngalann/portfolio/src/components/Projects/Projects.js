import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Project from "./Project";
import ProjectCard from "./ProjectCard";
import AIProjects from "./AIProjects";

import bigProjects from "../../content/bigProjects";
import smallProjects from "../../content/smallProjects";
import aiProjects from "../../content/aiProjects";

export default function Projects() {
  const { t } = useTranslation();
  gsap.registerPlugin(ScrollTrigger);

  // Projects
  const projects = bigProjects();
  const sprojects = smallProjects();
  const aicvProjects = aiProjects();

  useEffect(() => {
    $(".carousel").carousel({ padding: 20 });
    gsap.from(".project-container", {
      scrollTrigger: ".project-container",
      y: 200,
      opacity: 0,
      stagger: 0.15,
      duration: .4
    })
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

      <AIProjects projects={aicvProjects} />
    </section>
  );
}
