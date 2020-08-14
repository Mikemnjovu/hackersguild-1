import React from "react";
import { LANDING_IMAGE_DATA } from "../../../data/constants";
import "../styles/LandingView.css";
import BaseButton from "../../../components/button/baseButton";
const LandingView = () => {
  const { title, content } = LANDING_IMAGE_DATA;

  return (
    <div className="landing">
      <div className="landing__title">
        <h2>{title}</h2>
      </div>
      <div className="landing__content">
        <p>{content}</p>
      </div>
      <div>
        <BaseButton btnData={LANDING_IMAGE_DATA.button} />
      </div>
    </div>
  );
};

export default LandingView;
