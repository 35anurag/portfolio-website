import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">
        <a href="#">Anurag</a></div>
      </div>
      <div className="n-right">
        <div className="n-list">
          <div className="n-topic">
            <a href="#">Home</a>
            <a href="#about">About</a>
            {/* <a href="#skills">Skills</a> */}
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
