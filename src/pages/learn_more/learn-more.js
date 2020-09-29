import React from "react";
import Hackerthons from "../../assets/images/pngs/hackerthons.png";
import ImageComp from "../../components/Img/image-componet";
import "./learn-more.css";
import BaseButton from "../../components/button/base-button";
const LearnMore = () => {
  return (
    <div className="learn_more__conatiner">
      <div className="learn_more__text">
        <h1>Hackerthons </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          imperdiet finibus nulla. Fusce tempor pellentesque sollicitudin.
          Pellentesque velit lacus, varius et neque nec, fermentum elementum
          nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          Nam ultrices egestas suscipit. Donec ornare sagittis porta.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas.
        </p>
        <BaseButton
          btnData={{
            content: "Participate ",
            className: "btn__normal",
          }}
        />
      </div>
      <div className="learn_more__image">
        <ImageComp imgSrc={Hackerthons} className={"learn_more__image"} />
      </div>
    </div>
  );
};

export default LearnMore;
