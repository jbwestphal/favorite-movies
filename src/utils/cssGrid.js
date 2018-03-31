import styled from "styled-components";
import { mediaMax, mediaMin } from "./cssMedia";

export const Col_30 = styled.div`
  width: 100%;
  ${mediaMin.phone`width: 30%;`}
`;

export const Col_60 = styled.div`
  width: 100%;
  ${mediaMin.phone`width: 60%;`}
`;