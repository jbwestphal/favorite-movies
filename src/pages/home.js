import React, { Component } from 'react';

import { TitlePage } from "../utils/cssTypo";
import { Wrapper, PageContainer } from "../utils/cssGrid";
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
    const { users } = this.state;

    return (
      <Wrapper>
        <PageContainer>
          <TitlePage>My Movie List</TitlePage>

          { !!users.length && <UserList users={users} /> }
        </PageContainer>
      </Wrapper>
    );
  }
}

const UserList = ({ users }) =>
  <div>
    {users.map(user =>
      <div key={user.index}>Olá {user.username}</div>
    )}
  </div>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);