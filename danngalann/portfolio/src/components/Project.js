import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";

export default function Project(props) {
  const { t, i18n } = useTranslation();
  const { title, text, demo, source, alternated } = props.project;

  // Returns a button depending 
  const getSourceBtn = source => {
    if (!source) {
      return (
        <button className="btn-small waves-effect waves-light disabled">
          <i class="fas fa-eye-slash"></i>
          {t("projects.content.nosource")}
        </button>
      );
    } else {
      return (
        <a href={source}>
          <button className="btn-small waves-effect waves-light blue">
            <i class="fab fa-github"></i>
            {t("projects.content.source")}
          </button>
        </a>
      );
    }
  };

  return (
    <Fragment>
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
            <a href={demo}>
              <button className="btn-small waves-effect waves-light blue">
                <i class="fas fa-desktop"></i>Demo
              </button>
            </a>
            {getSourceBtn(source)}
          </div>
        </div>
      </div>
    </Fragment>
  );
}
