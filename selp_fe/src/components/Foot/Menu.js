import React from "react";
import { Link } from "react-router-dom";
import "styles/App.css";
import MenuItems from "./Modal";

const Menu = () => {
    return (
        <menu>
            <div className="menu_title">이용안내</div>
            <MenuItems />
        </menu>
    );
};



export default Menu;