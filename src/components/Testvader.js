import React from "react";
import { Component } from "react";

//My position
// var lat = 59.6558445;
// var long = 16.9026758;

const API_KEY = 'd793be0d81fa72f049f684c0ba7ad86c';
const lat = '59.6558445';
const long = '16.9026758';

export class Vader extends Component {
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

    componentDidMouth() {
        fetch(`api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${API_KEY}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({
                    city: data.city.name,
                    country: data.city.country,
                    temperature: Math.round(data.list.main.temp),
                    humidity: data.main.humidity,
                    wind: Math.round(data.wind.speed)
                })
            })
            .catch((error) => console.log(error));
    };

    render() {
        const {
            city,
            country,
            temperature,
            humidity,
            wind
        } = this.state


        return (
            <div>Hej
                <span>{this.props.city}</span>
                <span>{this.props.country}</span>
                <span>{temperature}</span>
            </div>
        )
    };
}
export default Vader;
