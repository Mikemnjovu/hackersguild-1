import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../styles/global-styles.css";
import Footer from "../components/footer/footer";
import LandingPage from "./landing/landing-page";
import HackerthonsPage from "./learn_more/hackerthons";
import BootcampsPage from "./learn_more/bootcamps";
import SchoolClubsPage from "./learn_more/school-clubs";
import { NavSetState } from "../data/state/nav-setState";
import Nav from "../components/nav/nav";

function App() {
  NavSetState(true);
  return (
    <>
      <div className="App">
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/learn_more/hackerthons" component={HackerthonsPage} />
            <Route path="/learn_more/bootcamp" component={BootcampsPage} />
            <Route
              path="/learn_more/school_clubs"
              component={SchoolClubsPage}
            />
          </Switch>
        </Router>
        <Footer />
      </div>
    </>
  );
}

export default App;
