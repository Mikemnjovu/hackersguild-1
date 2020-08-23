import React from "react";
import Linkdin from "../../../assets/images/Icons/linkdin.png";
import "./Icons.css";
const InstagramIcon = () => {
  return (
    <div className="social__container">
      <img className="social__img" src={Linkdin} alt="test" />
    </div>
  );
};

export default InstagramIcon;
