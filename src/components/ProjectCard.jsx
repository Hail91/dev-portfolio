import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

// Images

const ProjectCard = ({ data }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = (event) => {
    event.preventDefault();
    setIsFlipped(!isFlipped);
  };
  return (
    <div className="main-card">
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div onMouseEnter={handleFlip} className="card-front">
          <img src={data.image} alt="project-1" />
          <h2>{data.name}</h2>
          <p>{data.description}</p>
        </div>
        <div onMouseLeave={handleFlip} className="card-back">
          <h1>Technology Used</h1>
          <div className="tech-stack-cont">
            <div className="front-end-stack">
              <h2>Front-end</h2>
            </div>
            <div className="back-end-stack">
              <h2>Back-end</h2>
            </div>
          </div>
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default ProjectCard;
