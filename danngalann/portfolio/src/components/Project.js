import React, { useRef, useEffect, useState } from "react";
import { useIntersection } from "react-use";
import { useTranslation } from "react-i18next";

export default function Project(props) {
  const { t } = useTranslation();
  const { title, text, demo, source, alternated } = props.project;
  const project = useRef(null);

  const [state, setState] = useState({ onscreen: false });

  // Intersections
  const intersection = useIntersection(project, {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
    once: true
  });

  // Animation
  const show = () => {
    if (!state.onscreen) setState({ onscreen: true });
  };

  if (intersection && intersection.isIntersecting) show(); // If intersecting with the screen, update the state so the .onscreen class is added to the project container

  // Returns a button depending
  const getSourceBtn = source => {
    if (!source) {
      return (
        <button className="btn-small waves-effect waves-light disabled">
          <i className="fas fa-eye-slash"></i>
          {t("projects.content.nosource")}
        </button>
      );
    } else {
      return (
        <a href={source} target="_blank">
          <button className="btn-small waves-effect waves-light blue">
            <i className="fab fa-github"></i>
            {t("projects.content.source")}
          </button>
        </a>
      );
    }
  };

  return (
    <div
      ref={project}
      className={state.onscreen ? "project-container onscreen" : "project-container"}
    >
      <h4 className="project-title">{title}</h4>
      <div className="project">
        <div className="project-thumb">
          <img src="https://picsum.photos/300/200" alt="project-thumbnail" />
        </div>
        <div
          className="project-content"
          style={alternated ? { order: -1 } : {}}
        >
          <p className="justify">{text}</p>
          <div className="actions">
            <a href={demo} target="_blank">
              <button className="btn-small waves-effect waves-light blue">
                <i className="fas fa-desktop"></i>Demo
              </button>
            </a>
            {getSourceBtn(source)}
          </div>
        </div>
      </div>
    </div>
  );
}
