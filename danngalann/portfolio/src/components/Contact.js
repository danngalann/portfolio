import React, { useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useIntersection } from "react-use";

export default function Contact({ setNavActive }) {
  const { t, i18n } = useTranslation();

  const contactSection = useRef(null);

  const intersection = useIntersection(contactSection, {
    root: null,
    rootMargin: "0px",
    threshold: 0.2
  });

  useEffect(() => {
    setNavActive(intersection && intersection.isIntersecting);
  });

  return (
    <div id="contact" className="container" ref={contactSection}>
      <h2>{t("contact.header")}</h2>
      <form action="/email" method="POST">
        <div className="row input-field">
          <input id="name" type="text" className="validate" required />
          <label htmlFor="name">{t("contact.name")}</label>
        </div>
        <div className="row input-field">
          <input id="email" type="email" className="validate" required />
          <label htmlFor="email">Email</label>
        </div>
        <div className="row input-field">
          <textarea
            id="message"
            name="message"
            className="materialize-textarea"
            required
          ></textarea>
          <label htmlFor="message">{t("contact.message")}</label>
        </div>
        <button
          className="btn waves-effect waves-light"
          type="submit"
          name="action"
        >
          {t("contact.send")}
          <i className="material-icons right">send</i>
        </button>
      </form>
    </div>
  );
}
