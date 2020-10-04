import React from "react";
import "../styles/what-we-do.css";
import { SECTIONS, WHAT_WE_DO } from "../../../data/constants";
import WhatWeDoItem from "../../../components/what_we_do_item/what-we-do-item";
import Hackerthon from "../../../assets/images/pngs/hackerthons.png";
import Bootcamps from "../../../assets/images/pngs/bootcamps.png";
import SchoolClubs from "../../../assets/images/pngs/school-club.png";
import HackerthonsBtn from "../../../components/button/hackerthon-button";
import BoootCampsBtn from "../../../components/button/bootcamp-button";
import SchoolClubsBtn from "../../../components/button/schoolclubs-button";

const WhatWeDo = () => {
  const { hackerthons, bootCamps, schoolClubs } = WHAT_WE_DO;
  const whatWeDo = SECTIONS.firsSection;

  return (
    <div className="what-we-do" id="what-we-do">
      <div className="what-we-do__section__title">
        <h1>{whatWeDo}</h1>
      </div>
      <div className="what-we-do__item">
        <WhatWeDoItem
          props={hackerthons}
          img={Hackerthon}
          buttontype={<HackerthonsBtn />}
        />
        <WhatWeDoItem
          props={bootCamps}
          img={Bootcamps}
          buttontype={<BoootCampsBtn />}
        />
        <WhatWeDoItem
          props={schoolClubs}
          img={SchoolClubs}
          buttontype={<SchoolClubsBtn />}
        />
      </div>
    </div>
  );
};

export default WhatWeDo;
