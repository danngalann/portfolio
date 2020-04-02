import React from "react";
import { useTranslation } from "react-i18next";

export default function Project() {
  const { t, i18n } = useTranslation();
  return (
    <div className="project">
      <div className="project-thumb">
        <img src="https://picsum.photos/300/200" alt="project-thumbnail" />
      </div>
      <div className="project-content">
        <p className="justify">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae ex
          similique laboriosam et accusamus rem id qui tenetur dolores
          provident, error natus. Dolor officiis saepe impedit recusandae
          laboriosam cupiditate vero.
        </p>
        <div className="actions">
          <button className="btn-small waves-effect waves-light"><i class="fas fa-desktop"></i>Demo</button>
          <button className="btn-small waves-effect waves-light"><i class="fab fa-github"></i>{t("projects.content.source")}</button>
        </div>
      </div>
    </div>
  );
}
