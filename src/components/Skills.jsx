import React from "react";
import { config } from "react-spring";

// Icon Imports
import { ReactComponent as HTML } from "./Icons/html.svg";
import { ReactComponent as Css } from "./Icons/css3.svg";
import { ReactComponent as Js } from "./Icons/js.svg";
import { ReactComponent as Node } from "./Icons/node-js.svg";
import { ReactComponent as ReactJS } from "./Icons/react.svg";
import { ReactComponent as Sass } from "./Icons/sass.svg";
import { ReactComponent as Git } from "./Icons/git.svg";
import { ReactComponent as Bootstrap } from "./Icons/bootstrap.svg";
import { ReactComponent as DB } from "./Icons/database.svg";
import { ReactComponent as Less } from "./Icons/less.svg";
import { ReactComponent as Python } from "./Icons/python.svg";
// -------------------
const Skills = () => {
  return (
    <div id="#skills" className="Skills-cont">
      {/* <h2>Skills go here</h2> */}
      <HTML className="skills-svg" style={{ color: "#e34c26" }} />
      <Css className="skills-svg" style={{ color: "#264de4" }} />
      <Js className="skills-svg" style={{ color: "#F0DB4F" }} />
      <Node className="skills-svg" style={{ color: "3C873A" }} />
      <ReactJS className="skills-svg" style={{ color: "61dafb" }} />
      <Sass className="skills-svg" style={{ color: "cc6699" }} />
      <Git className="skills-svg" style={{ color: "F1502F" }} />
      <Bootstrap className="skills-svg" style={{ color: "563d7c" }} />
      <DB className="skills-svg" style={{ color: "01A6F0" }} />
      <Less className="skills-svg" style={{ color: "003366" }} />
      <Python className="skills-svg" />
    </div>
  );
};
export default Skills;
