import React from "react";
import { Component } from "react";

//My position
// var lat = 59.6558445;
// var long = 16.9026758;

// const API_KEY = 'd793be0d81fa72f049f684c0ba7ad86c';
// const lat = '59.6558445';
// const long = '16.9026758';

export class Vader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: undefined,
            country: undefined,
            temperature: undefined,
            icon: undefined,
            humidity: undefined,
            wind: undefined
        };
    }

    componentDidMount() {
        const API_KEY = 'd793be0d81fa72f049f684c0ba7ad86c';
        const long = '16.90267';
        const lat = '59.65584';
        // const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${API_KEY}`
        const url = `https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/${long}/lat/${lat}/data.json`
        fetch(url)
            .then((response) => {
                return response.json()
            })
            .then((json) => {
                console.log(json);
                // this.setState({
                //     city: data.city.name,
                //     country: data.city.country,
                //     temperature: Math.round(data.list[0].main.temp),
                //     icon: data.list.weather.icon,
                //     humidity: data.main.humidity,
                //     wind: Math.round(data.list.wind.speed)
            })

        // .catch((error) => console.log(error));
    };




    render() {
        return (
            <div> Hej
                {/* < span className='city' > {this.props.city}</span >
                <span className='city'>{this.componentDidMount}</span> */}

                <span></span>
            </div >
        )
    };
}
export default Vader;


