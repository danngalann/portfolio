import React, { useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useIntersection } from "react-use";

import Project from "./Project";

export default function Projects({ setNavActive }) {
  const { t, i18n } = useTranslation();

  const projectSection = useRef(null);

  const intersection = useIntersection(projectSection, {
    root: null,
    rootMargin: "0px",
    threshold: 0.2
  });

  useEffect(() => {
    setNavActive(intersection && intersection.isIntersecting);
  });

  return (
    <div id="projects" className="container" ref={projectSection}>
      <h2>{t("projects.header")}</h2>
      <Project />
    </div>
  );
}
