import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../styles/global-styles.css";
import NavBar from "../components/nav_bar/nav-bar";
import Footer from "./landing/sections/footer";
import LandingPage from "./landing/landing-page";
import HackerthonsPage from "./learn_more/hackerthons";
import BootstrapPage from "./learn_more/bootstrap";
import SchoolClubsPage from "./learn_more/school-clubs";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/learn_more/hackerthons" component={HackerthonsPage} />
          <Route path="/learn_more/bootstrap" component={BootstrapPage} />
          <Route path="/learn_more/school_clubs" component={SchoolClubsPage} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
