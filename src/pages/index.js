import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../styles/global-styles.css";
import NavBar from "../components/nav_bar/nav-bar";
import Footer from "./landing/sections/footer";
import LandingPage from "./landing";
import LearnMore from "./learn_more/learn-more";
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <LandingPage />
        <Footer />
        <Switch>
          <Route exact path="/learn_more">
            <LearnMore />
          </Route>
          <Route path="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
