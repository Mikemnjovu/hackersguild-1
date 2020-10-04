import React from "react";
import { useHistory } from "react-router-dom";
import "./button.css";

const BoootCampsBtn = ({
  btnData: { className, content, href, page, mailTo },
}) => {
  console.log(page);
  const history = useHistory();
  const bootcamp = () => {
    history.push("/learn_more/bootcamps");
    history.go("/learn_more/bootcamps");
  };
  return (
    <button onClick={bootcamp} className={className}>
      {content}
    </button>
  );
};

export default BoootCampsBtn;
