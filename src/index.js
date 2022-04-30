import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "modern-normalize/modern-normalize.css";
import "./assets/styles/index.scss";

// import "css/nunito/nunito-fontface.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
