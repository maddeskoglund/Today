import React from "react";
import Bars from "react-icons/lib/fa/bars";
import Arrow from "react-icons/lib/ti/arrow-forward";

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
  </div>
);

export default Header;
