import React, { useState } from "react";
import "./Navbar.css";
import { IoClose } from "react-icons/io5";
import { RiMenu3Line } from "react-icons/ri";

function Navbar() {
  const [toggleButton, isToggleButton] = useState(false);

  const handleNav = () => {
    isToggleButton(true);
  };

  const handleClose = () => {
    isToggleButton(false);
  };
  return (
    <nav className="n-wrapper">
      <div className="n-left">
        <div className="n-name">
          <a href="#home">Anurag</a>
        </div>
      </div>
      <div className="n-right">
        <div className="n-list">
          <div className="n-topic">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
      
      <div className="open-button">
        <button className="toggle-button" onClick={handleNav}>
          <RiMenu3Line />
        </button>
      </div>

      <div className="nav-right">
        {toggleButton && (
          <div className="nav-button">
            <div className="close-button">
              <button onClick={handleClose}>
                <IoClose />
              </button>
            </div>
            <div className="nav-link">
              <a onClick={handleClose} href="#home">
                Home
              </a>
              <a onClick={handleClose} href="#about">
                About
              </a>
              <a onClick={handleClose} href="#projects">
                Projects
              </a>
              <a onClick={handleClose} href="#contact">
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;