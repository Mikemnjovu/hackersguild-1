import React from "react";
import { OnClickRouter } from "../../utils/navgation/button-on-click-router";
import "./button.css";

const SchoolClubsBtn = ({
  btnData: { className, content, href, page, mailTo },
}) => {
  const url = "/learn_more/school_clubs";

  return (
    <button onClick={OnClickRouter(url)} className={className}>
      {content}
    </button>
  );
};

export default SchoolClubsBtn;
