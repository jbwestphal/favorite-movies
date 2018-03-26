import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import SignOutButton from '../SignOut';
import * as routes from '../../constants/routes';

const Navigation = (props, { authUser }) =>
  <div>
    { authUser
        ? <NavigationAuth />
        : <NavigationNonAuth />
    }
  </div>

Navigation.contextTypes = {
  authUser: PropTypes.object,
};

const NavigationAuth = () =>
  <ul>
    <li><Link to={routes.LANDING}>Home</Link></li>
    <li><Link to={routes.HOME}>Profile</Link></li>
    <li><Link to={routes.LANDING}>Movies</Link></li>
    <li><Link to={routes.LANDING}>About</Link></li>
    <li><Link to={routes.LANDING}>Contact</Link></li>
    <li><Link to={routes.ACCOUNT}>Account</Link></li>
    <li><SignOutButton /></li>
  </ul>

const NavigationNonAuth = () =>
  <ul>
    <li><Link to={routes.LANDING}>Home</Link></li>
    <li><Link to={routes.LANDING}>Movies</Link></li>
    <li><Link to={routes.LANDING}>About</Link></li>
    <li><Link to={routes.LANDING}>Contact</Link></li>
    <li><Link to={routes.SIGN_IN}>Sign In</Link></li>
  </ul>

export default Navigation;
