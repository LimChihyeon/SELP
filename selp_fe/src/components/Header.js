import React from "react";
import Gnb from "./Gnb";
import Logo from "./Logo";
import Top from "./Top";

const Header = () => {
  return (
    <header>
      <Top />

      <div style={{ display: "flex", alignItems: "center" }}>
        <Logo />
        <Gnb />
      </div>
      <hr />
    </header>
  );
};

export default Header;
