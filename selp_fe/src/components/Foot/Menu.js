import React from "react";
import "styles/App.css";
import MenuModal from "./MenuModal";

const Menu = () => {
    return (
        <div className="menu">
            <div className="menu_box">
                <div className="menu_title">이용안내</div>
                <MenuModal text="검수기준" content="검수기준 내용"/>
                <MenuModal text="이용정책"/>
                <MenuModal text="페널티 정책"/>
                <MenuModal text="커뮤니티 가이드라인"/>
            </div>
            <div className="menu_box">
                <div className="menu_title">고객지원</div>
            </div>
        </div>
    );
};

export default Menu;