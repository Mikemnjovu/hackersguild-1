import React from "react";
import "../styles/global.styles.css";
import NavBar from "../components/NavBae/NavBar";
import LandingView from "./landing/sections/LandingView";
import WhatWeDo from "./landing/sections/WhatWeDo";

function App() {
  return (
    <div className="App">
      <NavBar />
      <LandingView />
      <WhatWeDo />
    </div>
  );
}

export default App;
