import React from "react";
import { useHistory } from "react-router-dom";
import "./button.css";

const BaseButton = ({
  btnData: { className, content, href, page, mailTo },
}) => {
  console.log(page);
  const history = useHistory();
  const hackerthons = () => {
    history.push("/learn_more/hackerthons");
    history.go("/learn_more/hackerthons");
  };
  const bootcamps = () => {
    history.push("/learn_more/bootcamp");
    history.go("/learn_more/bootcamps");
  };
  const schoolClubs = () => {
    history.push("/learn_more/school_clubs");
    history.go("/learn_more/school_clubs");
  };

  if (page) {
    if (page.hackerthonsBool) {
      return (
        <button onClick={hackerthons} className={className}>
          {content}
        </button>
      );
    }
    if (page.bootcampsBool) {
      return (
        <button onClick={bootcamps} className={className}>
          {content}
        </button>
      );
    } else {
      return (
        <button onClick={schoolClubs} className={className}>
          {content}
        </button>
      );
    }
  } else if (href) {
    return (
      <a href={href} className={className}>
        {content}
      </a>
    );
  } else {
    return (
      <a href={mailTo} className={className}>
        {content}
      </a>
    );
  }
};

export default BaseButton;
