import React from "react";
import "../Skill/skill.css";
import dotImg from "../Assests/h1-bg.png";

function Skill() {
  return (
    <>
      <div className="skill">
        <div className="logoSkill">
          <p>skills</p>
          <img src={dotImg} alt="dotimg" />
        </div>
        <div className="box">
          <div className="child">
            <h2>
              All the skills that I have in that field of work are mentioned.
            </h2>
            <p>
              We are a team of tech enthusiasts with expertise in HTML, CSS,
              Bootstrap, and React.js. Recently graduated with a Bachelor's in
              Computer Applications (BCA), we bring fresh, innovative ideas to
              web development. Our focus is on creating responsive,
              user-friendly websites and applications that meet modern
              standards. Passionate about coding and continuous learning, we
              strive to deliver high-quality digital solutions.
            </p>
          </div>
          <div className="child">
            <div className="txt">
              <h3>react js</h3>
              <p>75%</p>
            </div>
            <hr />
            <div className="txt">
              <h3>bootstrap</h3>
              <p>80%</p>
            </div>
            <hr />
            <div className="txt">
              <h3>javascript</h3>
              <p>70%</p>
            </div>
            <hr />
            <div className="txt">
              <h3>scss</h3>
              <p>80%</p>
            </div>
            <hr />
            <div className="txt">
              <h3>css</h3>
              <p>85%</p>
            </div>
            <hr />
            <div className="txt">
              <h3>HTML</h3>
              <p>90%</p>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
}

export default Skill;
