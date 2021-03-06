import React from "react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer id="footer">
      <div className="footer-section">
        <div className="row">
          <a
            href="https://github.com/danngalann"
            target="_blank"
            rel="noopener noreferrer"
            className="col s3"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-galan-navio/"
            target="_blank"
            rel="noopener noreferrer"
            className="col s3"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://www.instagram.com/dangalann_ps/"
            target="_blank"
            rel="noopener noreferrer"
            className="col s3"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.kaggle.com/danngalann"
            target="_blank"
            rel="noopener noreferrer"
            className="col s3"
          >
            <i style={{width: 50.31}} className="fab fa-kaggle"></i>
          </a>
        </div>
      </div>
      <div className="footer-section">
        <div className="footer-copy">
          &copy;danngalann {new Date().getFullYear()}. {t("footer.rights")}
        </div>
        <div className="footer-atr">
          Favicon made by{" "}
          <a
            href="https://www.flaticon.com/authors/kiranshastry"
            title="Kiranshastry"
          >
            Kiranshastry
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
      </div>
    </footer>
  );
}
