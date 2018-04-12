import React from "react";
import { Component } from "react";
import { Form } from "./form";

//My position
// var lat = 59.6558445;
// var long = 16.9026758;

export class WeatherApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: undefined,
      country: undefined,
      temperature: undefined,
      humidity: undefined,
      wind: undefined
    };
  }
  static defaultProps = {
    city: "Barcelona"
  };
  _getWeatherInfo = city => {
    const main = this;
    let query = null;
    main.setState({
      infoStatus: "loading"
    });
    if (!city || city == "") {
      query = this.props.city;
    } else {
      query = city;
    }
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=50a34e070dd5c09a99554b57ab7ea7e2`
    )
      .then(function(response) {
        return response;
      })
      .then(function(response) {
        setTimeout(function() {
          main.setState({
            infoStatus: "loaded"
          });
        }, 300);
        return response.json();
      })
      .then(function(data) {
        main.setState({
          city: data.name,
          country: data.sys.country,
          temperature: data.main.temp,
          humidity: data.main.humidity,
          wind: data.wind.speed
        });
      })
      .catch(function() {
        main.setState({
          infoStatus: "error"
        });
      });
  };
  componentWillMount() {
    this._getWeatherInfo();
  }
  _handleSubmit = event => {
    event.preventDefault();
    this._getWeatherInfo(event.target.search.value);
  };
  render() {
    const {
      city,
      country,
      temperature,
      humidity,
      wind,
      infoStatus
    } = this.state;
    let data = null;
    if (infoStatus == "loaded") {
      data = (
        <div className="weatherInfo">
          <div className="cityName">
            <div>
              {city} <span>({country})</span>
            </div>
          </div>
          <div className="tempInfo">
            <div>
              Temperature<span>{temperature}º</span>
            </div>
            <div>
              Humidity<span>{humidity}%</span>
            </div>
            <div>
              Wind<span>{wind}m/s</span>
            </div>
          </div>
        </div>
      );
    } else if (infoStatus == "loading") {
      data = <div className="info loading">Loading weather data...</div>;
    } else if (infoStatus == "error") {
      data = (
        <div className="info error">
          Error while loading weather data. Try again later.
        </div>
      );
    }
    return (
      <div className="weatherApp">
        <div className="weatherQuery">
          <form onSubmit={this._handleSubmit}>
            <input type="text" name="search" placeholder="Search a City..." />
          </form>
        </div>
        {data}
      </div>
    );
  }
}

export default WeatherApp;

// export class ApiWeather extends Component {
//   constructor() {
//     super();
//     this.state = {
//       version: []
//     };
//   }

//   componentDidMount() {
//     fetch(
//       `https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/16.902720/lat/59.655844/data.json`
//     )
//       .then(results => {
//         return results.json();
//       })
//       .then(data => {
//         let version = data.results.map(ver => {
//           return <div key={ver.results}>hej</div>;
//         });
//         this.setState({ version: version });
//         console.log("state", this.state.version);
//       });
//   }

//   render() {
//     return (
//       <div>
//         <div>{this.state.version}</div>
//       </div>
//     );
//   }
// }
// export default ApiWeather;

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
