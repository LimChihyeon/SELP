import React from "react";
import "styles/App.css";
import { Link } from 'react-router-dom'
import MenuModal from "./MenuModal";
import Policy from "./Policy";

const Menu = () => {
    return (
        <div className="menu">
            <div className="menu_box">
                <div className="menu_title">이용안내</div>
                <MenuModal text="검수기준" modalContent={{ title: "검수기준", description: < Policy />}}/>
                <MenuModal text="이용정책" modalContent={{ title: "이용정책", description: "이용정책 내용"}} />
                <MenuModal text="페널티 정책" modalContent={{ title: "페널티 정책", description: "페널티 정책 내용"}} />
                <MenuModal text="커뮤니티 가이드라인" modalContent={{ title: "커뮤니티 가이드라인", description: "커뮤니티 가이드라인 내용"}} />
            </div>
            <div className="menu_box">
                <div className="menu_title">고객지원</div>
                <Link to="/notice" style={{ textDecoration: "none"}} className="menu_link">공지사항</Link>
                <Link to="/about" style={{ textDecoration: "none"}} className="menu_link">서비스 소개</Link>
                <Link to="/about/store/sangsu" style={{ textDecoration: "none"}} className="menu_link">스토어 안내</Link>
                <Link to="/about/seller_reception" style={{ textDecoration: "none"}} className="menu_link">판매자 방문접수</Link>
            </div>
        </div>
    );
};

export default Menu;