import React from "react";
import { Component } from "react";

export class Test extends Component {
  //   currentDate(function) {
  //     var day = new Date().getDay();
  //     var date = new Date().getDate();
  //     var month = new Date().getMonth();
  //     return currentDate({ day } + "," + { date } + " " + { month });
  //   };

  render() {
    return (
      <div>
        <span>
          {new Date().getDay()}, {new Date().getDate()}{" "}
          {formatMonth(new Date().getMonth())}
        </span>
      </div>
    );
  }
}

export default Test;

var monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

function formatMonth(m) {
  m = parseInt(m, 10);

  if (m < 0) {
    m = 0;
  } else if (m > 11) {
    m = 11;
  }
}

// (function(){
// 'use strict';

// document.addEventListener('DOMContentLoaded', function(){
// 	var currentTime = document.getElementById('current-time'),
// 		currentDate = document.getElementById('current-date');

// 	setInterval(function() {
// 		var d = new Date();

//         var day = d.getDay(),
//             date = d.getDate(),
// 			month = monthNames(d.getMonth()),

// 		currentDate.textContent = day + ', ' + month + ' ' + date;
// 	}, 1000);

// 		var monthNames = [
// 			'January', 'February', 'March',
// 			'April', 'May', 'June',
// 			'July', 'August', 'September',
// 			'October', 'November', 'December'
// 		];

// 		return monthNames[m];
// 	}
// });

// })()
