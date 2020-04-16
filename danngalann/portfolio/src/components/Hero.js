import React, { useRef, useEffect } from "react";
import Rellax from "rellax";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();
  const rellaxContent = useRef(null);

  useEffect(() => {
    const rellax = new Rellax(rellaxContent.current)
  }, [])

  return (
    <div id="hero">
      <div className="container">
          <div className="hero-content" ref={rellaxContent} data-rellax-speed="-3" data-rellax-mobile-speed="0">
            {/* <h1 className="hero-title">{t("hero.title")}</h1> */}
            <h1 className="hero-title">danngalann</h1>
            <p className="hero-text">{t("hero.content")}</p>
          </div>
      </div>
    </div>
  );
}
