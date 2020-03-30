import React, { Fragment, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    $(".dropdown-trigger").dropdown({ hover: true });
    $(".sidenav").sidenav({ edge: "right" });
  }, []);

  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <Fragment>
      {/* Main nav dropdown */}
      <ul id="dropdown1" className="dropdown-content">
        <li onClick={() => handleClick("en")}>
          <a href="#!">English</a>
        </li>
        <li onClick={() => handleClick("es")}>
          <a href="#!">Español</a>
        </li>
      </ul>

      {/* Side nav */}
      <ul className="sidenav" id="mobile-demo">
        <li>
          <a href="sass.html">{t("nav.link1")}</a>
        </li>
        <li>
          <a href="badges.html">{t("nav.link2")}</a>
        </li>
        <li>
          <a href="collapsible.html">{t("nav.link3")}</a>
        </li>
        <li>
          <a href="#!">Languages</a>
          <ul style={{ paddingLeft: "12px" }}>
            <li onClick={() => handleClick("en")}>
              <a href="#!" style={{ fontWeight: "400" }}>
                English
              </a>
            </li>
            <li onClick={() => handleClick("es")}>
              <a href="#!" style={{ fontWeight: "400" }}>
                Español
              </a>
            </li>
          </ul>
        </li>
      </ul>

      {/* Main nav */}
      <nav>
        <div className="nav-wrapper">
          <div className="container">
            <a href="#" className="brand-logo">
              danngalann
            </a>
            <a
              href="#"
              data-target="mobile-demo"
              className="sidenav-trigger right"
            >
              <i className="material-icons">menu</i>
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <a href="sass.html">{t("nav.link1")}</a>
              </li>
              <li>
                <a href="badges.html">{t("nav.link2")}</a>
              </li>
              <li>
                <a href="collapsible.html">{t("nav.link3")}</a>
              </li>
              <li>
                <a
                  className="dropdown-trigger"
                  href="#!"
                  data-target="dropdown1"
                >
                  <i className="material-icons">translate</i>
                  <i className="material-icons right">arrow_drop_down</i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}
