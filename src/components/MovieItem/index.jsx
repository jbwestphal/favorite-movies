import React from 'react';
import Link from 'gatsby-link';
import styled from "styled-components";
import FontAwesome from 'react-fontawesome';

import Button from "../_elements/Button";
import { red } from "../../utils/colors";

class MovieItem extends React.Component {

  render() {
    const { data } = this.props

    return (
      <Movie>
        <Link to={`/${data.page}`}>
          <figure className="movie-img"><img src={data.cover} /></figure>
          <section className="movie-info">
            <h2 className="movie-title">{data.title}</h2>
            <time dateTime="2018-02-15" className="movie-date">Released: {data.date}</time>
            <Button><FontAwesome name="plus" /> Details</Button>
          </section>
          <ul className="movie-action">
            <li><button type="button" title="Wanna watch"><FontAwesome name="film" /></button></li>
            <li><button type="button" title="Favorite"><FontAwesome name="heart" /></button></li>
          </ul>
        </Link>
      </Movie>
    )
  }
}

export default MovieItem;

// Styles
const Movie = styled.article`
  text-align: center;
  position: relative;
  overflow: hidden;

  & a {
    display: block;
    position: relative;

    &:before {
      width: 100%;
      height: 60%;
      content: '';
      bottom: 0;
      left: 0;
      z-index: 10;
      position: absolute;
      opacity: 0;
      transition: all ease-in-out 0.3s;
      background: linear-gradient(to bottom, rgba(255,255,255,0) 0%,rgba(0,0,0,1) 100%);
    }
  }

  & img {
    width: 100%;
  }

  & h2 {
    color: #fff;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.6em;
  }

  & time {
    line-height: 1.6em;
    display: block;
    margin: 0 0 10px;
  }

  & .movie-info {
    position: absolute;
    bottom: -40px;
    left: 0;
    opacity: 0;
    width: 100%;
    z-index: 20;
    padding: 0 20px 20px;
    transition: all ease-in-out 0.3s;
  }

  & .movie-action {
    position: absolute;
    top: 0;
    right: -200px;
    background: ${red};
    z-index: 100;
    padding: 5px 10px 5px 0;
    transition: all ease-in-out 0.3s;

    & li {
      display: inline-block;
      margin-left: 10px;
    }

    & button {
      border: none;
      background: transparent;
      padding: 0;
      color: #fff;
      font-size: 20px;
    }
  }

  &:hover {
    & .movie-info {
      opacity: 1;
      bottom: 0;
    }

    & a:before {
      opacity: 1;
    }

    & .movie-action {
      right: 0;
    }
  }
`;
