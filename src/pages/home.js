import React, { Component } from 'react';
import styled from "styled-components";

import { TitleSection } from "../utils/cssTypo";
import { Wrapper } from "../utils/cssGrid";
import MovieItem from '../components/MovieItem';
import withAuthorization from '../components/Session/withAuthorization';
import { db } from '../firebase';

const fromObjectToList = (object) =>
  object
    ? Object.keys(object).map(key => ({ ...object[key], index: key }))
    : [];

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }

  componentDidMount() {
    db.onceGetUsers().then(snapshot =>
      this.setState(() => ({ users: fromObjectToList(snapshot.val()) }))
    );
  }

  render() {
    const { data } = this.props
    const { users } = this.state;

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
        {/* { !!users.length && <UserList users={users} /> } */}
      </Wrapper>
    );
  }
}

export const HomeQuery = graphql`
  query HomeQuery {
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

const UserList = ({ users }) =>
  <div>
    {users.map(user =>
      <div key={user.index}>Olá {user.username}</div>
    )}
  </div>

const authCondition = (authUser) => !!authUser;

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

export default withAuthorization(authCondition)(HomePage);