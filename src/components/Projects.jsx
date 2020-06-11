import React from "react";
import ProjectCard from "./ProjectCard";
// Import JSON file to map over and render card
import ProjectData from "../data/projects.json";
// Need to build card component for each project with relavent links to code and deploy

const Projects = () => {
  return (
    <div id="projects" className="projects-container">
      {ProjectData.map((data) => {
        return <ProjectCard data={data} />;
      })}
    </div>
  );
};

export default Projects;
