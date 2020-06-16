import React from "react";
import { useTranslation } from "react-i18next";

export default function Project(props) {
  const { t } = useTranslation();
  const { title, text, demo, source, imgsrc, alternated } = props.project;

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
    <div className="project-container">
      <h4 className="project-title">{title}</h4>
      <div className="project">
        <div className="project-thumb">
          <img src={imgsrc} alt="project-thumbnail" />
        </div>
        <div
          className="project-content"
          style={alternated ? { order: -1 } : {}}
        >
          <p className="justify">{text}</p>
          <div className="actions">
            <a href={demo} target="_blank" rel="noreferrer noopener">
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
