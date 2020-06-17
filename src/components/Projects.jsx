import React from "react";
import ProjectCard from "./ProjectCard";
// Import JSON file to map over and render card
import ProjectData from "../data/projects.json";
// import VisibilitySensor from "react-visibility-sensor";
import { useSpring, animated } from "react-spring";

const Projects = () => {
  const projectSectionFade = useSpring({
    config: { duration: 1500 },
    opacity: 1,
    visibility: "visible",
    from: { opacity: 0, visibility: "hidden" },
    delay: 9300,
  });
  return (
    <animated.div
      style={projectSectionFade}
      id="projects"
      className="projects-container"
    >
      {ProjectData.map((data) => {
        return <ProjectCard data={data} />;
      })}
    </animated.div>
  );
};

export default Projects;
