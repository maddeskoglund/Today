import Bars from "react-icons/lib/fa/bars";
import Calendar from "react-icons/lib/fa/calendar";
import Arrow from "react-icons/lib/ti/arrow-right";
import mood from "./mood-sun1.gif";

const Header = () => (
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
    <div className="mood-container">
      <div>
        <img src={mood} className="img-mood" alt="mood-image" />
      </div>

      <div className="kalender">
        <span> kalender</span>
        <Calendar />
      </div>
    </div>
  </div>
);

export default Header;
