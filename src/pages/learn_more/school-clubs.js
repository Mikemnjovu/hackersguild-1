import React, { useContext } from "react";
import SchoolClubs from "../../assets/images/pngs/school-club.png";
import ImageComp from "../../components/Img/image-componet";
import "./learn-more.css";
import { WHAT_WE_DO } from "../../data/constants";
import { NavContext } from "../../data/state/nav-state";
import { scrollToTop } from "../../utils/scroll-to-top";
const SchoolClubsPage = () => {
  // * Sroll to top on render
  scrollToTop();
  const [navShowState, setNavShowState] = useContext(NavContext);
  // setNavShowState(false);

  // * Setting the nav-bar state to flase
  setNavShowState(false);
  console.log("school-club", navShowState);

  const {
    schoolClubs: { title, discription },
  } = WHAT_WE_DO;
  return (
    <div className="learn_more__conatiner">
      <div className="learn_more__text">
        <h1>{title} </h1>
        <p>{discription}</p>
        <div className="learn_more__button">
          {/* Button */}
          {/* <BaseButton
            btnData={{
              content: pageButton,
              className: 'btn__normal',
            }}
          /> */}
        </div>
      </div>
      <div className="learn_more__image">
        <ImageComp imgSrc={SchoolClubs} className={"learn_more__image"} />
      </div>
    </div>
  );
};

export default SchoolClubsPage;
