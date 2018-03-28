import React from 'react';

import Navigation from '../Navigation';
import Search from '../Search';
import logo from './logo.png';

const Header = (props) =>
  <header className="header">
    <h1 className="header-logo"><img src={logo} alt="Favorite Movies" /></h1>
    <Navigation />
    <Search />
  </header>

export default Header;
