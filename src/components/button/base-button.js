import React from "react";
import { useHistory } from "react-router-dom";
import "./button.css";

const BaseButton = ({
  btnData: { className, content, href, page, mailTo },
}) => {
  console.log(mailTo);
  const history = useHistory();
  const Hackerthons = () => {
    history.push("/learn_more");
    history.go("/learn_more");
  };
  if (mailTo) {
    return (
      <a href={mailTo} className={className}>
        {content}
      </a>
    );
  } else {
    return (
      <button onClick={Hackerthons} className={className}>
        {content}
      </button>
    );
  }
};

export default BaseButton;
