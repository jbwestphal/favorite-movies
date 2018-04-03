import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import FontAwesome from 'react-fontawesome';
import styled from "styled-components";

import Button from '../_elements/Button';
import SignOutButton from '../SignOut';
import * as routes from '../../constants/routes';
import Dropdown from '../_elements/Dropdown';

const NavigationUser = (props, { authUser }) =>
  <nav>
    {authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />
    }
  </nav>

const items = [
  {
    id: 1,
    element: () => <Link to={routes.HOME}><FontAwesome name="film" /> My List</Link>
  },
  {
    id: 2,
    element: () => <Link to={routes.ACCOUNT}><FontAwesome name="user" /> My Account</Link>
  },
  {
    id: 3,
    element: () => <SignOutButton />
  }
];

const NavigationAuth = () =>
  <Dropdown
    title="Account"
    items={items}
  />

const NavigationNonAuth = () =>
  <NavUnlogged className="header-unlogged">
    <li><Link className="btn btn-sm" to={routes.SIGN_IN}><Button>Sign In</Button></Link></li>
    <li><Link className="btn btn-sm" to={routes.SIGN_UP}><Button>Register</Button></Link></li>
  </NavUnlogged>

NavigationUser.contextTypes = {
  authUser: PropTypes.object,
};

export default NavigationUser;

// Styles
const NavUnlogged = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  & li {
    margin-left: 15px;
  }
`;
