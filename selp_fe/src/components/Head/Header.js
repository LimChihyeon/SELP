import React from "react";
import Gnb from "./Gnb";
import Logo from "./Logo";
import Top from "./Top";
import NavBar from "./NavBar";
const Header = () => {
  return (
    <header>
      <div className="header_fixed">
        <div className="header_top">
          <Top />
          <div style={{ display: "flex", alignItems: "center" }}>
            <Logo />
            <Gnb />
          </div>
        </div>
        <NavBar />
        <hr />
      </div>
    </header>
  );
};

export default Header;
