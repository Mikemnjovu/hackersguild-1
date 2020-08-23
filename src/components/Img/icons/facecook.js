import React from "react";
import facebook from "../../../assets/images/Icons/facebook.png";
// import "../Images.css";
// Add Css
const FacebookIcon = () => {
  return (
    <div className="what-we-do__container">
      <img
        className="what-we-do__hackerthons what-we-do__img"
        src={facebook}
        alt="test"
      />
    </div>
  );
};

export default FacebookIcon;
