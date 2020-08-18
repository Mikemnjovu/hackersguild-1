import React from "react";
import "./button.css";

const BaseButton = ({ btnData: { className, content } }) => {
  return <button className={className}>{content}</button>;
};

export default BaseButton;
