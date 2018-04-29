import React, { Component } from 'react';
import styled from 'styled-components';

import { getMoviesPopular, getMoviesUpcoming } from '../utils/moviesAPI';
import { TitleSection } from '../utils/cssTypo';
import { Wrapper } from '../utils/cssGrid';
import MovieItem from '../components/MovieItem';

class Movies extends Component {
  state = {
    moviesPopular: null,
    moviesUpcoming: null
  };

  componentDidMount() {
    getMoviesPopular().then(result => {
      this.setState({
        moviesPopular: result.results
      });
    });

    getMoviesUpcoming().then(result => {
      console.log(result.results);
      this.setState({
        moviesUpcoming: result.results
      });
    });
  }

  render() {
    const { moviesPopular, moviesUpcoming } = this.state;

    return (
      <Wrapper>
        <TitleSection>Upcoming</TitleSection>
        <WrapperCatalog>
          {moviesUpcoming &&
            moviesUpcoming.map((item, index) => (
              <MovieItem data={item} key={index} />
            ))}
        </WrapperCatalog>

        <TitleSection>Most Popular</TitleSection>
        <WrapperCatalog>
          {moviesPopular &&
            moviesPopular.map((item, index) => (
              <MovieItem data={item} key={index} />
            ))}
        </WrapperCatalog>
      </Wrapper>
    );
  }
}

// export const MoviesQuerie = graphql`
//   query MoviesQuerie {
//     allMoviesJson {
//       edges {
//         node {
//           id
//           category
//           cover
//           title
//           date
//           page
//         }
//       }
//     }
//   }
// `;

// Styles
const WrapperCatalog = styled.div`
  display: flex;
  align-items: stretch;
  margin: 0 0 60px;
  flex-wrap: wrap;

  & article {
    width: 15%;
    margin-bottom: 15px;
    margin-right: 2%;

    &:nth-child(6n + 0) {
      margin-right: 0;
    }
  }
`;

export default Movies;
