import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled from "styled-components";

import SignOutButton from '../SignOut';
import * as routes from '../../constants/routes';
import { red, green } from "../../utils/colors";

const Navigation = (props) =>
  <StyledNav>
    <NavList>
      <NavListItem><Link activeClassName="active" exact="true" to={routes.LANDING}>Home</Link></NavListItem>
      <NavListItem><Link activeClassName="active" to={routes.MOVIES}>Movies</Link></NavListItem>
      <NavListItem><Link activeClassName="active" exact="true" to={routes.FAQ}>FAQ</Link></NavListItem>
      <NavListItem><Link activeClassName="active" exact="true" to={routes.CONTACT}>Contact</Link></NavListItem>
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

  & a {
    padding-bottom: 6px;
    position: relative;

    &:before {
      left: 50%;
      bottom: 0;
      width: 0;
      height: 2px;
      content: '';
      position: absolute;
      background: ${green};
      transition: all ease-in-out 0.3s;
      transform: translate(-50%,0);
    }
  }

  &:hover,
  & .active {
    color: #fff;
    a:before,
    &:before {
      width: 100%;
    }
  }

`;

export default Navigation;
