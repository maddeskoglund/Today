import React from "react";
import { Component } from "react";


//My position
// var lat = 59.6558445;
// var long = 16.9026758;

// const API_KEY = 'd793be0d81fa72f049f684c0ba7ad86c';
const lat = "59.65584";
const long = "16.90267";

export class Vader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Today: {
                temp: [{
                    kl09: [],
                    kl12: [],
                    kl15: [],
                    kl18: [],
                    kl21: [],
                }],
                icon: [{
                    kl09: [],
                    kl12: [],
                    kl15: [],
                    kl18: [],
                    kl21: [],
                }],
            }
        };
    }

    componentDidMount() {
        const lat = "59.65584";
        const long = "16.90267";
        let tempNow = -Infinity;
        // const iconNow
        const todayTemp09 = [];
        const todayIcon09 = [];
        const todayTemp12 = [];
        const todayIcon12 = [];
        const todayTemp15 = [];
        const todayIcon15 = [];
        const todayTemp18 = [];
        const todayIcon18 = [];
        const todayTemp21 = [];
        const todayIcon21 = [];
        const tomorrowTemp09 = [];
        const tomorrowIcon09 = [];
        const tomorrowTemp12 = [];
        const tomorrowIcon12 = [];
        const tomorrowTemp15 = [];
        const tomorrowIcon15 = [];
        const tomorrowTemp18 = [];
        const tomorrowIcon18 = [];
        const tomorrowTemp21 = [];
        const tomorrowIcon21 = [];
        const tomorrowPlus1Temp09 = [];
        const tomorrowPlus1Icon09 = [];
        const tomorrowPlus1Temp12 = [];
        const tomorrowPlus1Icon12 = [];
        const tomorrowPlus1Temp15 = [];
        const tomorrowPlus1Icon15 = [];
        const tomorrowPlus1Temp18 = [];
        const tomorrowPlus1Icon18 = [];
        const tomorrowPlus1Temp21 = [];
        const tomorrowPlus1Icon21 = [];

        fetch(
            `https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/${long}/lat/${lat}/data.json`
        )
            .then(response => {
                return response.json();
            })
            .then(data => {
                // console.log(data.timeSeries[0])

                // To get the right data for three days
                const today = new Date();
                const todayStr = today.toLocaleString().slice(0, 10);
                const tomorrow = new Date(today.setDate(today.getDate() + 1));
                const tomorrowStr = tomorrow.toLocaleString().slice(0, 10);
                const tomorrowPlus1 = new Date(
                    tomorrow.setDate(tomorrow.getDate() + 1)
                );
                const tomorrowPlus1Str = tomorrowPlus1.toLocaleString().slice(0, 10);
                const time09 = "T09:00:00Z";
                const time12 = "T12:00:00Z";
                const time15 = "T15:00:00Z";
                const time18 = "T18:00:00Z";
                const time21 = "T21:00:00Z";

                tempNow = data.timeSeries[0].parameters.filter(
                    element => element.name === "t"
                )[0].values[0];

                // t = temperature
                // ws = windspeed
                //wsymb2 = weathersymbol

                // To get the right info from SMHI
                // General
                data.timeSeries.map(listItem => {
                    const { validTime, parameters } = listItem;
                    // Temp
                    let temperature = parameters.filter(element => {
                        return element.name === "t";
                    })[0].values[0];

                    let weathersymbol = parameters.filter(element => {
                        return element.name === "Wsymb2";
                    })[0].values[0];

                    // Wind
                    let windspeed = parameters.filter(element => {
                        return element.name === "ws";
                    })[0].values[0];
                    //skriv ut denna data!!
                    // console.log(listItem)

                    // Correct hours



                    // Today
                    if (validTime.startsWith(todayStr) && validTime.endsWith(time09)) {
                        todayTemp09.push(temperature);
                        todayIcon09.push(weathersymbol);
                    } else if (
                        validTime.startsWith(todayStr) && validTime.endsWith(time12)
                    ) {
                        todayTemp12.push(temperature);
                        todayIcon12.push(weathersymbol);
                    } else if (
                        validTime.startsWith(todayStr) && validTime.endsWith(time15)
                    ) {
                        todayTemp15.push(temperature);
                        todayIcon15.push(weathersymbol);
                    } else if (
                        validTime.startsWith(todayStr) && validTime.endsWith(time18)
                    ) {
                        todayTemp18.push(temperature);
                        todayIcon18.push(weathersymbol);
                    } else if (
                        validTime.startsWith(todayStr) && validTime.endsWith(time21)
                    ) {
                        todayTemp21.push(temperature);
                        todayIcon21.push(weathersymbol);
                        // Tomorrow
                    } else if (
                        validTime.startsWith(tomorrowStr) && validTime.endsWith(time09)
                    ) {
                        tomorrowTemp09.push(temperature);
                        tomorrowIcon09.push(weathersymbol);
                    } else if (
                        validTime.startsWith(tomorrowStr) && validTime.endsWith(time12)
                    ) {
                        tomorrowTemp12.push(temperature);
                        tomorrowIcon12.push(weathersymbol);
                    } else if (
                        validTime.startsWith(tomorrowStr) && validTime.endsWith(time15)
                    ) {
                        tomorrowTemp15.push(temperature);
                        tomorrowIcon15.push(weathersymbol);
                    } else if (
                        validTime.startsWith(tomorrowStr) && validTime.endsWith(time18)
                    ) {
                        tomorrowTemp18.push(temperature);
                        tomorrowIcon18.push(weathersymbol);
                    } else if (
                        validTime.startsWith(tomorrowStr) &&
                        validTime.endsWith(time21)
                    ) {
                        tomorrowTemp21.push(temperature);
                        tomorrowIcon21.push(weathersymbol);
                        // Day after tomorrow
                    } else if (
                        validTime.startsWith(tomorrowPlus1Str) &&
                        validTime.endsWith(time09)
                    ) {
                        tomorrowPlus1Temp09.push(temperature);
                        tomorrowPlus1Icon09.push(weathersymbol);
                    } else if (
                        validTime.startsWith(tomorrowPlus1Str) &&
                        validTime.endsWith(time12)
                    ) {
                        tomorrowPlus1Temp12.push(temperature);
                        tomorrowPlus1Icon12.push(weathersymbol);
                    } else if (
                        validTime.startsWith(tomorrowPlus1Str) &&
                        validTime.endsWith(time15)
                    ) {
                        tomorrowPlus1Temp15.push(temperature);
                        tomorrowPlus1Icon15.push(weathersymbol);
                    } else if (
                        validTime.startsWith(tomorrowPlus1Str) &&
                        validTime.endsWith(time18)
                    ) {
                        tomorrowPlus1Temp18.push(temperature);
                        tomorrowPlus1Icon18.push(weathersymbol);
                    } else if (
                        validTime.startsWith(tomorrowPlus1Str) && validTime.endsWith(time21)
                    ) {
                        tomorrowPlus1Temp21.push(temperature);
                        tomorrowPlus1Icon21.push(weathersymbol);
                    }
                });

                console.log(tomorrowTemp09);

                this.setState({
                    tomorrowTemp09
                });
            })
            .catch(error => console.log(error));
    }

    // wind?
    // rain?

    render() {
        return (
            <div>
                <Day1
                    tomorrowTemp09={this.state.tomorrowTemp09}
                />
            </div>
        );
    }
}
export default Vader;

{
    /* <Day1
                      tomorrowtemp09={this.state.tomorrowTemp09}
                  /> */
}
