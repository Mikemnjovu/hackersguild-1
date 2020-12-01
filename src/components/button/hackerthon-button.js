import React from "react";
import { OnClickRouter } from "../../utils/navigation/button-on-click-router";
import "./button.css";

const HackerthonsBtn = ({ btnData: { className, content, page } }) => {
  const url = "/learn_more/hackerthons";
  return (
    <button onClick={OnClickRouter(url)} className={className}>
      {content}
    </button>
  );
};

export default HackerthonsBtn;
