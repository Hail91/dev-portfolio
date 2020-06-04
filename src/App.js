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
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
