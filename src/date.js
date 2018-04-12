import React from "react";
import { Component } from "react";

export class Today extends Component {
  render() {
    const monthNames = [
      "Januari",
      "Februari",
      "Mars",
      "April",
      "Maj",
      "Juni",
      "Juli",
      "Augusti",
      "September",
      "Oktober",
      "November",
      "December"
    ];

    const dayNames = [
      "Måndag",
      "Tisdag",
      "Onsdag",
      "Torsdag",
      "Fredag",
      "Lördag",
      "Söndag"
    ];

    const theDay = new Date();
    const datum = theDay.getDate();
    const veckodag = dayNames[theDay.getDay() - 1];
    const month = monthNames[theDay.getMonth()];

    return (
      <div>
        <span className="day">
          {veckodag}, {datum} {month}
        </span>
      </div>
    );
  }
}

export default Today;
