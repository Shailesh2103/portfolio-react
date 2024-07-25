import React from "react";
import "../About/about.css";
import dotImg from "../Assests/h1-bg.png";
import ShaileshResume from '../Assests/Shailesh_Prajapati_Resume.pdf'
function About() {
  return (
    <>
      <div className="aboutme">
        <div className="txt">
          <h1>
            a little <span> about </span>me
          </h1>
          <img src={dotImg} alt="img" />
          <p>
            I am Shailesh N. Prajapati from Palanpur, Gujarat. A recent BCA
            graduate, I specialize in HTML, CSS, Bootstrap, and React.js.
            Committed to daily learning and skill application, I create
            responsive, user-friendly websites and applications, constantly
            enhancing my expertise in web development.
          </p>
          <a href={ShaileshResume} download="Shailesh FrontEnd Developer"   >download CV</a>
        </div>
      </div>
    </>
  );
}

export default About;
