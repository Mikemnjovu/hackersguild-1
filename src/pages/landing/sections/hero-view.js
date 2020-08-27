import React from "react";
import { LANDING_IMAGE_DATA } from "../../../data/constants";
import HeroImage from "../../../assets/images/Icons/HeroImage.png";
import "../styles/heroView.css";
import BaseButton from "../../../components/button/base-button";
import ImageComp from "../../../components/Img/image-componet";
const HeroView = () => {
  const { title, content } = LANDING_IMAGE_DATA;

  return (
    <div className="hero">
      <div className="hero__img--one">
        <ImageComp imgSrc={HeroImage} />
      </div>
      <div className="hero__text">
        <div>
          <h2 className="hero__title">{title}</h2>
        </div>
        <div className="hero__content">
          <p>{content}</p>
        </div>
        <div className="hero__btn">
          <BaseButton btnData={LANDING_IMAGE_DATA.button} />
        </div>
      </div>
      <div className="hero__img">
        <ImageComp imgSrc={HeroImage} />
      </div>
    </div>
  );
};

export default HeroView;
