import React from "react";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  return (
    <div id="about">
      <div className="container">
        <h2>{t("about.title")}</h2>
        <p className="justify">{t("about.text")}</p>
      </div>
    </div>
  );
}
