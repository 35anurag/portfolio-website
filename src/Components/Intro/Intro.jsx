import React, {useEffect} from "react";
import "./Intro.css";

import Aos from 'aos';
import 'aos/dist/aos.css';

import { FiGithub } from "react-icons/fi";
import { BsFacebook, BsArrowDownShort } from "react-icons/bs";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import image from "../../image/profile.jpeg";

const PDF_FILE_URL = process.env.PUBLIC_URL + "/Resume.pdf";

const Intro = () => {
  useEffect(()=>{
    Aos.init({duration: 2000});
  }, [])

  const handleDownload = () => {
    window.open(PDF_FILE_URL, "_blank");
  };

  return (
    <>
      <div className="intro" id="intro">
        <div className="i-left">
          <div className="i-icons" >
            <div className="line"></div>
            <div className="i-link" data-Aos="fade-up" >
            <a href="https://github.com/35anurag" >
              <FiGithub />
            </a>
            <a href="https://www.facebook.com/anurag.regmi.5">
              <BsFacebook />
            </a>
            <a href="https://www.instagram.com/anurag.regmi.02/">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/anurag-regmi-0509b8226/">
            <FaLinkedin />
            </a>
            </div>
          </div>
          <div className="i-name">
            <span>Hi! I Am</span>
            <span>Anurag Regmi</span>
            <span>Specialized in Frontend Development with basic knowledge of Backend tools. Currently studying Computer Science Engineering.</span>
            <button onClick={handleDownload} className="button i-button">
              Resume
            </button>
          </div>
        </div>
        <div className="i-right">
          <div className="circle1"></div>
          <img src={image} alt="profile image"></img>
        </div>
        <div className="arrow">
          <i>
            <BsArrowDownShort className="arrow1" />
          </i>
        </div>
      </div>
    </>
  );
};

export default Intro;
