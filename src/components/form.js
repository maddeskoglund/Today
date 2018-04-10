import React from "react";

export class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.getWeather}>
        <input type="text" name="city" placeholder="City.." />
        <button>Get Weather</button>
      </form>
    );
  }
}

export default Form;
