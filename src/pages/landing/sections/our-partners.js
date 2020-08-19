import React from "react";
import ImageComp from "../../../components/Img/imageComp.js";
import OpenEnergyLabs from "../../../components/Img/open-energy-labs.js";
import GitHub from "../../../components/Img/git-hub.js";
import "../styles/our-partners.css";
import { OUR_PARTNERS } from "../../../data/constants.js";
const OurPartners = () => {
  return (
    <div className="our-partners__container">
      <div className="our-partners__title">
        <h2>{OUR_PARTNERS.title}</h2>
      </div>
      <div>
        <ImageComp imgSrc={<OpenEnergyLabs />} />
      </div>
      <div>
        <ImageComp imgSrc={<GitHub />} />
      </div>
    </div>
  );
};

export default OurPartners;
