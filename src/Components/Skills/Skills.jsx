import React, { useContext, useState, useEffect } from "react";
import "./Skills.css";

import { BsArrowDownShort, BsArrowUpShort } from "react-icons/bs";

import { skillContext } from "./SkillContext";

import Aos from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
  useEffect(()=>{
    Aos.init({duration: 2000});
  }, [])

  const { data } = useContext(skillContext);
  const [openDropdown, setOpenDropdown] = useState();

  const toggleDropDown = (id) => {
    if (openDropdown === id) {
      //it checks if the openDropdown is already opened by equaling to id
      setOpenDropdown(null);
    } else {
      setOpenDropdown(id);
    }
  };

  return (
    <div className="container" id="skills">
      <div className="exp">
        <div className="experience">
          <h2>Skills</h2>
          <span>My technical level</span>
        </div>
        <div className="skill container">
          {data.map((skill) => {
            return (
              <div>
                <div className="frontend" data-Aos="fade-up">
                  <h3>{skill.icon}</h3>
                  <div className="front">
                    <div className="front-text">
                      <p className="front-cenc">{skill.title}</p>
                      <p className="front-exp">{skill.experience}</p>
                    </div>
                    <div
                      className="down-arrow"
                      onClick={() => toggleDropDown(skill.id)}
                    >
                      {openDropdown === skill.id ? (
                        <BsArrowUpShort />
                      ) : (
                        <BsArrowDownShort />
                      )}
                    </div>
                  </div>
                </div>
                {openDropdown === skill.id && (
                  <div className="list" data-Aos="fade-up">
                    <div className="">
                      <div className="list-1">
                        <p>{skill.tools1}</p>
                        <p>{skill.percentage1}</p>
                      </div>
                      {skill.percentage1 && (
                        <div className="percentage">
                          <div
                            style={{ "--width": skill.percentage1 }}
                            className="percentage-para1"
                          ></div>
                        </div>
                      )}
                    </div>

                    <div className="">
                      <div className="list-1">
                        <p>{skill.tools2}</p>
                        <p>{skill.percentage2}</p>
                      </div>
                      {skill.percentage2 && (
                        <div className="percentage">
                          <div
                            style={{ "--width": skill.percentage2 }}
                            className="percentage-para1"
                          ></div>
                        </div>
                      )}
                    </div>

                    <div className="">
                      <div className="list-1">
                        <p>{skill.tools3}</p>
                        <p>{skill.percentage3}</p>
                      </div>
                      {skill.percentage3 && (
                        <div className="percentage">
                          <div
                            style={{ "--width": skill.percentage3 }}
                            className="percentage-para1"
                          ></div>
                        </div>
                      )}
                    </div>

                    <div className="">
                      <div className="list-1">
                        <p>{skill.tools4}</p>
                        <p>{skill.percentage4}</p>
                      </div>
                      {skill.percentage4 && (
                        <div className="percentage">
                          <div
                            style={{ "--width": skill.percentage4 }}
                            className="percentage-para1"
                          ></div>
                        </div>
                      )}
                    </div>

                    <div className="">
                      <div className="list-1">
                        <p>{skill.tools5}</p>
                        <p>{skill.percentage5}</p>
                      </div>
                      {skill.percentage5 && (
                        <div className="percentage">
                          <div
                            style={{ "--width": skill.percentage5 }}
                            className="percentage-para1"
                          ></div>
                        </div>
                      )}
                    </div>

                    <div className="">
                      <div className="list-1">
                        <p>{skill.tools6}</p>
                        <p>{skill.percentage6}</p>
                      </div>
                      {skill.percentage6 && (
                        <div className="percentage">
                          <div
                            style={{ "--width": skill.percentage6 }}
                            className="percentage-para1"
                          ></div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
