import React, { useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useIntersection } from "react-use";

import Project from "./Project";

export default function Projects({ setNavActive }) {
  const { t, i18n } = useTranslation();

  // Intersections
  const projectSection = useRef(null);

  const intersection = useIntersection(projectSection, {
    root: null,
    rootMargin: "0px",
    threshold: 0.2
  });

  // Projects
  const projects = [
    {
      title: "Project 1",
      text:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et corporis unde, quidem minima accusantium rem odit provident eaque! Aut, quo. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et corporis unde, quidem minima accusantium rem odit provident eaque! Aut, quo. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et corporis unde, quidem minima accusantium rem odit provident eaque! Aut, quo. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et corporis unde, quidem minima accusantium rem odit provident eaque! Aut, quo.",
      demo: "#",
      source: "#",
      alternated: false
    },
    {
      title: "Project 2",
      text:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et corporis unde, quidem minima accusantium rem odit provident eaque! Aut, quo. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et corporis unde, quidem minima accusantium rem odit provident eaque! Aut, quo. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et corporis unde, quidem minima accusantium rem odit provident eaque! Aut, quo. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et corporis unde, quidem minima accusantium rem odit provident eaque! Aut, quo.",
      demo: "#",
      source: "#",
      alternated: true
    },
    {
      title: "Project 3",
      text:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et corporis unde, quidem minima accusantium rem odit provident eaque! Aut, quo. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et corporis unde, quidem minima accusantium rem odit provident eaque! Aut, quo. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et corporis unde, quidem minima accusantium rem odit provident eaque! Aut, quo. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et corporis unde, quidem minima accusantium rem odit provident eaque! Aut, quo.",
      demo: "#",
      source: null,
      alternated: false
    }
  ];

  useEffect(() => {
    setNavActive(intersection && intersection.isIntersecting);
  });

  return (
    <div id="projects" className="container" ref={projectSection}>
      <h2 style={{ marginBottom: "4rem" }}>{t("projects.header")}</h2>
      {projects.map(project => {
        return <Project project={project} />;
      })}
    </div>
  );
}