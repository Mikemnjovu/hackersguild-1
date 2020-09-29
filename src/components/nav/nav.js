import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import hGLogo from "../../assets/images/HGLogo.png";
import menu from "../../assets/images/pngs/menu.png";
import { NAV } from "../../data/constants";
import "./nav.css";
import BaseButton from "../button/base-button";
import NavList from "../nav-list/nav-list";
const Nav = () => {
  const [menuShow, setMenushow] = useState(false);
  const buttonMenuHandler = () => {
    setMenushow(!menuShow);
    console.log(menuShow);
  };
  const menuItems = () => {
    return (
      <div className="nav-container__list">
        <ul className="nav__list">
          <li className="nav__item">
            <NavList className={"nav__list"} />
          </li>
          <li className="nav__item">
            <BaseButton btnData={NAV.button} />
          </li>
        </ul>
      </div>
    );
  };
  // console.log(menuShow);
  const history = useHistory();

  const backToHome = () => {
    history.push("/");
    history.go("/");
  };
  return (
    <div className="nav">
      <div className="nav__branding_menu">
        <div className="nav__brand">
          <a href="/" onClick={backToHome}>
            <img className="nav__logo" src={hGLogo} alt="hackers guild logo" />
          </a>
        </div>
        <div className="nav__web_view">{menuItems()}</div>

        <div className="nav__menu">
          <button onClick={buttonMenuHandler} className="nav__button">
            <img src={menu} alt="menu" />
          </button>
        </div>
      </div>
      <div className="nav__web_moblie">{menuShow ? menuItems() : ""}</div>
    </div>
  );
};

export default Nav;
