import React, {useEffect} from "react";
import "./Projects.css";
import website from "../../image/realstate.png";
import website1 from "../../image/netflix.png";
import ui from "../../image/ui.jpg";

import Aos from 'aos';
import 'aos/dist/aos.css';

import { BsArrowRightShort } from "react-icons/bs";

import { Navigation, Pagination, Keyboard } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const data = [
  {
    id: 1,
    image: website,
    title1: "RealState Website",
    title2:
      "Realstate Website is created using React js and Tailwind CSS. We can search the types of appartment, houses in different countries with different price range. Login system is just a frontend design",
    github: "https://github.com/35anurag/Realstate-website",
    live: "https://35anurag.github.io/Realstate-website/",
  },
  {
    id: 2,
    image: website1,
    title1: "Netflix Clone",
    title2:
      "Netflix Clone is a frontend design of Netflix created using React js and Tailwind Css. Here, Api is integrated for the movies.",
    github: "https://github.com/35anurag/netflix-clone",
    live: "https://35anurag.github.io/netflix-clone/",
  },
  {
    id: 3,
    image: ui,
    title1: "Instagram UI design",
    title2:
      "This is made using Figma where new app components and icons with great features are added",
    github: "http://github.com",
    live: "http://github.com",
  },
  
];

const Projects = () => {
  useEffect(()=>{
    Aos.init({duration: 2000});
  }, [])

  return (
    <div className="projects" id="projects">
      <h2>Projects</h2>
      <span>My recent works</span>
      <div className="container p-container">
        <Swiper
          modules={[Navigation, Pagination, Keyboard]}
          spaceBetween={30}
          className="mySwiper"
          slidesPerView={1}
          keyboard={{ clickable: true }}
          navigation={true}
          pagination={{ clickable: true }}
        >
          {data.map(({ id, image, title1, title2, github, live }) => {
            return (
              <SwiperSlide key={id}>
                <article className="p-item" data-Aos="fade-left">
                  <div className="p-images">
                    <img src={image} alt={title2}></img>
                  </div>
                  <div className="p-content">
                    <h2>{title1}</h2>
                    <h3>{title2}</h3>
                    <div className="p-link">
                      <a href={github} className="p-github button">
                        Github
                      </a>
                      <a href={live} className="p-live button">
                        <p>Demo</p>
                        <BsArrowRightShort />
                      </a>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
