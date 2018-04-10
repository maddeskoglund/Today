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
    const veckodag = dayNames[theDay.getDay()];
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

// function currentDate() {
//     var d = new Date()

//     var day = d.getDay();
//     var date = d.getDate();
//     var month = d.getMonth();

//   currentDate = day + date + month;
// }

// export const Today = () => (
//   <div>
//     <span>{currentDate}</span>
//   </div>
// );

//   render() {
//     return (
//       <div>
//         <span>
//           {this.props.day}, {new Date().getDay()}{" "}
//           {new Date().getMonth(monthNames)}
//         </span>
//       </div>
//     );
//   }
// }

// export default Today;
