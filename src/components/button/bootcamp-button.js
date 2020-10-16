import React from "react";
import { OnClickRouter } from "../../utils/navgation/button-on-click-router";
import "./button.css";

const BoootCampsBtn = ({
  btnData: { className, content, href, page, mailTo },
}) => {
  console.log(page);
  const url = "/learn_more/bootcamps";

  return (
    <button onClick={OnClickRouter(url)} className={className}>
      {content}
    </button>
  );
};

export default BoootCampsBtn;
