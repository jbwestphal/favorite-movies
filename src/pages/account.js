import React from 'react';
import PropTypes from 'prop-types';

import { TitlePage } from "../utils/cssTypo";
import { Wrapper, PageContainer } from "../utils/cssGrid";
import { PasswordForgetForm } from '../components/PasswordForget';
import PasswordChangeForm from '../components/PasswordChange';
import withAuthorization from '../components/Session/withAuthorization';

const AccountPage = (props, { authUser }) =>
  <Wrapper>
    <PageContainer>
    <TitlePage>Account: {authUser.email}</TitlePage>
    <PasswordForgetForm />
    <PasswordChangeForm />
    </PageContainer>
  </Wrapper>

AccountPage.contextTypes = {
  authUser: PropTypes.object,
};

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(AccountPage);