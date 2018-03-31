import React from 'react';

import { TitlePage } from "../utils/cssTypo";
import { Wrapper, PageContainer } from "../utils/cssGrid";
import SignInForm from '../components/SignIn';
import { SignUpLink } from '../components/SignUp';
import { PasswordForgetLink } from '../components/PasswordForget';

const SignInPage = () =>
  <Wrapper>
    <PageContainer>
      <TitlePage>Sign In</TitlePage>
      <SignInForm />
      <PasswordForgetLink />
      <SignUpLink />
    </PageContainer>
  </Wrapper>

export default SignInPage;