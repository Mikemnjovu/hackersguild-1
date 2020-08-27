import React from "react";
import "../styles/global-styles.css";
import NavBar from "../components/nav_bar/nav-bar";
import HeroView from "./landing/sections/hero-view";
import WhatWeDo from "./landing/sections/what-we-do";
import OutPartners from "./landing/sections/our-partners";
import Getintouch from "./landing/sections/get-in-touch";
function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroView />
      <WhatWeDo />
      <OutPartners />
      <Getintouch />
    </div>
  );
}

export default App;
