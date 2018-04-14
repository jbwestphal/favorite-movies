import React, { Component } from 'react';
import styled from "styled-components";
import MovieItem from '../components/MovieItem';
import { Wrapper } from "../utils/cssGrid";
import { TitleSection } from "../utils/cssTypo";

class LandingPage extends Component {

  render() {
    return(
      <Wrapper>
        <TitleSection>Welcome Homepage</TitleSection>
      </Wrapper>
    )
  }
}

export default LandingPage;
