import React from "react";
import { useHistory } from "react-router-dom";
import "./button.css";

const HackerthonsBtn = ({ btnData: { className, content, page } }) => {
  console.log(page);
  const history = useHistory("");
  const hackerthons = () => {
    history.push("/learn_more/hackerthons");
    history.go("/learn_more/hackerthons");
  };

  return (
    <button onClick={hackerthons} className={className}>
      {content}
    </button>
  );
};

export default HackerthonsBtn;
