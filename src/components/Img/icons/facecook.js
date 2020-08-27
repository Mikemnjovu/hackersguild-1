import React from "react";
import facebook from "../../../assets/images/Icons/facebook.png";
import "./Icons.css";
const FacebookIcon = () => {
  return (
    <div className="social__container">
      <img className="social__img" src={facebook} alt="test" />
    </div>
  );
};

export default FacebookIcon;
