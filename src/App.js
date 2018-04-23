import React, { Component } from "react";
import Render from "react-dom";
import "./App.css";
import { Header } from "./header.js";
import { Today } from "./components/date.js";
import { Geolocation } from "./components/geolocation";
import { Day1 } from "./components/Day1";
import { Vader } from "./components/Testvader";


export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Today />
        <Day1 />
        <Vader />

        <Geolocation />
      </div>
    );
  }
}

export default App;
