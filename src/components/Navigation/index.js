import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import SignOutButton from '../SignOut';
import * as routes from '../../constants/routes';

const Navigation = (props, { authUser }) =>
  <nav className="header-nav">
    { authUser
        ? <NavigationAuth />
        : <NavigationNonAuth />
    }
  </nav>

Navigation.contextTypes = {
  authUser: PropTypes.object,
};

const NavigationAuth = () =>
  <ul className="header-nav-list">
    <li><Link to={routes.LANDING}>Home</Link></li>
    <li><Link to={routes.HOME}>Movies</Link></li>
    <li><Link to={routes.LANDING}>FAQ</Link></li>
    <li><Link to={routes.LANDING}>Contact</Link></li>
    <li><Link to={routes.ACCOUNT}>Account</Link></li>
    <li><SignOutButton /></li>
  </ul>

const NavigationNonAuth = () =>
  <ul className="header-nav-list">
    <li><Link to={routes.LANDING}>Home</Link></li>
    <li><Link to={routes.LANDING}>Movies</Link></li>
    <li><Link to={routes.LANDING}>FAQ</Link></li>
    <li><Link to={routes.LANDING}>Contact</Link></li>
    <li className="header-nav-login"><Link className="btn btn-sm" to={routes.SIGN_IN}>Sign In</Link></li>
    <li className="header-nav-register"><Link className="btn btn-sm" to={routes.SIGN_IN}>Register</Link></li>
  </ul>

export default Navigation;
