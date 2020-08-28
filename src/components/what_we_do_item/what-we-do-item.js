import React from "react";
import BaseButton from "../button/base-button";
import ImageComp from "../Img/image-componet";

const WhatWeDoItem = (props) => {
  const { img } = props;
  const { title, discription, button } = props.props;

  return (
    <div>
      <div className="what-we-do__">
        <div className="what-we-do__img">
          <ImageComp
            imgSrc={img}
            className={"what-we-do__hackerthons what-we-do__img"}
          />
        </div>
        <div className="what-we-do__title">
          <h3>{title}</h3>
        </div>
        <div className="what-we-do__discription">
          <p>{discription}</p>
        </div>
        <div className="what-we-do__button">
          <BaseButton btnData={button} />
        </div>
      </div>
    </div>
  );
};

export default WhatWeDoItem;
