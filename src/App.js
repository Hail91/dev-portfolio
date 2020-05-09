import React from "react";
import "./App.css";
import NavBar from "./components/NavBar.jsx";
import Header from "./components/Header.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";

function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
