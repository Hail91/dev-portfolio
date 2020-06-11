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
        <h3>Get in touch!</h3>
      </div>
      <Contact />
    </div>
  );
}

export default App;
