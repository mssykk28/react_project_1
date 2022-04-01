import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./tsx/views/components/App";

//root のIDをもつDOM要素（コンテナ）に <App /> をレンダリングしている。
ReactDOM.render(
  <React.StrictMode>
    <App />
    <h1>mss_deploy</h1>
  </React.StrictMode>,
  document.getElementById("root"),
);
