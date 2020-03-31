import React, { Component, Suspense } from "react";
import ReactDOM from "react-dom";
import "../i18n";

import Navbar from "./layout/Navbar";
import Hero from "./Hero";

class App extends Component {
  render() {
    return (
      <div>
        <Suspense fallback={<div>Loading</div>}>
          <Navbar />
          <Hero />
        </Suspense>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
