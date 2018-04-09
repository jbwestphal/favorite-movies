import React from 'react';
import PropTypes from 'prop-types';

import { TitlePage, TextDescr } from "../utils/cssTypo";
import { Wrapper, PageContainer } from "../utils/cssGrid";
import PasswordChangeForm from '../components/PasswordChange';
import withAuthorization from '../components/Session/withAuthorization';

const AccountPage = (props, { authUser }) =>
  <Wrapper>
    <PageContainer>
    <TitlePage>My Account</TitlePage>
    <TextDescr><strong>E-mail:</strong> {authUser.email}</TextDescr>
    <TextDescr><strong>Password change:</strong></TextDescr>
    <PasswordChangeForm />
    </PageContainer>
  </Wrapper>

AccountPage.contextTypes = {
  authUser: PropTypes.object,
};

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(AccountPage);