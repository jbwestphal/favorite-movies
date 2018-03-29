import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
// import FontAwesome from 'react-fontawesome';
import styled from "styled-components";

import SignOutButton from '../SignOut';
import * as routes from '../../constants/routes';

const Navigation = (props, { authUser }) =>
  <StyledNav>
    <NavList>
      <NavListItem><Link to={routes.LANDING}>Home</Link></NavListItem>
      <NavListItem><Link to={routes.LANDING}>Movies</Link></NavListItem>
      <NavListItem><Link to={routes.LANDING}>FAQ</Link></NavListItem>
      <NavListItem><Link to={routes.LANDING}>Contact</Link></NavListItem>
    </NavList>
  </StyledNav>

Navigation.contextTypes = {
  authUser: PropTypes.object,
};

// Styles
const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;

  & li {
    display: inline-block;
  }
`;

const NavList = styled.ul`
  font-size: 16px;
  text-transform: uppercase;
`;

const NavListItem = styled.li`
  margin: 0 25px;
`;

export default Navigation;
