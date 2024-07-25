import React from "react";
import logo from "../Assests/frontendDevloper.png";
import "../Navbar/navbar.css";
function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="logoImage" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
