import React from "react";
import "./App.css";
import NavBar from "./components/NavBar.jsx";
import Header from "./components/Header.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";

import { useSpring, animated } from "react-spring";

function App() {
  const skillsHeader = useSpring({
    config: { duration: 1500 },
    opacity: 1,
    visibility: "visible",
    from: { opacity: 0, visibility: "hidden" },
    delay: 11500,
  });
  return (
    <div>
      <NavBar />
      <Header />
      <animated.div className="title-header" style={skillsHeader}>
        <h3>Skills</h3>
      </animated.div>
      <Skills />
      <div className="title-header">
        <h3>Projects</h3>
      </div>
      <Projects />
      <div className="title-header">
        <h3 style={{ marginBottom: "5rem" }}>Get in touch!</h3>
      </div>
      <Contact />
      <a
        href="#welcome"
        style={{
          textDecoration: "none",
          cursor: "pointer",
          color: "#197278",
          fontSize: "1.8rem",
          display: "flex",
          justifyContent: "center",
          marginBottom: "5rem",
        }}
      >
        Back to top
      </a>
    </div>
  );
}

export default App;
