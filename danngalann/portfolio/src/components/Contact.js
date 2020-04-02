import React from "react";
import { useTranslation } from "react-i18next";


export default function Contact() {
  const { t, i18n } = useTranslation();

  return (
    <div id="contact" className="container">
      <h2>{t("contact.header")}</h2>
      <form action="/email" method="POST" className="container">
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
          className="btn waves-effect waves-light blue"
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
