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
          <p onClick={handleFlip} style={{ color: "#197278" }}>
            Click for more information
          </p>
        </div>
        <div onMouseLeave={handleFlip} className="card-back">
          <h1>Technology Used</h1>
          <div className="tech-stack-cont">
            <div className="front-end-stack">
              <h2>Front-end</h2>
              <ul>
                {data.tech_stack.frontend.map((res) => {
                  return <li>{res}</li>;
                })}
              </ul>
            </div>
            <div className="back-end-stack">
              <h2>Back-end</h2>
              <ul>
                {data.tech_stack.backend.map((res) => {
                  return <li>{res}</li>;
                })}
              </ul>
            </div>
          </div>
          <div className="project-info">
            <h2>About the project</h2>
            <hr
              style={{ width: "198px", color: "#197278", marginLeft: "50px" }}
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc
              lobortis mattis aliquam faucibus purus in. Purus sit amet volutpat
              consequat mauris nunc.
            </p>
          </div>
          <div className="card-back-btns">
            <button>View Code</button>
            <button>View Deploy</button>
          </div>
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default ProjectCard;
