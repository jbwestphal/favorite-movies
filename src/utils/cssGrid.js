import styled from "styled-components";
import { mediaMax, mediaMin } from "./cssMedia";
import { blueDark } from "./colors";

export const Col_30 = styled.div`
  width: 100%;
  ${mediaMin.phone`width: 30%;`}
`;

export const Col_60 = styled.div`
  width: 100%;
  ${mediaMin.phone`width: 60%;`}
`;

export const Wrapper = styled.section`
  width: 100%;
  max-width: 1640px;
  margin: 0 auto;
  position: relative;
  padding: 60px 20px;
`;

export const PageContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 30px 40px;
  background: ${blueDark};

  ${mediaMin.phone`max-width: 900px;`}
`;