import React from "react";
import "./Button.css";

const BaseButton = ({ btnData: { className, content } }) => {
  return <button className={className}>{content}</button>;
};

export default BaseButton;
