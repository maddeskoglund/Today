import React from "react";
import { Weather } from "./weather";

export class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.getWeather}>
        <input type="text" name="city" placeholder="Breds-Boda, Enköping" />
        <button>Get Weather</button>
      </form>
    );
  }
}

export default Form;
