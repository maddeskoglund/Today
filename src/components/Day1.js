import React from "react";
import { Component } from "react";
import Vader from './Testvader'

export class Day1 extends Component {
    render() {
        return (
            <div>
                {this.props.todayTemp09}
            </div>
        )
    }
}