import React from 'react';

import { TitlePage } from "../utils/cssTypo";
import { Wrapper, PageContainer } from "../utils/cssGrid";
import { PasswordForgetForm } from '../components/PasswordForget';

const PasswordForgetPage = () =>
  <Wrapper>
    <PageContainer>
    <TitlePage>Forget Password</TitlePage>
    <PasswordForgetForm />
    </PageContainer>
  </Wrapper>

export default PasswordForgetPage;