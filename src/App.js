import React, { Component } from "react";
import Render from "react-dom";
import "./App.css";
import { Header } from "./header.js";
import { Today } from "./date.js";
import { Weather } from "./components/weather";
import { Geolocation } from "./components/geolocation";
// import { Form } from "./components/form";
// import Test from "./components/test";

export class App extends Component {
  // getWeather = async e => {
  //   e.preventDefault();
  //   const api_call = await fetch(
  //     `https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/16.902720/lat/59.655844/data.json`
  //   );
  //   const data = await api_call.json();

  //   console.log(data);
  // };

  render() {
    return (
      <div>
        {/* <Test /> */}
        <Header />
        <Today />
        {/* <Form /> */}
        {/* <Weather />
        <Api_weather /> */}
        <Geolocation />
        {/* <Form getWeather={this.getWeather} /> */}
      </div>
    );
  }
}

export default App;
