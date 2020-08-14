import React from "react";
import "../styles/WhatWeDo.css";
import { SECTIONS, WHAT_WE_DO } from "../../../data/constants";
import WhatWeDoItem from "../../../components/WhatWeDoItem/WhatWeDoItem";
import Hackerthon from "../../../components/Img/Hackerthons";
import SchoolClubs from "../../../components/Img/SchoolClubs";

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
