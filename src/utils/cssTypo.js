import styled from "styled-components";
import { green } from "./colors";

export const TitlePage = styled.h2`
  color: #fff;
  font-size: 27px;
  margin: 0 0 25px;
  text-transform: uppercase;
  padding-bottom: 6px;
  font-weight: 600;
  border-bottom: 2px solid ${green};
`;

export const TitleSection = styled.h2`
  color: #fff;
  text-transform: uppercase;
  margin: 0 0 15px;
  font-size: 16px;
  font-weight: 600;
  position: relative;

  &:after {
    content: '';
    width: 30px;
    height: 2px;
    background: ${green};
    display: inline-block;
    vertical-align: middle;
    margin-left: 15px;
  }
`;

export const TextDescr = styled.p`
  color: #fff;
  margin: 0 0 15px;
  font-size: 16px;
`;