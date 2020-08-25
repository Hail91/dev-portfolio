import React from "react";
import { useSpring, animated } from "react-spring";

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
import { ReactComponent as Redux } from "./Icons/redux.svg";
// -------------------
// -------------------
const Skills = () => {
  // Function to create smooth fade in as component loads
  const skillsFade = useSpring({
    config: { duration: 1500 },
    opacity: 1,
    visibility: "visible",
    from: { opacity: 0, visibility: "hidden" },
    delay: 7500,
  });

  return (
    <animated.div id="skills" className="Skills-cont" style={skillsFade}>
      <div>
        <HTML className="skills-svg" style={{ color: "#e34c26" }} />
        <p>HTML</p>
      </div>
      <div>
        <Css className="skills-svg" style={{ color: "#264de4" }} />
        <p>CSS</p>
      </div>
      <div>
        <Js className="skills-svg" style={{ color: "#F0DB4F" }} />
        <p>JavaScript</p>
      </div>
      <div>
        <Node className="skills-svg" style={{ color: "3C873A" }} />
        <p>NodeJS</p>
      </div>
      <div>
        <ReactJS className="skills-svg" style={{ color: "61dafb" }} />
        <p>ReactJS</p>
      </div>
      <div>
        <Sass className="skills-svg" style={{ color: "cc6699" }} />
        <p>SASS</p>
      </div>
      <div>
        <Git className="skills-svg" style={{ color: "F1502F" }} />
        <p>Git</p>
      </div>
      <div>
        <Bootstrap className="skills-svg" style={{ color: "563d7c" }} />
        <p>Bootstrap</p>
      </div>
      <div>
        <DB className="skills-svg" style={{ color: "01A6F0" }} />
        <p>SQL</p>
      </div>
      <div>
        <Less className="skills-svg" style={{ color: "003366" }} />
        <p>LESS</p>
      </div>
      <div>
        <Python className="skills-svg" style={{ color: "4B8BBE" }} />
        <p>Python</p>
      </div>
      <div>
        <Redux className="skills-svg" />
        <p>Redux</p>
      </div>
    </animated.div>
  );
};
export default Skills;
