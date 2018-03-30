import React from 'react';
import styled from "styled-components";

import ScrollPosition from '../ScrollPosition';
import Navigation from '../Navigation';
import NavigationUser from '../NavigationUser';
import Search from '../Search';
import logo from './logo.png';
import './header.css';

const Header = (props) =>
  <ScrollPosition>
    { ( position ) => (
      <StyledHeader className={(position > 60) ? 'active' : ''}>
        <h1 className="header-logo"><img src={logo} alt="Favorite Movies" /></h1>
        <Navigation />
        <NavigationUser />
      </StyledHeader>
    ) }
  </ScrollPosition>

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
  z-index: 2000;
  justify-content: space-between;
  transition: all ease-in-out 0.3s;
`;

export default Header;
