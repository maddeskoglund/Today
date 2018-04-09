import React, { Component } from "react";
import Render from "react-dom";
import mood from "./mood-sun1.gif";
import "./App.css";
import { Header } from "./header.js";
import { Today } from "./date.js";
// import Test from "./components/test";

export class App extends Component {
  render() {
    return (
      <div>
        {/* <Test /> */}
        <Header />
        <Today />
      </div>
    );
  }
}

export default App;

// <div className="mood-container">

{
  /* <img src={mood} className="img-mood" alt="mood-image" />; */
}
