import React from "react";
import HeroView from "./sections/hero-view";
import WhatWeDo from "./sections/what-we-do";
import Getintouch from "./sections/get-in-touch";
import OutPartners from "./sections/our-partners";
import "./landing-page.css";

const LandingPage = () => {
  return (
    <div>
      <div className="circle">
        <div className="circle__item"></div>
      </div>
      <HeroView />
      <WhatWeDo />
      <OutPartners />
      <Getintouch />
    </div>
  );
};

export default LandingPage;
