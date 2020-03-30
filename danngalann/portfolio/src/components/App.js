import React, { Component, Suspense } from "react";
import ReactDOM from "react-dom";
import "../i18n";

import Navbar from "./layout/Navbar";

class App extends Component {
  render() {
    return (
      <div>
        <Suspense fallback={<div>Loading</div>}>
          <Navbar />
        </Suspense>
        <h1>Hello World</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
