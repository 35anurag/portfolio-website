import React, { useEffect } from "react";
import "./About.css";
import { VscArrowSmallRight } from "react-icons/vsc";

import Aos from "aos";
import "aos/dist/aos.css";


const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="about container" id="about">
      <div className="a-about">
        <h2>About me</h2>
        <span>Get to know</span>
        <div className="about-text" data-Aos="fade-up">
          <div className="about-text-content">
            <span>
              I'm ambitious student studying Bachelor's in Computer Engineering.
              As a Computer Engineering student, I am fond of FrontEnd
              Development with some knowledge in Backend too. I am more
              interested in working with new technology and creating stuffs that
              is interactive. I'm quitely confident, curious, eager to learn new
              things and working daily to improve myself.
            </span>
            <span>
              Here are few technologies I am interested and working on:
            </span>
            <div className="technologies">
              <div className="tech-detail">
                <VscArrowSmallRight className="about-tech" />
                <p>Javascript (ESC6+)</p>
              </div>
              <div className="tech-detail">
                <VscArrowSmallRight className="about-tech" />
                <p>React Js</p>
              </div>
              <div className="tech-detail">
                <VscArrowSmallRight className="about-tech" />
                <p>Typescript</p>
              </div>
              <div className="tech-detail">
                <VscArrowSmallRight className="about-tech" />
                <p>Next js</p>
              </div>
              <div className="tech-detail">
                <VscArrowSmallRight className="about-tech" />
                <p>MERN</p>
              </div>
              <div className="tech-detail">
                <VscArrowSmallRight className="about-tech" />
                <p>Tailwind CSS</p>
              </div>
              <div className="tech-detail">
                <VscArrowSmallRight className="about-tech" />
                <p>Figma</p>
              </div>              
              <div className="tech-detail">
                <VscArrowSmallRight className="about-tech" />
                <p>C++</p>
              </div>
              <div className="tech-detail">
                <VscArrowSmallRight className="about-tech" />
                <p>Python</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default About;
