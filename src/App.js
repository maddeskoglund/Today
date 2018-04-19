import React, { Component } from "react";
import Render from "react-dom";
import "./App.css";
import { Header } from "./header.js";
import { Today } from "./components/date.js";
import { Geolocation } from "./components/geolocation";
import { Vader } from "./components/Testvader1";


export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Today />

        <Vader />

        <Geolocation />
      </div>
    );
  }
}

export default App;
