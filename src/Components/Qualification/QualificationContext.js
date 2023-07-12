import React, { createContext } from "react";

export const qualificationContext = createContext();

const QualificationContextProvider = (props) => {
  const data = [
    {
      id: 1,
      college: "Chandigarh University",
      place: "Chandigarh, India",
      study: "Computer Engineering",
      date: "2020-present",
    },
    {
        id: 2,
        college: "Skyrider College",
        place: "Chitwan, Nepal",
        study: "+2 Science",
        date: "2018-2020",
      },
      {
        id: 3,
        college: "Skyrider H.S.E.B",
        place: "Chitwan, Nepal",
        study: "upto 10th",
        date: "2008-2018",
      },
  ];

  return (
    <qualificationContext.Provider value={{data}}>{props.children}</qualificationContext.Provider>
  );
};

export default QualificationContextProvider;
