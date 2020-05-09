import React, { useState } from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";

const Skills = () => {
  const [configuration, setConfiguration] = useState({
    config: config.gentle,
  });
  const [count, setCount] = useState(0);

  const skillsSlide = [{}];
  return (
    <div>
      <h1>Carousal will go here</h1>
    </div>
  );
};

export default Skills;
