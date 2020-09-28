import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../styles/global-styles.css";
import NavBar from "../components/nav_bar/nav-bar";
import Footer from "./landing/sections/footer";
import LandingPage from "./landing/landing-page";
import LearnMore from "./learn_more/learn-more";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/learn_more" component={LearnMore} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
