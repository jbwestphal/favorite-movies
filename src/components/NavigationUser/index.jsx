import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
// import FontAwesome from 'react-fontawesome';
import styled from "styled-components";

import SignOutButton from '../SignOut';
import * as routes from '../../constants/routes';

const NavigationUser = (props, { authUser }) =>
  <nav>
    { authUser
        ? <NavigationAuth />
        : <NavigationNonAuth />
    }
  </nav>

NavigationUser.contextTypes = {
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
    <li className="header-nav-register"><Link className="btn btn-sm" to={routes.SIGN_UP}>Register</Link></li>
  </ul>


export default NavigationUser;
