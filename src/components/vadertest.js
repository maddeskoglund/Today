import React from "react";
import { Component } from "react";

//My position
// var lat = 59.6558445;
// var long = 16.9026758;

const API_KEY = 'd793be0d81fa72f049f684c0ba7ad86c';
const lat = '59.6558445';
const long = '16.9026758';

export class Vadertest extends Component {
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
    city: "Enköping"
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
      `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${API_KEY}`
      // `http://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=50a34e070dd5c09a99554b57ab7ea7e2`
    )
      .then(function (response) {
        return response;
      })
      .then(function (response) {
        setTimeout(function () {
          main.setState({
            infoStatus: "loaded"
          });
        }, 300);
        return response.json();
      })
      .then(function (data) {
        main.setState({
          city: data.city.name,
          country: data.city.country,
          temperature: Math.round(data.list.main.temp),
          humidity: data.main.humidity,
          wind: Math.round(data.wind.speed)
        });
      })
      .catch(function () {
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
              Temperatur<span> {temperature}ºC</span>
            </div>
            <div>
              Humidity<span>{humidity}%</span>
            </div>
            <div>
              Vindstyrka:<span> {wind}m/s</span>
            </div>
          </div>
        </div>
      );
    } else if (infoStatus == "loading") {
      data = <div className="info loading">Hämtar väder...</div>;
    } else if (infoStatus == "error") {
      data = (
        <div className="info error">Ett fel uppstod. Försök igen senare.</div>
      );
    }
    return (
      <div className="weatherApp">
        <div className="weatherQuery">
          {/* <form onSubmit={this._handleSubmit}>
            <input
              type="text"
              name="search"
              placeholder="Sök efter en stad..."
            />
          </form> */}
        </div>
        {data}
      </div>
    );
  }
}

export default Vadertest;

