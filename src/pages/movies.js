import React, { Component } from 'react';
import styled from "styled-components";

import { TitleSection } from "../utils/cssTypo";
import { Wrapper } from "../utils/cssGrid";
import MovieItem from '../components/MovieItem';

class Movies extends Component {
  render() {
    const { data } = this.props

    return (
      <Wrapper>
        <TitleSection>Recent Added</TitleSection>
        <WrapperCatalog>
        {data.allMoviesJson.edges.map(({ node }, index) =>
          <MovieItem data={node} key={index} />
        )}
        </WrapperCatalog>

        <TitleSection>Most Rated</TitleSection>
        <WrapperCatalog>
          {data.allMoviesJson.edges.map(({ node }, index) =>
            <MovieItem data={node} key={index} />
          )}
        </WrapperCatalog>
      </Wrapper>
    );
  }
}

export const MoviesQuerie = graphql`
  query MoviesQuerie {
    allMoviesJson {
      edges {
        node {
          id
          category
          cover
          title
          date
          page
        }
      }
    }
  }
`;

// Styles
const WrapperCatalog = styled.div`
  display: flex;
  align-items: stretch;
  margin: 0 0 60px;

  & article {
    width: 15%;
    margin-right: 2%;

    &:last-child {
      margin-right: 0;
    }
  }
`;

export default Movies;