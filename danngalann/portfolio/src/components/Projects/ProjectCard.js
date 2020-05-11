import React from "react";
import { useTranslation } from "react-i18next";

export default function ProjectCard(props) {
  const { t } = useTranslation();
  const { title, imgsrc, demo, source } = props.project;

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

  // Return HTML for image cards and non-image cards
  const getContent = (source) => {
    if (!source) {      
      return (
        <div className="card-content">
          <span className="card-title">{title}</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero recusandae sed vero at tempora atque quam optio adipisci saepe assumenda.</p>
        </div>
      );
    } else {
      return (
        <div className="card-image">
          <div className="card-image-overlay"></div>
          <img src={imgsrc} />
          <span className="card-title">{title}</span>
        </div>
      );
    }
  };

  return (
    <div className="card">
      {getContent(imgsrc)}
      <div className="card-action">
        <a href={demo} target="_blank" rel="noreferrer noopener">
          <button className="btn-small waves-effect waves-light blue">
            <i className="fas fa-desktop"></i>Demo
          </button>
        </a>
        {getSourceBtn(source)}
      </div>
    </div>
  );
}