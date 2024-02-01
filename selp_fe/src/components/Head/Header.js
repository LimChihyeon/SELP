import React from "react";
import Gnb from "./Gnb";
import Top from "./Top";
import Logo from "./Logo";
import NavBar from "./NavBar";
import { Routes, Route } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <div className="header_fixed">
        <div className="header_top">
          <Top />
        </div>
        <div className="header_main">
          <div className="main_inner">
            <Logo />
            <div className="center" />
            <div className="right">
              <Gnb />
            </div>
          </div>
        </div>

        <div className="header_portal">
          <Routes>
            <Route exact path="/" element={<NavBar />} />
            <Route path="/home/*" element={<NavBar />} />
          </Routes>
        </div>
        <hr />
      </div>
    </header>
  );
};

export default Header;
