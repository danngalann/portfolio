import React from "react";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t, i18n } = useTranslation();  

  return (
    <div id="hero">
      <div className="container">
        <div className="hero-content">
          {/* <h1 className="hero-title">{t("hero.title")}</h1> */}
          <h1 className="hero-title">danngalann</h1>
          <p className="hero-text">{t("hero.content")}</p>
        </div>
      </div>
    </div>
  );
}
