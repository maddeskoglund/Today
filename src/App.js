import React, { Component } from "react";
// import Bars from "react-icons/lib/fa/bars";
// import Calendar from "react-icons/lib/fa/calendar";
// import Arrow from "react-icons/lib/ti/arrow-right";
import mood from "./mood-sun1.gif";
import "./App.css";
// import { Header } from "./components/header.js";

export class App extends Component {
  render() {
    return;
    <div className="mood-container">
      <img src={mood} className="img-mood" alt="mood-image" />
    </div>;
  }
}

// export class App extends Component {
//   render() {
//     return;

//     <div className="mood-container">
//       <img src={mood} className="img-mood" alt="mood-image" />
//     </div>;
//   }
// }

// export class App extends Component {
//   render() {
//     return (
//       <div>
//         <div className="header">
//           <span className="bars">
//             {" "}
//             <Bars />{" "}
//           </span>
//           <span className="arrow">
//             {" "}
//             <Arrow />{" "}
//           </span>
//         </div>
//         <div className="mood-container">
//           <div>
//             <img src={mood} className="img-mood" alt="mood-image" />
//           </div>

//           <div className="kalender">
//             <span> kalender</span>
//             <Calendar />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

export default App;
