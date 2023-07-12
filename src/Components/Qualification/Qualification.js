import React, { useState, useEffect } from "react";
import "./Qualification.css";

import { IoSchool } from "react-icons/io5";
import { BiShoppingBag } from "react-icons/bi";

import Experience from "./Experience";
import Education from "./Education";

import Aos from 'aos';
import 'aos/dist/aos.css';


const Qualification = () => {
  useEffect(()=>{
    Aos.init({duration: 2000});
  }, [])  
  
  const [isShown, setIsShown] = useState("education");

  const handleClick = (tab) => {
    setIsShown(tab);
  };

  return (
    <div className="qualification container">
      <div>
        <div className="q_heading">
          <h2>Qualification</h2>
          <span>My Personal Journey</span>
        </div>

        <div className="q_second_heading">
          <div
            className={`q_ed ${isShown === "education" ? "active" : ""}`}
            onClick={() => handleClick("education")}
          data-Aos="fade-right">
            <div>
              <IoSchool />
            </div>
            <div>Education</div>
          </div>

          <div
            className={`q_ex ${isShown === "experience" ? "active" : ""}`}
            onClick={() => handleClick("experience")}
            data-Aos="fade-left" >
            <div>
              <BiShoppingBag />
            </div>
            <div>Experience</div>
          </div>
        </div>
        {isShown === "education" && <Education />}
        {isShown === "experience" && <Experience />}
      </div>
    </div>
  );
};

export default Qualification;
