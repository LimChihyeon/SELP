import React from "react";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="tabs">
      <ul className="home_tabs">
        <li className="li_tabs"></li>
        <NavLink to="/" className="nav_item" activestyle="nav_item.active">
          <span className="tab_name"> 추천 </span>
        </NavLink>
        <NavLink to="/rank" className="nav_item" activestyle="nav_item.active">
          <span className="tab_name"> 랭킹 </span>
        </NavLink>
        <NavLink to="/lux" className="nav_item" activestyle="nav_item.active">
          <span className="tab_name">럭셔리 </span>
        </NavLink>
        <NavLink to="/man" className="nav_item" activestyle="nav_item.active">
          <span className="tab_name">남성</span>
        </NavLink>
        <NavLink to="/woman" className="nav_item" activestyle="nav_item.active">
          <span className="tab_name">여성</span>
        </NavLink>
        <NavLink
          to="/discover"
          className="nav_item"
          activestyle="nav_item.active"
        >
          <span className="tab_name">발견</span>
        </NavLink>
      </ul>
    </nav>
  );
};

export default NavBar;
