import React from "react";
import "../styles/get-in-touch.css";
import { GET_IN_TOUCH } from "../../../data/constants";
import BaseButton from "../../../components/button/base-button";
import Getintouchimg from "../../../assets/images/pngs/Get-in-touch.png";
const Getintouch = () => {
  const {
    title,
    decription,
    button: { className, content },
  } = GET_IN_TOUCH;
  console.log(title, decription, className, content);
  return (
    <div className="get-in-touch__container">
      <div className="get-in-touch__img">
        <img src={Getintouchimg} />
      </div>
      <div className="get-in-touch-text--container">
        <div className="get-in-touch__title">
          <h1>{title}</h1>
        </div>
        <div className="get-in-touch__description">
          <p>{decription}</p>
        </div>
        <div className="get-in-touch__button">
          <BaseButton btnData={GET_IN_TOUCH.button} />
        </div>
      </div>
    </div>
  );
};

export default Getintouch;
