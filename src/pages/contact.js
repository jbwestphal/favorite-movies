import React from 'react';

import { TitlePage } from '../utils/cssTypo';
import { Wrapper, PageContainer } from '../utils/cssGrid';
import ContactForm from '../components/ContactForm';

const ContactPage = () => (
  <Wrapper>
    <PageContainer>
      <TitlePage>Contact us</TitlePage>
      <ContactForm />
    </PageContainer>
  </Wrapper>
);

export default ContactPage;
