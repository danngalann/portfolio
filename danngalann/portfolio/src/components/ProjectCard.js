import React from "react";
import { useTranslation } from "react-i18next";

export default function ProjectCard(props) {
  const { t } = useTranslation();
  const { title, img, demo, source } = props.project;

  // Returns a button depending on the source
  const getSourceBtn = (source) => {
    if (!source) {
      return (
        <button className="btn-small waves-effect waves-light disabled">
          <i className="fas fa-eye-slash"></i>
          {t("projects.content.nosource")}
        </button>
      );
    } else {
      return (
        <a href={source} target="_blank" rel="noreferrer noopener">
          <button className="btn-small waves-effect waves-light blue">
            <i className="fab fa-github"></i>
            {t("projects.content.source")}
          </button>
        </a>
      );
    }
  };

  return (
    <div className="card">
      <div className="card-image">
        <img src={img} />
        <span className="card-title">{title}</span>
      </div>
      <div className="card-action">
        <a href={demo} target="_blank" rel="noreferrer noopener">
          <button className="btn-small waves-effect waves-light blue">
            <i className="fas fa-desktop"></i>Demo
          </button>
        </a>
        {getSourceBtn()}
      </div>
    </div>
  );
}
