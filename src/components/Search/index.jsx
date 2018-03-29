import React from 'react';
import FontAwesome from 'react-fontawesome';
import styled from "styled-components";

import { red } from "../../utils/colors";

const Search = (props) =>
  <StyledSearch>
    <form className="form-search">
      <input type="search" name="search" required placeholder="Search for a movie" />
      <button type="submit"><FontAwesome name="search" /></button>
    </form>
  </StyledSearch>

export default Search;

// Styles
const StyledSearch = styled.section`
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;

  & form {
    width: 100%;
    max-width: 800px;
    position: relative;
  }

  & input {
    border: 2px solid ${red};
    border-radius: 5px;
    background: transparent;
    font-size: 18px;
    padding: 0 20px;
    height: 40px;
    width: 100%;
    max-width: 750px;
    color: #ccc;
    display: block;
    outline: none;
  }

  & button {
    position: absolute;
    background: none;
    border: none;
    outline: none;
    height: 100%;
    width: 70px;
    text-align: center;
    font-size: 20px;
    color: #fff;
    top: 0;
    right: 0;
  }
`;
