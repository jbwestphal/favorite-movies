import React from 'react';
import styled from "styled-components";
import FontAwesome from 'react-fontawesome';

import { auth } from '../../firebase';

const SignOutButton = () =>
  <WrapperButton>
    <button
      type="button"
      onClick={auth.doSignOut}
    >
      <FontAwesome name="sign-out" />
      Sign Out
    </button>
  </WrapperButton>

const WrapperButton = styled.div`
  & button {
    font-size: inherit;
    color inherit;
    font-weight: inherit;
    border: none;
    outline: none;
    cursor: pointer;
    width: 100%;
    display: block;
    background: none;
    text-transform: inherit;
    text-align: inherit;
    transition: all ease-in-out 0.3s;
  }
`;

export default SignOutButton;
