import React from "react";
import Navbar from "../../Common/Navbar/navbar";
import Main from "../../Common/Main/main";
import About from "../../Common/About/about";
import Skill from "../../Common/Skill/skill";
import Projects from "../../Common/Projects/projects";
import ConnectWithMe from "../../Common/ConnectWithMe/connectwithme";

function HeroSection() {
  return (
    <>
      <>
        <Navbar />
        <Main />
        <About />
        <Skill />
        <Projects />
        <ConnectWithMe />
      </>
    </>
  );
}

export default HeroSection;
