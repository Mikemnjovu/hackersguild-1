import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HeroView from "./sections/hero-view";
import WhatWeDo from "./sections/what-we-do";
import OutPartners from "./sections/our-partners";
import Getintouch from "./sections/get-in-touch";
function LandingPage() {
  return (
    <div className="">
      <HeroView />
      <WhatWeDo />
      <OutPartners />
      <Getintouch />
    </div>
  );
}

export default LandingPage;
