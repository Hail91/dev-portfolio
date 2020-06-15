import React from "react";
import "./App.css";
import NavBar from "./components/NavBar.jsx";
import Header from "./components/Header.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <div className="title-header">
        <h3>Skills</h3>
      </div>
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
