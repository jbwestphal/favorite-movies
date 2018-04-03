import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

import { redDark } from "../../utils/colors";

class Dropdown extends React.Component {

  state = {
    isOpen: false
  }

  render() {

    const { title, items } = this.props;

    return (
      <StyledDropdown className="dropdown">
      <TitleDropdown>{title}</TitleDropdown>
      <ListDropdown>
        {
          items.map(item => (
            <ItemDropdown key={item.id}>
              {item.element()}
            </ItemDropdown>
          ))
        }
      </ListDropdown>
    </StyledDropdown>
    )
  }
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};

// Styles
const StyledDropdown = styled.div`
  position: relative;
`;

const TitleDropdown = styled.p`
  width: 160px;
  padding: 0 15px;
  font-size: 14px;
  cursor: pointer;
  line-height: 35px;
  font-weight: 600;
  text-transform: uppercase;
  border: 2px solid ${redDark};
  transition: all ease-in-out 0.3s;

  &:after {
    width: 0;
    height: 0;
    top: 50%;
    right: 15px;
    content: '';
    z-index: 10;
    position: absolute;
    border-style: solid;
    border-width: 5px 5px 0 5px;
    transform: translate(0, -50%);
    border-color: #fff transparent transparent transparent;
  }

  ${StyledDropdown}:hover & {
    background: ${redDark};
    color: #fff;
  }
`;

const ListDropdown = styled.ul`
  top: 40px;
  left: 0;
  width: 100%;
  color: #fff;
  z-index: 100;
  font-size: 11px;
  opacity: 0;
  visibility: hidden;
  position: absolute;
  background: ${redDark};
  text-transform: uppercase;
  transition: all ease-in-out 0.3s;

  ${StyledDropdown}:hover & {
    top: 37px;
    opacity: 1;
    visibility: visible;
  }
`;

const ItemDropdown = styled.li`
  border-bottom: 1px solid #75252b;
  & a,
  & button {
    display: block;
    padding: 10px 15px;
  }

  &:last-child {
    border-bottom: none;
  }

  & .fa {
    margin-right: 7px;
    font-size: 14px;
    vertical-align: middle;
  }

  &:hover a,
  &:hover button {
    opacity: 0.5;
  }
`;

export default Dropdown;
