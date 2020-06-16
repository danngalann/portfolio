import React, { Suspense, useRef, useEffect, useState } from "react";
import { useIntersection } from "react-use";
import ReactDOM from "react-dom";
import "../i18n";

import Navbar from "./layout/Navbar";
import Hero from "./Hero";
import Contact from "./Contact";
import Projects from "./Projects/Projects";
import About from "./About";
import Load from "./Load";
import Footer from "./Footer";

function App() {
  const [state, setState] = useState({ navActive: false });

  // Changes state when the user scrolls to the intersection observer
  const setNavActive = (isActive) => {
    if (isActive != state.navActive) {
      setState({ navActive: isActive });
    }
  };

  // Intersections
  const scrolled = useRef(null);

  const intersection = useIntersection(scrolled, {
    root: null,
    rootMargin: "10%",
    threshold: 0.2,
  });

  useEffect(() => {
    setNavActive(intersection && intersection.isIntersecting);
  });

  return (
    <div>
      <Suspense fallback={<div>Loading</div>}>
        {/* {performance.navigation.type != 1 ? <Load /> : null} */}
        <header>
          <Navbar active={state.navActive} />
          <Hero />
        </header>
        <main ref={scrolled}>
          <Projects />
          <About />
          <Contact />
        </main>
        <Footer />
      </Suspense>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
