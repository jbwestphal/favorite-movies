import React from 'react';

import { TitlePage } from "../utils/cssTypo";
import { Wrapper, PageContainer } from "../utils/cssGrid";
import SignUpForm from '../components/SignUp';

const SignUpPage = () =>
  <Wrapper>
    <PageContainer>
    <TitlePage>Sign Up</TitlePage>
    <SignUpForm />
    </PageContainer>
  </Wrapper>

export default SignUpPage;