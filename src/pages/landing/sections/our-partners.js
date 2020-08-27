import React from "react";
import ImageComp from "../../../components/Img/image-componet.js";
import OpenEnergyLabs from "../../../assets/images/pngs/open-energy-labs.png";
import Githublogo from "../../../assets/images/pngs/github-logo.png";
import "../styles/our-partners.css";
import { OUR_PARTNERS } from "../../../data/constants.js";
const OurPartners = () => {
  return (
    <div className="our-partners__container">
      <div className="our-partners__title">
        <h2>{OUR_PARTNERS.title}</h2>
      </div>
      <div className="our-partners__contanier--imgs">
        <ImageComp imgSrc={OpenEnergyLabs} size={"size-lg"} />
        <ImageComp imgSrc={Githublogo} />
      </div>
    </div>
  );
};

export default OurPartners;
