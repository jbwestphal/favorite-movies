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
          <MovieItem />
          <MovieItem />
          <MovieItem />
          <MovieItem />
          <MovieItem />
          <MovieItem />
        </WrapperCatalog>

        <TitleSection>Most Rated</TitleSection>
        <WrapperCatalog>
          <MovieItem />
          <MovieItem />
          <MovieItem />
          <MovieItem />
          <MovieItem />
          <MovieItem />
        </WrapperCatalog>

        {/* <ul>
          {data.allMoviesJson.edges.map(({ node }) =>
            <li key={node.id}>
              <h4>{node.title}</h4>
              <img src={node.cover} />
              <p>{node.category}</p>
            </li>
          )}
        </ul> */}
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
        }
      }
    }
  }
`

// Styles
const WrapperCatalog = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  margin: 0 0 60px;

  & article {
    width: 15%;
    margin-right: 2%;

    &:last-child {
      margin-right: 0;
    }
  }
`;
