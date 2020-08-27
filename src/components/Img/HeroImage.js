import React from "react";
import HeroViewImage from "../../assets/images/Icons/HeroImage.png";
import "./Images.css";
const HeroImage = () => {
  return (
    <div className="what-we-do__container">
      <img
        className="what-we-do__hackerthons what-we-do__img"
        src={HeroViewImage}
        alt="test"
      />
    </div>
  );
};

export default HeroImage;
