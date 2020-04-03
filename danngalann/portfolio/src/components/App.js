import React, { Component, Suspense } from "react";
import ReactDOM from "react-dom";
import "../i18n";

import Navbar from "./layout/Navbar";
import Hero from "./Hero";
import Contact from "./Contact";
import Projects from "./Projects";
import About from "./About";

class App extends Component {
  state = { navActive: false };

  setNavActive = isActive => {
    if(isActive != this.state.navActive){
      this.setState({navActive: isActive});
    }    
  }

  render() {
    return (
      <div>
        <Suspense fallback={<div>Loading</div>}>
          <Navbar active={this.state.navActive} />
          <Hero />
          <Projects setNavActive={this.setNavActive} />
          <About />
          <Contact />
        </Suspense>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
