import React from "react";
import Gnb from "./Gnb";
import Logo from "./Logo";
import Top from "./Top";
import NavBar from "./NavBar";
const Header = () => {
  return (
    <header>
      <Top />

      <div style={{ display: "flex", alignItems: "center" }}>
        <Logo />
        <Gnb />
      </div>
      <NavBar />
      <hr />
    </header>
  );
};

export default Header;
