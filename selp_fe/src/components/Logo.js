import React from "react";
import Logoimage from "../styles/logo.png";

const Logo = () => {
  return (
    <div style={{ marginRight: "auto", marginLeft: "350px" }}>
      <img src={Logoimage} alt="logo" className="top_logo" />
    </div>
  );
};

export default Logo;
