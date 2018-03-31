import styled from "styled-components";
import { red, green, orange, blueDark } from "./colors";

export const StyledForm = styled.section`
  height: 100%;
  overflow: hidden;

  & input,
  & textarea {
    display: block;
    outline: none;
    resize: none;
    font-size: 15px;
    color: ${blueDark};
    background: #e8e8e8;
    border: none;
    margin: 0 0 15px;
  }

  & input {
    padding: 0 20px;
    height: 40px;
    width: 49%;
    float: left;
    margin-right: 2%;

    &:nth-child(2n+0) {
      margin-right: 0;
    }
  }

  & textarea {
    padding: 20px;
    height: 180px;
    width: 100%;
    clear: both;
  }

  & button {
    color: #fff;
    padding: 12px 30px;
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;
    outline: none;
    float: right;
    border: none;
    font-weight: 600;
    background: ${green};
    display: inline-block;
    vertical-align: middle;
    text-transform: uppercase;
    transition: all ease-in-out 0.3s;

    &:hover {
      background: ${orange};
    }

    &:disabled {
      background: #666;
      opacity: 0.5;
    }
  }
`;