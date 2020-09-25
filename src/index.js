import React from "react";
import ReactDOM from "react-dom";

import Typography from "typography";
import funstonTheme from "typography-theme-funston";

import App from "./App";

import "./index.css";

const typography = new Typography(funstonTheme);
typography.injectStyles();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
