import React from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

import { redLight } from '../../../utils/colors';

class MovieListAction extends React.Component {
  toggleWishlist = e => {
    e.preventDefault();
  };

  toggleFavorite = e => {
    e.preventDefault();
  };

  render() {
    return (
      <StyledMovieAction>
        <StyledMovieActionItem>
          <button type="button" onClick={this.toggleWishlist}>
            <FontAwesome name="film" /> Wanna Watch
          </button>
        </StyledMovieActionItem>
        <StyledMovieActionItem>
          <button type="button" onClick={this.toggleFavorite}>
            <FontAwesome name="heart" /> Favorite
          </button>
        </StyledMovieActionItem>
      </StyledMovieAction>
    );
  }
}

export default MovieListAction;

// Styles
const StyledMovieAction = styled.ul`
  margin-bottom: 35px;

  & li {
    display: inline-block;
    margin-right: 25px;
  }
`;

const StyledMovieActionItem = styled.li`
  & button {
    background: none;
    border: none;
    outline: none;
    color: ${redLight};
    text-transform: uppercase;
    font-size: 15px;
    font-weight: 600;
  }

  & .fa {
    border-radius: 50%;
    border: 1px solid ${redLight};
    width: 48px;
    height: 48px;
    display: inline-block;
    margin-right: 15px;
    text-align: center;
    font-size: 20px;
    line-height: 48px;
  }
`;
