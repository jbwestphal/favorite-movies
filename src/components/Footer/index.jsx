import React from 'react';
import styled from "styled-components";

import { redDark } from "../../utils/colors";

const Footer = (props) =>
  <StyledFooter>
    <h5>&copy; Copyrights 2018 - Favorites Movies <br /> Powered by <a href="https://jessicawestphal.com" target="_blank">JBWestphal</a> - Made with <a href="https://github.com/gatsbyjs/gatsby/" target="_blank">Gatsby</a></h5>
  </StyledFooter>

// Styles
const StyledFooter = styled.footer`
  border-top: 3px solid ${redDark};
  padding: 30px 20px;
  text-align: center;
  line-height: 1.6em;
  font-size: 16px;
`;

export default Footer;
