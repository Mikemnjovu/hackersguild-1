import React from "react";
import BaseButton from "../button/baseButton";

const WhatWeDoItem = (props) => {
  const { img } = props;
  const { title, discription, button } = props.props;

  return (
    <div>
      <div className="what-we-do__">
        <div className="">{img}</div>
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
