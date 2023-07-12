import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import SkillContextProvider from "./Components/Skills/SkillContext";

ReactDOM.render(
    <SkillContextProvider>
      <App />
    </SkillContextProvider>,
  document.getElementById("root")
);
