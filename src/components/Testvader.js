import React from "react";
import { Component } from "react";

//My position
// var lat = 59.6558445;
// var long = 16.9026758;

// const API_KEY = 'd793be0d81fa72f049f684c0ba7ad86c';
const lat = '59.65584';
const long = '16.90267';

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

        const lat = '59.65584';
        const long = '16.90267';
        const tempNow = []; //just nu hämtar denna data för hela dagen. Inte bara NU!
        const tempTomorrow = []; //denna ska bytas ut
        const tempTomorrowPlus1 = []; //denns ska bytas ut
        // const iconNow
        // const todayTemp06
        // const todayIcon06
        // const todayTemp10
        // const todayIcon10
        // const todayTemp14
        // const todayIcon14
        // const todayTemp18
        // const todayIcon18
        // const todayTemp22
        // const todayIcon22
        const tomorrowTemp06 = []
        // const tomorrowIcon06 
        // const tomorrowTemp10
        // const tomorrowIcon10
        // const tomorrowTemp14
        // const tomorrowIcon14
        // const tomorrowTemp18
        // const tomorrowIcon18
        // const tomorrowTemp22
        // const tomorrowIcon22
        // const tomorrowPlus1Temp06
        // const tomorrowPlus1Icon06
        // const tomorrowPlusTemp10
        // const tomorrowPlus1Icon10
        // const tomorrowPlus1Temp14
        // const tomorrowPlus1Icon14
        // const tomorrowPlus1Temp18
        // const tomorrowPlus1Icon18
        // const tomorrowPlus1Temp22
        // const tomorrowPlusIcon22

        // fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${API_KEY}`)
        fetch(`https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/${long}/lat/${lat}/data.json`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                // console.log(data.timeSeries)

                // To get the right data for three days
                const today = new Date();
                const todayStr = today.toLocaleString().slice(0, 10);
                const tomorrow = new Date(today.setDate(today.getDate() + 1));
                const tomorrowStr = tomorrow.toLocaleString().slice(0, 10);
                const tomorrowPlus1 = new Date(tomorrow.setDate(tomorrow.getDate() + 1));
                const tomorrowPlus1Str = tomorrowPlus1.toLocaleString().slice(0, 10);

                const time06 = "T06:00:00Z";

                // t = temperature
                // ws = windspeed
                //wsymb = weathersymbol

                // To get the right info from SMHI
                // General
                data.timeSeries.map(listItem => {
                    const { validTime, parameters } = listItem;
                    //temp
                    let temperature = parameters.filter(element => {
                        return element.name === "t"
                    })[0].values[0];
                    let windspeed = parameters.filter(element => {
                        return element.name === "ws"
                    })[0].values[0];
                    //skriv ut denna data!!
                    // console.log(listItem)



                    //test för att få ut rätt timmar!!




                    if (validTime.startsWith(tomorrowStr) && validTime.endsWith(time06)) {
                        tomorrowTemp06.push(temperature)
                    }

                    console.log(tomorrowTemp06)






                    //today temp
                    if (validTime.startsWith(todayStr)) {
                        tempNow.push(temperature);
                        //tomorrow temp
                    } else if (validTime.startsWith(tomorrowStr)) {
                        tempTomorrow.push(temperature);
                    } else if (validTime.startsWith(tomorrowPlus1Str)) {
                        tempTomorrowPlus1.push(temperature);
                    }



                });
                // console.log(tempNow)
                // console.log(tempTomorrow)





                //     this.setState({
                //         city: data.city.name,
                //         country: data.city.country,
                //         tempNow: Math.round(data.list[0].main.temp),
                //         iconNow: data.list[0].weather[0].icon,
                //         humidity: data.main.humidity,
                //         wind: Math.round(data.list.wind.speed)
                // })
            })
            .catch((error) => console.log(error));
    };


    // tempNow
    // iconNow
    // todayTemp00
    // todayTemp06
    // todayTemp12
    // todayTemp18
    // todayTemp00
    // tomorrowTemp00
    // tomorrowTemp06
    // tomorrowTemp12
    // tomorrowTemp18
    // tomorrowTemp00

    // wind?
    // rain?





    // renderWeather() {
    //     return this.state.city;
    // }

    // render() {
    //     const {
    //         city,
    //         country,
    //         temperature,
    //         humidity,
    //         wind
    //     } = this.state


    render() {
        return (
            <div> Hej
                < span className='city' > {this.props.city}</span >
                <span className='city'></span>

                <span></span>
            </div >
        )
    };
}
export default Vader;



