import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

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
          <img src={require(`../images/${data.image}`)} alt="project-img" />
          <div style={{ width: "90%", textAlign: "left" }}>
            <h2>{data.name}</h2>
            <p>{data.description}</p>
          </div>
          <p
            className="more-info-btn"
            onClick={handleFlip}
            style={{ color: "#197278" }}
          >
            Click for more information
          </p>
        </div>
        <div className="card-back">
          <div className="card-back-header">
            <h1 style={{ marginLeft: "5rem" }}>Technology Used</h1>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "30px",
              }}
            >
              <i
                onClick={handleFlip}
                style={{ color: "#197278" }}
                class="fas fa-arrow-right fa-2x"
              ></i>
            </div>
          </div>
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
            <div>
              {data.project_info.map((info) => {
                return (
                  <p style={{ marginRight: "10px" }}>
                    <span>- </span>
                    {info}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="card-back-btns">
            <a title="View code on Github" href={data.code_link} target="_">
              <i class="fab fa-github fa-3x" style={{ color: "#197278" }}></i>
            </a>
            <a title="View deployed project" href={data.deploy_link} target="_">
              <i
                class="fas fa-globe-americas fa-3x"
                style={{ color: "#197278" }}
              ></i>
            </a>
          </div>
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default ProjectCard;
