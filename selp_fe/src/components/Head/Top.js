import React from "react";
import { Link } from "react-router-dom";

const Top = () => {
  return (

    <div style={{ display: "flex", height: "22px", padding: "8px 40px 0" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginLeft: "auto",
        }}
      >
        <Link to="/notice" className="top_item">
          고객센터
        </Link>
        <Link to="/my" className="top_item">
          마이페이지
        </Link>
        <Link to="/saved" className="top_item">
          관심
        </Link>
        <Link to="/notifications" className="top_item">
          알림
        </Link>
        <Link to="/login" className="top_item">
          로그인
        </Link>
      </div>
    </div>
  );
};

export default Top;
