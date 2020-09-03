import React from "react";
import { NAV_LIST } from "../../data/constants";
import "./nav-list.css";
const NavList = ({ className }) => {
  return (
    <div>
      <div className={className}>
        {NAV_LIST.map((a) => (
          <a href={a.page.link}> {a.page.title}</a>
        ))}
      </div>
    </div>
  );
};

export default NavList;
