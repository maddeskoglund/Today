import React, { Component } from "react";

export class Geolocation extends Component {
  geoFindMe = e => {
    e.preventDefault;
    var output = document.getElementById("out");

    if (!navigator.geolocation) {
      console.log("geolocation is not supported by your browser");
      //   output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
      return;
    }

    function success(position) {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;

      console.log(latitude / longitude);
      //   output.innerHTML =
      //     "<p>Latitude is " +
      //     latitude +
      //     "° <br>Longitude is " +
      //     longitude +
      //     "°</p>";

      //   var img = new Image();
      //   img.src =
      //     "https://maps.googleapis.com/maps/api/staticmap?center=" +
      //     latitude +
      //     "," +
      //     longitude +
      //     "&zoom=13&size=300x300&sensor=false";

      //   output.appendChild(img);
    }

    function error() {
      console.log("Unable to retrieve your location");
      //   output.innerHTML = "Unable to retrieve your location";
    }

    // output.innerHTML = "<p>Locating…</p>";

    navigator.geolocation.getCurrentPosition(success, error);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.props.geoFindMe}>
          <input type="text" name="xx" placeholder="lat/long" />
          <button>Show my Location</button>
        </form>
      </div>
    );
  }
}
export default Geolocation;

console.log(navigator.geolocation.getCurrentPosition);
