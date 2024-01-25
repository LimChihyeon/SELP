import React from "react";
import Gnb from "./Gnb";
import Logo from "./Logo";
const Header = () => {
  return (
    <header>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Logo />
        <Gnb />
      </div>
      <hr />
    </header>
  );
};

export default Header;
