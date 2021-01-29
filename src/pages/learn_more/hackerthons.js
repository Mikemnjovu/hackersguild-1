import React, { useContext } from "react";
import Hackerthons from "../../assets/images/pngs/hackerthons.png";
import ImageComp from "../../components/Img/image-componet";
import "./learn-more.css";
import { WHAT_WE_DO } from "../../data/constants";
import { NavContext } from "../../data/state/nav-state";
import { scrollToTop } from "../../utils/scroll-to-top";
const HackerthonsPage = () => {
  // * Sroll to top on render
  scrollToTop();

  const [navShowState, setNavShowState] = useContext(NavContext);
  // setNavShowState(false);

  setNavShowState(false);
  console.log("hackerthons", navShowState);

  const {
    hackerthons: { title, discription },
  } = WHAT_WE_DO;
  return (
    <div className="learn_more__conatiner">
      <div className="learn_more__text">
        <h1>{title} </h1>
        <p>{discription}</p>

        {/* Button */}
        {/* <BaseButton
          btnData={{
            content: pageButton,
            className: 'btn__normal',
          }}
        /> */}
      </div>
      <div className="learn_more__image">
        <ImageComp imgSrc={Hackerthons} className={"learn_more__image"} />
      </div>
    </div>
  );
};

export default HackerthonsPage;
