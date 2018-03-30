import React from 'react';

class LandingPage extends React.Component {

  render() {
    const { data } = this.props

    return(
      <section>
        <ul>
          {data.allMoviesJson.edges.map(({ node }) =>
            <li key={node.id}>
              <h4>{node.title}</h4>
              <img src={node.cover} />
              <p>{node.category}</p>
            </li>
          )}
        </ul>
      </section>
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
