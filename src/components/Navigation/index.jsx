import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import FontAwesome from 'react-fontawesome';
import styled from "styled-components";

import SignOutButton from '../SignOut';
import * as routes from '../../constants/routes';

const Navigation = (props, { authUser }) =>
  <nav className="header-nav">
    <NavList className="header-nav-list">
      <NavListItem><Link to={routes.LANDING}><FontAwesome name='home' /> Home</Link></NavListItem>
      <NavListItem><Link to={routes.LANDING}><FontAwesome name='film' /> Movies</Link></NavListItem>
      <NavListItem><Link to={routes.LANDING}><FontAwesome name='question-circle' /> FAQ</Link></NavListItem>
      <NavListItem><Link to={routes.LANDING}><FontAwesome name='headphones' /> Contact</Link></NavListItem>
    </NavList>

    { authUser
        ? <NavigationAuth />
        : <NavigationNonAuth />
    }
  </nav>

Navigation.contextTypes = {
  authUser: PropTypes.object,
};

const NavigationAuth = () =>
  <ul className="header-login header-logged">
    <li><Link to={routes.HOME}>My List</Link></li>
    <li><Link to={routes.ACCOUNT}>My Account</Link></li>
    <li><SignOutButton /></li>
  </ul>

const NavigationNonAuth = () =>
  <ul className="header-login header-unlogged">
    <li className="header-nav-login"><Link className="btn btn-sm" to={routes.SIGN_IN}>Sign In</Link></li>
    <li className="header-nav-register"><Link className="btn btn-sm" to={routes.SIGN_IN}>Register</Link></li>
  </ul>


// Styles
const NavList = styled.ul`
  font-size: 16px;
  text-transform: uppercase;
`;

const NavListItem = styled.li`
  display: inline-block;
  margin: 0 25px;

  & .fa {
    font-size: 24px;
    margin-right: 10px;
  }
`;

export default Navigation;
