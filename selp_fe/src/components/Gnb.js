import { NavLink } from "react-router-dom";
import React from "react";
import "../styles/App.css";

const Gnb = () => (
  <div style={{ marginLeft: "auto", marginRight: "350px" }}>
    <NavLink to="/" className="gnb_item" activestyle="gnb_item.active">
      HOME
    </NavLink>
    <NavLink to="/item" className="gnb_item" activestyle="gnb_item.active">
      STYLE
    </NavLink>
    <NavLink to="/shop" className="gnb_item" activestyle="gnb_item.active">
      SHOP
    </NavLink>
  </div>
);

export default Gnb;
