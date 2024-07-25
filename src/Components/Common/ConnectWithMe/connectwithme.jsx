import React from "react";
import "../ConnectWithMe/connectwithme.css";
import dotImg from "../Assests/h1-bg.png";
function ConnectWithMe() {
  return (
    <>
      <div className="connect">
        <div className="CenterText">
          <p>
            Drop <span>Me </span> a line
          </p>
          <img src={dotImg} alt="dotimg" />
        </div>
        <div className="detail">
          <div className="card">
            <p>location Icon</p>
            <h2>address</h2>
            <p>Palanpur, B.K(38001)</p>
          </div>
          <div className="card">
            <p>Phone Icon</p>
            <h2>Phone</h2>
            <a className="phone-number" href="tel:9328253514"> +91 9328253514 </a>
          </div>
          <div className="card">
            <p>Email Icon</p>
            <h2>Email</h2>
            <a  href="mailto:prajapatishail875@gmail.com">
              prajapatishail875@gmail.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ConnectWithMe;
