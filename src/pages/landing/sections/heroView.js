import React from "react";
import { LANDING_IMAGE_DATA } from "../../../data/constants";
import HeroImage from "../../../components/Img/HeroImage";
import "../styles/heroView.css";
import BaseButton from "../../../components/button/baseButton";
import ImageComp from "../../../components/Img/imageComp";
const HeroView = () => {
  const { title, content } = LANDING_IMAGE_DATA;

  return (
    <div className="hero">
      <div className="hero__text">
        <div>
          <h2 className="hero__title">{title}</h2>
        </div>
        <div className="hero__content">
          <p>{content}</p>
        </div>
        <div>
          <BaseButton btnData={LANDING_IMAGE_DATA.button} />
        </div>
        <div>
          <ImageComp imgSrc={<HeroImage />} />
        </div>
      </div>
    </div>
  );
};

export default HeroView;
