import React from "react";
// import Render from "react-dom";
import Bars from "react-icons/lib/fa/bars";
// import Calendar from "react-icons/lib/fa/calendar";
import Arrow from "react-icons/lib/ti/arrow-right";

export const Header = () => (
  <div>
    <div className="header">
      <span className="bars">
        {" "}
        <Bars />{" "}
      </span>
      <span className="arrow">
        {" "}
        <Arrow />{" "}
      </span>
    </div>

    {/* <div className="kalender">
        <span> kalender</span>
        <Calendar />
      </div> */}
  </div>
);

export default Header;
