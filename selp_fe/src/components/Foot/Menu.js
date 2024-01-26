import React from "react";
import { Link } from "react-router-dom";
import "styles/App.css";

const Menu = () => {
    return (
        <menu>
            <div className="menu_box">
                <div className="menu_title">
                    이용안내
                    <div className="menu_item">
                        <Link to="/" className="menu_link">검수기준</Link>
                    </div>
                    <div className="menu_item">
                        <Link to="/" className="menu_link">이용안내</Link>
                    </div>
                    <div className="menu_item">
                        <Link to="/" className="menu_link">패널티 정책</Link>
                    </div>
                    <div className="menu_item">
                        <Link to="/" className="menu_link">커뮤니티 가이드라인</Link>
                    </div>
                </div>
            </div>
        </menu>
    );
};

export default Menu;