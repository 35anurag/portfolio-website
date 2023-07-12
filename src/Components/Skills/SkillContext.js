import React, { createContext } from "react";

import { VscBracketDot } from "react-icons/vsc";
import { IoColorPaletteOutline } from "react-icons/io5";
import { MdOutlineDesignServices } from "react-icons/md";
import { BsCodeSlash } from "react-icons/bs";

export const skillContext = createContext();

const SkillContextProvider = (props) => {
  const data = [
    {
      id: 1,
      title: "Frontend Centric",
      experience: "4+ years of study",
      icon: <VscBracketDot />,
      tools1: "HTML",
      tools2: "CSS",
      tools3: "Bootstrap",
      tools4: "Javascript",
      tools5: "Tailwind CSS",
      tools6: "React.Js",
      percentage1: "90%",
      percentage2: "85%",
      percentage3: "70%",
      percentage4: "80%",
      percentage5: "85%",
      percentage6: "75%",
    },
    {
      id: 2,
      title: "Productivity Tools",
      experience: "4+ years of study",
      icon: <IoColorPaletteOutline />,
      tools1: "VS Code",
      tools2: "Notion",
      tools3: "Github",
      percentage1: "80%",
      percentage2: "65%",
      percentage3: "50%",
    },
    {
      id: 3,
      title: "UI/UX Design",
      experience: "2+ years of study",
      icon: <MdOutlineDesignServices />,
      tools1: "Figma",
      tools2: "Adobe Photoshop",
      percentage1: "75%",
      percentage2: "35%",
    },
    {
      id: 4,
      title: "Language Known",
      experience: "3+ years of study",
      icon: <BsCodeSlash />,
      tools1: "C",
      tools2: "C++",
      tools3: "Java",
      tools4: "Python",
      percentage1: "85%",
      percentage2: "90%",
      percentage3: "50%",
      percentage4: "75%",
    },
  ];

  return (
    <skillContext.Provider value={{ data }}>
      {props.children}
    </skillContext.Provider>
  );
};

export default SkillContextProvider;
