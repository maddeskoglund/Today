import React from "react";
import { Component } from "react";
import Vader from './Testvader'
import "../App.css";


export class Day1 extends Component {
    render() {
        return (
            <div>
                <div className='invcontainer09'>
                    <span className='content'> {this.props.tomorrowTemp09} </span>

                </div>



                {/* {this.state.tomorrowTemp09} */}
                {/* < span className='city' > {this.state.tomorrowTemp09}</span > */}

            </div>
        )
    }
}

export default Day1;