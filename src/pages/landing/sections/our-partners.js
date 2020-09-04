import React from "react";
import ImageComp from "../../../components/Img/image-componet.js";
import OpenEnergyLabs from "../../../assets/images/pngs/open-energy-labs.png";
import Githublogo from "../../../assets/images/pngs/github-logo.png";
import "../styles/our-partners.css";
import { OUR_PARTNERS } from "../../../data/constants.js";
const OurPartners = () => {
  return (
    <div className="our-partners__container" id="our-partners">
      <div className="our-partners__title">
        <h1>{OUR_PARTNERS.title}</h1>
      </div>
      <div className="our-partners__contanier--imgs">
        <ImageComp
          imgSrc={OpenEnergyLabs}
          className={"our-partners__img--component"}
          size={"size-lg"}
        />
        <ImageComp
          imgSrc={Githublogo}
          className={"our-partners__img--component"}
        />
      </div>
    </div>
  );
};

export default OurPartners;
