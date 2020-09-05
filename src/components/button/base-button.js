import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import "./button.css";
import App from "../../pages/index";
import LearnMore from "../../pages/learn_more/learn-more";
const BaseButton = ({ btnData: { className, content, href } }) => {
  return (
    <Router>
      <Link to="/learn_more">
        <button className={className}>{content}</button>
      </Link>
    </Router>
  );
};

export default BaseButton;
