import React, { useState } from "react";
import Carousel from "react-spring-3d-carousel";
import uuidv4 from "uuid";
import { config } from "react-spring";

// Icon Imports
import { ReactComponent as HTML } from "./Icons/html.svg";
import { ReactComponent as Css } from "./Icons/css3.svg";
import { ReactComponent as Js } from "./Icons/js.svg";
import { ReactComponent as Node } from "./Icons/node-js.svg";
import { ReactComponent as Python } from "./Icons/python.svg";
import { ReactComponent as ReactJS } from "./Icons/react.svg";
import { ReactComponent as Sass } from "./Icons/sass.svg";
// -------------------
const Skills = () => {
  const [Config, setConfig] = useState({ config: config.gentle });
  const [slide, setSlide] = useState(0);
  const [offsetRadius, setOffsetRadius] = useState(2);
  const [navigation, setNavigation] = useState(true);
  // state = {
  //   goToSlide: 0,
  //   offsetRadius: 2,
  //   showNavigation: true,
  //   config: config.gentle,
  // };

  const SkillsSlides = [
    {
      key: uuidv4(),
      content: (
        <div>
          <HTML />
          <p>Python</p>
        </div>
      ),
    },
    {
      key: uuidv4(),
      content: <img src="https://picsum.photos/800/802/?random" alt="2" />,
    },
    {
      key: uuidv4(),
      content: <img src="https://picsum.photos/600/803/?random" alt="3" />,
    },
    {
      key: uuidv4(),
      content: <img src="https://picsum.photos/800/500/?random" alt="4" />,
    },
    {
      key: uuidv4(),
      content: <img src="https://picsum.photos/800/804/?random" alt="5" />,
    },
    {
      key: uuidv4(),
      content: <img src="https://picsum.photos/500/800/?random" alt="6" />,
    },
    {
      key: uuidv4(),
      content: <img src="https://picsum.photos/800/600/?random" alt="7" />,
    },
    {
      key: uuidv4(),
      content: <img src="https://picsum.photos/805/800/?random" alt="8" />,
    },
  ].map((slide, index) => {
    return { ...slide, onClick: () => setSlide({ slide: index }) };
  });

  // onChangeInput = (e) => {
  //   this.setState({
  //     [e.target.name]: parseInt(e.target.value, 10) || 0,
  //   });
  // };

  return (
    <div style={{ width: "80%", height: "500px", margin: "0 auto" }}>
      <Carousel
        slides={SkillsSlides}
        goToSlide={slide}
        offsetRadius={offsetRadius}
        showNavigation={navigation}
        animationConfig={Config.config}
      />
      <div
        style={{
          margin: "0 auto",
          marginTop: "2rem",
          width: "50%",
          display: "flex",
          justifyContent: "space-around",
        }}
      ></div>
    </div>
  );
};
export default Skills;
