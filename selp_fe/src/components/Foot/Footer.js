import React from "react";
import "styles/App.css";
import Service from "./Service";
import Menu from "./Menu";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_inner">
        <Service />
        <Menu />
      </div>
    </div>
  );
};

export default Footer;
