import React from "react";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <div style={{ marginLeft: "350px", paddingTop: "20px" }}>
      <NavLink to="/" className="nav_item" activestyle="nav_item.active">
        추천
      </NavLink>
      <NavLink to="/rank" className="nav_item" activestyle="nav_item.active">
        랭킹
      </NavLink>
      <NavLink to="/lux" className="nav_item" activestyle="nav_item.active">
        럭셔리
      </NavLink>
      <NavLink to="/man" className="nav_item" activestyle="nav_item.active">
        남성
      </NavLink>
      <NavLink to="/woman" className="nav_item" activestyle="nav_item.active">
        여성
      </NavLink>
      <NavLink
        to="/discover"
        className="nav_item"
        activestyle="nav_item.active"
      >
        발견
      </NavLink>
    </div>
  );
};

export default NavBar;
