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
  const bootstrap = () => {
    history.push("/learn_more/bootstrap");
    history.go("/learn_more/bootstrap");
  };
  const schoolClubs = () => {
    history.push("/learn_more/school_clubs");
    history.go("/learn_more/school_clubs");
  };

  // switch (
  //   {
  //     btnData: { className, content, href, page, mailTo },
  //   }
  // ) {
  //   case hackerthons:
  //     return (
  //       <button onClick={hackerthons = () => {
  //         history.push("/learn_more/hackerthons");
  //         history.go("/learn_more/hackerthons");
  //       }} className={className}>
  //         {content}
  //       </button>)

  //     break;
  //   default:
  //     return (
  //       <a href={mailTo} className={className}>
  //         {content}
  //       </a>
  //     );
  // }

  if (page) {
    return (
      <button onClick={hackerthons} className={className}>
        {content}
      </button>
    );
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
