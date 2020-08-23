import React from "react";
import "../styles/global.styles.css";
import NavBar from "../components/navbar/navBar";
import HeroView from "./landing/sections/heroView";
import WhatWeDo from "./landing/sections/whatWeDo";
import OutPartners from "./landing/sections/our-partners";
import Getintouch from "./landing/sections/get-in-touch";
import Footer from "./landing/sections/footer";
function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroView />
      <WhatWeDo />
      <OutPartners />
      <Getintouch />
      <Footer />
    </div>
  );
}

export default App;
