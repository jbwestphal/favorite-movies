import React from 'react';
import styled from "styled-components";
import FontAwesome from 'react-fontawesome';

import { yellow } from "../../../utils/colors";

class MovieRate extends React.Component {

  toggleWishlist = (e) => {
    e.preventDefault();
  }

  toggleFavorite = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <MovieRateWrapper>
        <MovieInfoRate><FontAwesome name="star" /> 10 rates</MovieInfoRate>
        <div>
          <p>Rate this movie:</p>
          <MovieListStars>
            <li><div><FontAwesome name="star-o" /></div></li>
            <li><div><FontAwesome name="star-o" /></div></li>
            <li><div><FontAwesome name="star-o" /></div></li>
            <li><div><FontAwesome name="star-o" /></div></li>
            <li><div><FontAwesome name="star-o" /></div></li>
          </MovieListStars>
        </div>
      </MovieRateWrapper>
    )
  }
}

export default MovieRate;

// Styles
const MovieRateWrapper = styled.section`
  display: flex;
  aign-items: stretch;
  border-top: 1px solid #405265;
  border-bottom: 1px solid #405265;
  padding: 10px 0;
  margin-bottom: 35px;

  & >div:first-child {
    margin-right: 20px;
    padding-right: 20px;
    border-right: 1px solid #405265;
  }

  & p {
    font-size: 16px;
    display: inline-block;
    vertical-align: middle;
  }
`;

const MovieInfoRate = styled.div`
  text-align: center;
  color: #fff;
  font-size: 16px;

  & .fa {
    color: ${yellow};
    display: inline-block;
    font-size: 24px;
    vertical-align: bottom;
  }
`;

const MovieListStars = styled.ul`
  padding-left: 15px;
  display: inline-block;
  vertical-align: middle;

  & li {
    display: inline-block;
    font-size: 28px;
    color: ${yellow};
    cursor: pointer;
    margin-right: 6px;
  }
`;
