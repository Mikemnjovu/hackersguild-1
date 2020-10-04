import React from "react";
import { useHistory } from "react-router-dom";
import "./button.css";

const SchoolClubsBtn = ({
  btnData: { className, content, href, page, mailTo },
}) => {
  console.log(page);
  const history = useHistory();
  const schoolClubs = () => {
    history.push("/learn_more/school_clubs");
    history.go("/learn_more/school_clubs");
  };

  return (
    <button onClick={schoolClubs} className={className}>
      {content}
    </button>
  );
};

export default SchoolClubsBtn;
