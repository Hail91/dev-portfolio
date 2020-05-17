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
        <div className="card-front">
          <img src={data.image} alt="project-1" />
          <h2>{data.name}</h2>
          <p>{data.description}</p>
          <button onClick={handleFlip}>Click to flip</button>
        </div>
        <div className="card-back">
          <button onClick={handleFlip}>Click to flip</button>
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default ProjectCard;
