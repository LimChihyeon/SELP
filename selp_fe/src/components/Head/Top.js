import React from "react";
import { Link } from "react-router-dom";

const Top = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginLeft: "1300px",
        paddingTop: "8px",
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
  );
};

export default Top;
