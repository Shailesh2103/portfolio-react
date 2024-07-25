import React from "react";
import "../Projects/project.css";
import dotImg from "../Assests/h1-bg.png";
import Project from "../Assests/project.jpg";
import Project02 from "../Assests/Screenshot (15).png";
function Projects() {
  return (
    <>
      <div className="projects">
        <div className="centerText">
          <p>projects</p>
          <img src={dotImg} alt="dotimg" />
        </div>
        <div className="box">
          <div className="child">
            <img src={Project} alt="Project" />
          </div>
          <div className="child">
            <h3>e - commerce website</h3>
            <p>
              Crafted with precision using HTML, CSS, and Bootstrap, our
              e-commerce website frontend promises a seamless and visually
              appealing shopping experience. The responsive design ensures
              optimal viewing on various devices, while Bootstrap components
              enhance functionality and aesthetics. Elevate your online presence
              with this modern, user-friendly frontend that combines style and
              efficiency for a standout e-commerce platform.
            </p>
            <a
              className="Button-see-live"
              href="https://shailesh2103.github.io/ShailShop/"
            >
              See Live
            </a>
          </div>
        </div>
        <div className="box">
          <div className="child">
            <h3>beauty parlour </h3>
            <p>
              I created a responsive web page for a beauty parlour catering to
              girls, using the React.js library. The project showcases various
              services, includes an image gallery, and features an appointment
              booking form. It emphasizes a user-friendly interface with smooth
              navigation and modern design aesthetics.
            </p>
            <a
              className="Button-see-live"
              href="https://Shailesh2103.github.io/saloon"
            >
              See Live
            </a>
          </div>
          <div className="child">
            <img src={Project02} alt="Project" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
