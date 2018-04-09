import React from "react";

// var monthNames = [
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

// export class Today extends React.Component {
function currentDate() {
  var day = new Date().getDay();
  var date = new Date().getDate();
  var month = new Date().getMonth();
  currentDate();
}

export const Today = () => (
  <div>
    <span>{currentDate}</span>
  </div>
);

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

// const getYear = () => {
//   return new Date().getFullYear();
// };

// export const Day = ({ getYear }) => (
//   <div>
//     <span>`${getYear}`,</span>
//   </div>
// );

// export default Day;

// export class Day extends React.Component {
//   render() {
//     return (
//       <div>
//         {this.getYear}, {new Date().getDay()}, {new Date().getDate()}
//       </div>
//       //   function setDate() {
//       //     const now = new Date();
//       //     const day = now.getDay();
//       //     console.log(setDate);
//       //   };
//       // <div>{setDate}</div>;
//     );
//   }
// }

// export default Day;

// function getYear() {
//   return new Date().getFullYear();
// }

// const today = new Date();

// class Date extends Component {

//     function setDate() {
//         const now = new Date();
//         const day = now.getDay();

//     }

//     return (

//     )
// }

//     return ({formatDay} + ', ' + {dag} + ' ' + {månad})
//     //   <div>
//     //     <div className="date">{formatDay.toString()}</div>
//     //   </div>
//     );

// export default Date;

// // (function() {

// var day = formatDay(date.getDay()),
//   date = date.getDate(),
//   month = formatMonth(date.getMonth());

// function formatDay(d) {
//   d = parseInt(m, 5);

//   //   if (d < 0) {
//   //     m = 0
//   //   } else (m > 6) {
//   //   m = 6;
//   //   }

//   var dayNames = [
//     "Måndag",
//     "Tisdag",
//     "Onsdag",
//     "Torsdag",
//     "Fredag",
//     "Lördag",
//     "Söndag"
//   ];

//   return dayNames(d);
// }

// function formatMonth(m) {
//   m = parseInt(m, 10);

//   //   if (m < 0) {
//   //     m = 0;
//   //   } else if (m > 11) {
//   //     m = 11;
//   //   }

//   var monthNames = [
//     "Januari",
//     "Februari",
//     "Mars",
//     "April",
//     "Maj",
//     "Juni",
//     "Juli",
//     "Augusti",
//     "September",
//     "Oktober",
//     "November",
//     "December"
//   ];

//   return monthNames[m];
// }
