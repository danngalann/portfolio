import React from "react";

export default function Contact() {
  return (
    <div id="contact" className="container">
      <h2>Contact Me</h2>
      <form action="/email" method="POST">
        <div className="row input-field">
          <input id="name" type="text" className="validate" />
          <label for="name">Name</label>
        </div>
        <div className="row input-field">
          <input id="email" type="email" className="validate" />
          <label for="email">Email</label>
        </div>
        <div className="row input-field">
          <textarea id="message" name="message" className="materialize-textarea"></textarea>
          <label for="message">Message</label>
        </div>
        <button
          className="btn waves-effect waves-light"
          type="submit"
          name="action"
        >
          Submit
          <i className="material-icons right">send</i>
        </button>
      </form>
    </div>
  );
}
