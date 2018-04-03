import React from 'react';

import { TitlePage } from "../utils/cssTypo";
import { Wrapper, PageContainer } from "../utils/cssGrid";
import Accordion from "../components/_elements/Accordion";

const items = [
  {
    id: 1,
    title: 'How the rating works?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, non. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, non. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, non. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, non. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  },
  {
    id: 2,
    title: 'How the tracking works?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, non. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, non. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, non. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, non. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  },
  {
    id: 3,
    title: 'How to add movies?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, non. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, non. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, non. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, non. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  }
];

const FaqPage = () =>
  <Wrapper>
    <PageContainer>
      <TitlePage>FAQ</TitlePage>
      <Accordion items={items} />
    </PageContainer>
  </Wrapper>

export default FaqPage;