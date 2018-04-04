import React from "react";
import { Wrapper } from "../utils/cssGrid";

export default ({ data }) => {
  const movie = data.moviesJson;

  return (
    <Wrapper>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <p>{movie.date}</p>
      <p>{movie.director}</p>
      <p>{movie.stars}</p>
      <p>{movie.category}</p>
      <img src={movie.cover} alt={movie.title} />
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