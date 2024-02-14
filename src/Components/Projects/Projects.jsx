import React, { useEffect } from "react";
import "./Projects.css";
import realstate from "../../image/realstate.png";
import netflix from "../../image/netflix.png";
import blog from "../../image/blog.png";

import Aos from "aos";
import "aos/dist/aos.css";

import { FaGithub } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const data = [
  {
    id: 1,
    image: realstate,
    name: "RealState Website",
    desc: "Engineered a comprehensive realstate website leveraging React.js and Tailwind CSS, implementing seamless data searching and sorting functionalities for enhanced user experience.",
    github: "https://github.com/35anurag/realstate-website",
    live: "https://reallstate.netlify.app/",
    tools: {
      tools1: "React Js",
      tools2: "Javascript",
      tools3: "styled-components",
      tools4: "Tailwind CSS",
    },
  },
  {
    id: 2,
    image: netflix,
    name: "Netflix Clone",
    desc: "Developed a responsive Netflix clone using React.js and Tailwind CSS, featuring user authentication through Firebase. Integrated API for dynamic movie content, leveraging React's state management for an efficient user interface",
    tools: {
      tools1: "React js",
      tools2: "Javascript",
      tools3: "Tailwind CSS",
      tools4: "Firebase",
      tools5: "Movie API",
    },
    github: "https://github.com/35anurag/netflix-clone",
    live: "https://netflixfrontendclonee.netlify.app/",
  },
  {
    id: 3,
    image: blog,
    name: "Blog Website",
    desc: "Created a blog website utilizing Next.js and Tailwind CSS, offering a responsive and modern user interface. Implemented user authentication and database storage using Firebase, enabling login and secure data management with functionalities including likes and comment.",
    tools: {
      tools1: "Next js",
      tools2: "Javascript",
      tools3: "Tailwind CSS",
      tools4: "Firebase",
      tools5: "Firebase Database",
    },
    github: "https://github.com/35anurag/Blog-website",
    live: "https://blogg-website.vercel.app/",
  },
];

const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="projects" id="projects">
      <h2>Projects</h2>
      <span>My recent works</span>

      <div className="container p-container ">
        <div className="project">
          {data.map((project) => (
            <div key={project.id}>
              <div>
                <div className="project-items">
                  <img
                    src={project.image}
                    alt="projectimages"
                    className="project-image"
                  />
                  <div className="project-detail">
                    <div className="project-contents">
                      <p className="project-name">{project.name}</p>
                      <p className="project-desc">{project.desc}</p>
                      <div className="project-tools">
                        <p>{project.tools.tools1}</p>
                        <p>{project.tools.tools2}</p>
                        <p>{project.tools.tools3}</p>
                        <p>{project.tools.tools4}</p>
                        <p>{project.tools.tools5}</p>
                      </div>
                      <div className="project-link">
                        <a href={project.github}>
                          <FaGithub />
                        </a>
                        <a href={project.live}>
                          <FaLongArrowAltRight />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
