import React, { useEffect } from "react";
import "./About.css";
import Card from "../Card/Card";

import Aos from 'aos';
import 'aos/dist/aos.css';

import javascript from "../../image/javascript.png";
import css from "../../image/css3.png";
import html from "../../image/html5.png";
import figma from "../../image/figma.png";

const About = () => {
  useEffect(()=>{
    Aos.init({duration: 2000});
  }, [])

  return (
    <div className="about container" id="about">
      <div className="a-about">
        <h2>About me</h2>
        <span>Get to know</span>
        <div className="about-text" data-Aos="fade-up">
          <span>
            I'm very ambitious student studying bachelor's in Computer
            Engineering. As a front-end developer i am looking for a role in
            established IT companies with the opportunity to work with the
            latest technologies on the challenging and diverse projects.
          </span>
          <span>
            I'm quitely confident, curious, eager to learn new things and
            working daily to improve myself.
          </span>
        </div>
      </div>
      <div className="a-cards" data-Aos="fade-up">
        <div className="a-cards1"  style={{ left: "14rem" }}>
          <Card img={javascript} heading="Javascript" />
        </div>
        <div className="a-cards2" style={{ top: "7rem", left: "2rem" }}>
          <Card img={css} heading="CSS" />
        </div>
        <div className="a-cards3" style={{ top: "13rem", left: "14rem" }}>
          <Card img={html} heading="HTML" />
        </div>
        <div className="a-cards4" style={{ top: "19rem", left: "2rem" }}>
          <Card img={figma} heading="Figma" />
        </div>
      </div>
    </div>
  );
};

export default About;
