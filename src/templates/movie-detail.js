import React from "react";
import Link from 'gatsby-link';
import styled from "styled-components";
import FontAwesome from 'react-fontawesome';

import { Wrapper } from "../utils/cssGrid";
import Button from "../components/_elements/Button";
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

          <MovieListAction>
            <MovieListActionBtn><FontAwesome name="film" /> Wishlist</MovieListActionBtn>
            <MovieListActionBtn><FontAwesome name="heart" /> Favorite</MovieListActionBtn>
          </MovieListAction>

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

const MovieListAction = styled.ul`
  margin-bottom: 35px;

  & li {
    display: inline-block;
    margin-right: 25px;
  }
`;

const MovieListActionBtn = styled.li`
  cursor: pointer;
  color: ${red};
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 600;

  & .fa {
    border-radius: 50%;
    border: 1px solid ${red};
    width: 48px;
    height: 48px;
    display: inline-block;
    margin-right: 15px;
    text-align: center;
    font-size: 20px;
    line-height: 48px;
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