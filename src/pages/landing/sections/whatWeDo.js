import React from "react";
import "../styles/whatWeDo.css";
import { SECTIONS, WHAT_WE_DO } from "../../../data/constants";
import WhatWeDoItem from "../../../components/whatWeDoItem/whatWeDoItem";
import Hackerthon from "../../../components/Img/hackerthons";
import SchoolClubs from "../../../components/Img/schoolClubs";

const WhatWeDo = () => {
  const { hackerthons, bootCamps, schoolClubs } = WHAT_WE_DO;
  const whatWeDo = SECTIONS.firsSection;

  return (
    <div className="what-we-do">
      <div className="what-we-do__section__title">
        <h1>{whatWeDo}</h1>
      </div>
      <WhatWeDoItem props={hackerthons} img={<Hackerthon />} />
      <WhatWeDoItem props={bootCamps} img={<Hackerthon />} />
      <WhatWeDoItem props={schoolClubs} img={<SchoolClubs />} />
    </div>
  );
};

export default WhatWeDo;
