import React from "react";
import { Link } from "react-router-dom";

const Top = () => {
  return (
    <div className="top_inner">
      <ul className="top_list">
        <li className="top_item">
          <Link to="/notice" className="top_link">
            고객센터
          </Link>
        </li>
        <li className="top_item">
          <Link to="/my" className="top_link">
            마이페이지
          </Link>
        </li>
        <li className="top_item">
          <Link to="/saved" className="top_link">
            관심
          </Link>
        </li>
        <li className="top_item">
          <Link to="/notifications" className="top_link">
            알림
          </Link>
        </li>
        <li className="top_item">
          <Link to="/login" className="top_link">
            로그인
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Top;
