import React, { Component } from "react";
import Render from "react-dom";
import "./App.css";
import { Header } from "./header.js";
import { Today } from "./components/date.js";
import { Geolocation } from "./components/geolocation";
import { Vader } from "./components/Testvader";
// import { Vadertest } from "./components/vadertest";
// import { WeatherApp } from "./components/weather";

export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Today />


        <Vader />
        {/* <Vadertest /> */}
        <Geolocation />
      </div>
    );
  }
}

export default App;
