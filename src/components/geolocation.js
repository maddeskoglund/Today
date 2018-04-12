// https://no23reason.github.io/react-geolocated/#/?a=basic-usage

import React, { Component } from "react";

export class Geolocation extends Component {
  render() {
    var options = {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0
    };

    function success(pos) {
      var crd = pos.coords;

      console.log("Your current position is:");
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
      console.log(`More or less ${crd.accuracy} meters.`);
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);

    return (
      <div>
        <span>Initial position:</span>

        {/* <span>{crd.latitud}</span> */}

        <span>Current position:</span>

        {/* <span>{this.state.lastPosition}</span> */}
      </div>
    );
  }
}
export default Geolocation;

/**************************** */

//https://www.tutorialspoint.com/react_native/react_native_geolocation.htm

//   constructor(props) {
//     super(props);

//     this.state = {
//       initialPosition: {
//         latitude: 0,
//         longitude: 0
//       },
//       markerPosition: {
//         latitude: 0,
//         longitude: 0
//       }
//     };
//   }

//   watchID: ?number = null;

//   componentDidMount() {
//     navigator.geolocation.getCurrentPosition(
//       position => {
//         var lat = parseFloat(position.coords.latitude);
//         var long = parseFloat(position.coords.longitude);

//         var initialRegion = {
//           latitude: lat,
//           longitude: long
//         };
//         this.setState({ initialPosition: initialRegion });
//         this.setState({ markerPosition: initialRegion });
//       } /* (error) => alert(JSON.stringify(error)*/
//     ),
//       { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }; //)
//     this.watchID = navigator.geolocation.watchPosition(position => {
//       var lat = parseFloat(position.coords.latitude);
//       var long = parseFloat(position.coords.longitude);

//       var lastRegion = {
//         latitude: lat,
//         longitude: long
//       };

//       this.setState({ initialPosition: lastRegion });
//       this.setState({ markerPosition: lastRegion });
//     });
//   }

//   componentWillUnmount() {
//     navigator.geolocation.clearWatch(this.watchID);
//   }

//   render() {
//     return (
//       <div>
//         <span>Initial position:</span>

//         {/* <span>{this.state.initialPosition}</span> */}

//         <span>Current position:</span>

//         {/* <span>{this.state.lastPosition}</span> */}
//       </div>
//     );
//   }
// }
// export default Geolocation;

// // console.log(navigator.geolocation.getCurrentPosition());
