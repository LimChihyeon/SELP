import React from "react";
import "styles/App.css";
import MenuLink from "./Modal";

const Menu = () => {
    return (
        <div className="menu">
            <div className="menu_box">
                <div className="menu_title">이용안내
                    <div className="menu_item">
                        <MenuLink text="검수기준"/>
                        <MenuLink text="이용정책"/>
                        <MenuLink text="페널티 정책"/>
                        <MenuLink text="커뮤니티 가이드라인"/>
                    </div>
                </div>
            </div>
            <div className="menu_box">
                <div className="menu_title">고객지원</div>
            </div>
        </div>
    );
};

export default Menu;