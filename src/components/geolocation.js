import React, { Component } from "react";

export class Geolocation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  getMyPosition() {
    console.log("Getting position");
    var getPosition = options => {
      console.log("requesting...");
      return new Promise(function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
      });
    };

    getPosition()
      .then(position => {
        console.log("got it!");
        console.log(position);
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
      })
      .catch(err => {
        console.error(err.message);
      });
  }

  render() {
    return (
      <div>
        <button onClick={this.getMyPosition.bind(this)}>Get my position</button>
        <span>Current position:</span>
        <p>Latitud: {this.state.latitude}</p>
        <p>Longitud: {this.state.longitude}</p>

        {/* <span>{this.state.lastPosition}</span> */}
      </div>
    );
  }
}
export default Geolocation;
