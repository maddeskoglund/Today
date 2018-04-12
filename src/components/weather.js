import React from "react";
import { Component } from "react";
import { Form } from "./form";

// export class Api_weather extends Component {
//   constructor() {
//     super();
//     this.state = {};
//   }

//   componentWillMount() {
//     var url =
//       "https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/16.902720/lat/59.655844/data.json";
//     Request.get(url).then(resonse => {
//       this.setState({
//         weather: response
//       });
//     });
//   }

//   componentWillReceiveProps(nextProps) {}

//   componentDidUpdate(nextProps, nextState) {}

//   //   fetch(
//   //     `https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/16.902720/lat/59.655844/data.json`
//   //   )
//   //     .then(response => response.json())
//   //     .then(parsedJSON => console.log(parsedJSON.results))
//   //     .catch(error => console.log("parsing failed", error));
//   //}

//   render() {
//     return <div> Hej </div>;
//   }
// }

// export default Api_weather;

// export class Weather extends Component {
// constructor(props) {
//   super(props);
//   this.state = {
//     temperature: undefined,
//     wind: undefined,
//     rainfall: undefined,
//     symbol:
//   }
// }

// state = {
//   temperature: undefined,
//   wind: undefined,
//   rainfall: undefined,
//   symbol:
// };

// Hämta API från SMHI

// getWeather = async e => {
//   e.preventDefault();
//   const api_call = fetch(
//     `https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/16.902720/lat/59.655844/data.json`
//   );
//   .then(function(json))
//   const data = api_call.json();

//   console.log(data);
// };

/**************************** */
// getWeather = async e => {
//   e.preventDefault();
//   const api_call = await fetch(
//     `https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/16.902720/lat/59.655844/data.json`
//     // `https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/16.158/lat/58.5812/data.json`
//   );
//   const data = await api_call.json();

//   console.log(data);
// };

/************************** */

//   this.setState({
//     temperature: data.timeSeries.
//   });
//

// const monthNames = [
//   "Januari",
//   "Februari",
//   "Mars",
//   "April",
//   "Maj",
//   "Juni",
//   "Juli",
//   "Augusti",
//   "September",
//   "Oktober",
//   "November",
//   "December"
// ];

// const dayNames = [
//   "Måndag",
//   "Tisdag",
//   "Onsdag",
//   "Torsdag",
//   "Fredag",
//   "Lördag",
//   "Söndag"
// ];

// const theDay = new Date();
// const datum = theDay.getDate();
// const veckodag = dayNames[theDay.getDay()];
// const month = monthNames[theDay.getMonth()];
//   render() {
//     return (
//       <div>
//         <span className="city">Enköping</span>

//         {/* <span className="day">
//           {veckodag}, {datum} {month}
//         </span> */}
//         {/* <Form getWeather={this.getWeather} /> */}
//       </div>
//     );
//   }
// }

// export default Weather;
