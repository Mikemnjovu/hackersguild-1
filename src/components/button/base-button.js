import React from "react";
import "./button.css";

const BaseButton = ({ btnData: { className, content, href } }) => {
  return (
    <a href={href}>
      <button className={className}>{content}</button>
    </a>
  );
};

export default BaseButton;
