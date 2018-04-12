import React from "react";
import Link from 'gatsby-link';
import styled from "styled-components";
import FontAwesome from 'react-fontawesome';

import { Wrapper } from "../utils/cssGrid";
import Button from "../components/_elements/Button";
import MovieListAction from "../components/_movie/MovieListAction";
import MovieRate from "../components/_movie/MovieRate";
import { redDark, red, yellow, green } from "../utils/colors";

export default ({ data }) => {
  const movie = data.moviesJson;

  return (
    <Wrapper>
      <WrapperDetail>

        <MovieColLeft>
          <figure><img src={movie.cover} alt={movie.title} /></figure>
        </MovieColLeft>

        <article>

          <MovieTitle>{movie.title}</MovieTitle>

          <MovieListAction />

          <MovieRate />

          <section>
            <MovieTabTitle>Overview</MovieTabTitle>
            <MovieDescription>{movie.description}</MovieDescription>
            <MovieOtherInfo>
              <p><strong>Stars:</strong> {movie.stars}</p>
              <p><strong>Release Date:</strong> {movie.date}</p>
              <p><strong>Director:</strong> {movie.director}</p>
              <p><strong>Category:</strong> <span>{movie.category}</span></p>
            </MovieOtherInfo>
          </section>
        </article>
      </WrapperDetail>
    </Wrapper>
  );
};

export const queryMovie = graphql`
  query movieQuerie($slug: String!) {
    moviesJson(page: { eq: $slug } ) {
      page
      title
      description
      cover
      date
      director
      stars
      category
    }
  }
`;

// Styles
const WrapperDetail = styled.div`
  display: flex;
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
  justify-content: space-between;
`;

const MovieTitle = styled.h2`
  color: #fff;
  font-size: 37px;
  font-weight: 600;
  margin: 0 0 25px;
`;

const MovieColLeft = styled.section`
  margin-right: 45px;
  padding-top: 8px;

  & img {
    border-radius: 6px;
  }

  & figure {
    display: block;
    margin-bottom: 20px;
  }
`;

const MovieTabTitle = styled.h3`
  color: ${green};
  font-size: 20px;
  text-transform: uppercase;
  margin: 0 0 20px;
  font-weight: 600;
  padding-bottom: 8px;
  display: inline-block;
  border-bottom: 3px solid ${green};
`;

const MovieDescription = styled.p`
  color: #fff;
  font-size: 16px;
  margin: 0 0 20px;
  line-height: 1.5em;
`;

const MovieOtherInfo = styled.section`
  display: flex;

  & p {
    font-size: 16px;
    margin-right: 35px;
    max-width: 160px;
    line-height: 1.4em;
  }

  & strong {
    font-weight: 600;
    color: #fff;
    display: block;
    margin-bottom: 6px;
  }
`;