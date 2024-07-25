import React from "react";
import "../Main/main.css";
import mainImag from "../Assests/main.png";
function Main() {
  return (
    <>
      <div className="main">
        <div className="child">
          <h3>hello i'm</h3>
          <h1>PRAJAPATI SHAILESH</h1>
          <h2>Frontend Devloper</h2>
        </div>
        <div className="child">
          <img src={mainImag} alt="mainimg" />
        </div>
      </div>
    </>
  );
}

export default Main;
