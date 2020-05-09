import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

const ProjectCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = (event) => {
    event.preventDefault();
    setIsFlipped(!isFlipped);
  };
  return (
    <div className="main-card">
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div className="card-front">
          <h1>Front</h1>
          <img src="" alt="kansha-img" />
          <button onClick={handleFlip}>Click to flip</button>
        </div>
        <div className="card-back">
          <h1>Back</h1>
          <button onClick={handleFlip}>Click to flip</button>
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default ProjectCard;
