import React, { useState } from "react";
import Carousel from "react-spring-3d-carousel";
import uuidv4 from "uuid";
import { config } from "react-spring";

// Icon Imports
import { ReactComponent as HTML } from "./Icons/html.svg";
import { ReactComponent as Css } from "./Icons/css3.svg";
import { ReactComponent as Js } from "./Icons/js.svg";
import { ReactComponent as Node } from "./Icons/node-js.svg";
import { ReactComponent as ReactJS } from "./Icons/react.svg";
import { ReactComponent as Sass } from "./Icons/sass.svg";
// -------------------
const Skills = () => {
  const [Config] = useState({ config: config.slow });
  const [slide, setSlide] = useState(0);
  const [offsetRadius] = useState(2);
  const [navigation] = useState(false);
  // const [showInfo, setShowInfo] = useState(false);

  const SkillsSlides = [
    {
      key: uuidv4(),
      content: (
        <div className="icon-container">
          <HTML
            style={{
              height: "20rem",
              width: "25rem",
              color: "#E44D26",
              cursor: "pointer",
            }}
          />
          <p>HTML5</p>
        </div>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <div className="icon-container">
          <Css
            style={{
              height: "20rem",
              width: "25rem",
              color: "2965f1",
              cursor: "pointer",
            }}
          />
          <p>CSS3</p>
        </div>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <div className="icon-container">
          <Sass
            style={{
              height: "20rem",
              width: "25rem",
              color: " #cd6799",
              cursor: "pointer",
            }}
          />
          <p>Sass</p>
        </div>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <div className="icon-container">
          <Js
            style={{
              height: "20rem",
              width: "25rem",
              color: "#f0db4f",
              cursor: "pointer",
            }}
          />
          <p>JavaScript</p>
        </div>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <div className="icon-container">
          <Node
            style={{
              height: "20rem",
              width: "25rem",
              color: "#3C873A",
              cursor: "pointer",
            }}
          />
          <p>NodeJS</p>
        </div>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <div className="icon-container">
          <ReactJS
            style={{
              height: "20rem",
              width: "25rem",
              color: "#61DBFB",
              cursor: "pointer",
            }}
          />
          <p>ReactJS</p>
        </div>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <div className="icon-container">
          <img
            src="https://img.icons8.com/color/144/000000/python.png"
            alt="logo"
          />
          <p>Python</p>
        </div>
      ),
    },
  ].map((slide, index) => {
    return { ...slide, onClick: () => setSlide(index) };
  });

  return (
    <div id="#skills" className="Skills-cont">
      <Carousel
        slides={SkillsSlides}
        goToSlide={slide}
        offsetRadius={offsetRadius}
        showNavigation={navigation}
        animationConfig={Config.config}
      />
    </div>
  );
};
export default Skills;
