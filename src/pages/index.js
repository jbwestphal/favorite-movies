import React from 'react';
import styled from "styled-components";
import MovieItem from '../components/MovieItem';
import { Wrapper } from "../utils/cssGrid";
import { TitleSection } from "../utils/cssTypo";

class LandingPage extends React.Component {

  render() {
    const { data } = this.props

    return(
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
    )
  }
}

export default LandingPage;

export const LandingQuery = graphql`
  query LandingQuery {
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
`

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
