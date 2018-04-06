import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import { Whoops404 } from "./whoops404";
import registerServiceWorker from "./registerServiceWorker"; //Vad är det här?

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
