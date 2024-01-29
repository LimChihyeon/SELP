import React from "react";
import { Link } from "react-router-dom";
import "styles/App.css";
import MenuItems from "./Modal";

const Menu = () => {
    return (
        <div className="menu_box">
            <div className="menu_title">이용안내</div>
            <MenuItems />
        </div>
    );
};



export default Menu;