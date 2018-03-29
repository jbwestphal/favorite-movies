import React from 'react';
import styled from "styled-components";

import Navigation from '../Navigation';
import NavigationUser from '../NavigationUser';
import Search from '../Search';
import logo from './logo.png';

const Header = (props) =>
  <StyledHeader className="header">
    <h1 className="header-logo"><img src={logo} alt="Favorite Movies" /></h1>
    <Navigation />
    <NavigationUser />
  </StyledHeader>

// Styles
const StyledHeader = styled.header`
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  padding: 20px;
  position: fixed;
  letter-spacing: 1px;
  align-items: center;
  justify-content: space-between;
`;

export default Header;
