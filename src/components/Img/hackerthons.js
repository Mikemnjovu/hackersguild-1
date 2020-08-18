import React from "react";
import Hackerthons from "../../assets/images/pngs/Hackerthons.png";
import "./Images.css";
const Hackerthon = () => {
  return (
    <div className="what-we-do__container">
      <img
        className="what-we-do__hackerthons what-we-do__img"
        src={Hackerthons}
        alt="test"
      />
    </div>
  );
};

export default Hackerthon;
