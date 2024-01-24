import {Link, Route } from 'react-router-dom';
import React from 'react';

const Header = () => {
  return (
    <header>
      <Link to="/">홈</Link>
      &nbsp;&nbsp; | &nbsp;&nbsp;
      <Link to="/item">게시판</Link>
      <hr/>
    </header>
  );
}

export default Header;
