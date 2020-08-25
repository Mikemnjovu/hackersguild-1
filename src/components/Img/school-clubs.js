import React from "react";
import SchoolClub from "../../assets/images/pngs/SchoolClub.png";
import "./Images.css";

const SchoolClubs = () => {
  return (
    <div className="what-we-do__container">
      <img
        className="what-we-do__img what-we-do__school-clubs "
        src={SchoolClub}
        alt="test"
      />
    </div>
  );
};

export default SchoolClubs;
