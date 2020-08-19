import React from "react";
import "../styles/global.styles.css";
import NavBar from "../components/navbar/navBar";
import HeroView from "./landing/sections/heroView";
import WhatWeDo from "./landing/sections/whatWeDo";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroView />
      <WhatWeDo />
    </div>
  );
}

export default App;
