import { NavLink, Link } from "react-router-dom";
import React from "react";
import "styles/App.css";
import { ReactComponent as Search_icon } from "styles/serach.svg";
const Gnb = () => (
  <div className="gnb_area">
    <div id="gnb_container">
      <ul className="gnb_list">
        <li className="gnb_item">
          <NavLink to="/" className="gnb_link" activestyle="gnb_link.active">
            HOME
          </NavLink>
        </li>
        <li className="gnb_item">
          <NavLink
            to="/item"
            className="gnb_link"
            activestyle="gnb_link.active"
          >
            STYLE
          </NavLink>
        </li>
        <li className="gnb_item">
          <NavLink
            to="/shop"
            className="gnb_link"
            activestyle="gnb_link.active"
          >
            SHOP
          </NavLink>
        </li>
      </ul>
    </div>
    <div style={{ display: "flex", width: "28px", height: "28px" }}>
      <Link to="/search" style={{ display: "inherit" }}>
        <Search_icon />
      </Link>
    </div>
  </div>
);

export default Gnb;
