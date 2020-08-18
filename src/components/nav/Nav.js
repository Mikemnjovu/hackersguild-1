import React from "react";
import hGLogo from "../../assets/images/HGLogo.png";
import menu from "../../assets/images/pngs/menu.png";
import { NAV } from "../../data/constants";
import "./nav.css";
import BaseButton from "../button/baseButton";
const Nav = () => {
  console.log(NAV.button);
  return (
    <div className="nav">
      <div className="nav__brand">
        <img className="nav__logo" src={hGLogo} alt="hackers guild logo" />
      </div>
      <div className="nav-container__list">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#" className="nav__link">
              Home
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Services
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Our work
            </a>
          </li>
          <li className="nav__item">
            <BaseButton btnData={NAV.button} />
          </li>
        </ul>
      </div>
      <div className="nav__menu">
        <button className="nav__button">
          <img src={menu} alt="menu" />
        </button>
      </div>
    </div>
  );
};

export default Nav;
