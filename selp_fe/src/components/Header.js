import { NavLink } from 'react-router-dom';
import React from 'react';
import '../styles/App.css';
import Logo from '../styles/logo.png';

const Header = () => {
  return (
    <header>
      <div style={{ display: 'flex', alignItems: 'center'}}>
        <div style={{marginRight : 'auto', marginLeft : '350px'}}><img src = {Logo} alt="logo" className="top_logo"/></div>
        <div style={{ marginLeft: 'auto', marginRight : '350px' }}>
          <NavLink to="/" className="top_item" activestyle="top_item.active">HOME</NavLink>
          <NavLink to="/item" className="top_item" activestyle="top_item.active">STYLE</NavLink>
          <NavLink to="/shop" className="top_item" activestyle="top_item.active">SHOP</NavLink>
        </div>
      </div>
      <hr/>
    </header>
  );
}

export default Header;
