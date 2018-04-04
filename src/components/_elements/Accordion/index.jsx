import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

class Accordion extends React.Component {

  openContent(el) {
    el.target.classList.toggle('active');
    el.target.nextElementSibling.classList.toggle('active');
  }

  render() {
    const { items } = this.props;
    return (
      <StyledAccordion>
        {
          items.map(item => (
            <AccordionItem key={item.id}>
              <h5 onClick={(el) => this.openContent(el)}>{item.title}</h5>
              <AccordionContent>
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))
        }
      </StyledAccordion>
    )
  }
}

Accordion.propTypes = {
  items: PropTypes.array.isRequired,
};

// Styles
const StyledAccordion = styled.ul`
  position: relative;

  & .active {
    display: block;
  }
`;

const AccordionItem = styled.li`
  position: relative;

  & h5 {
    color: #fff;
    cursor: pointer;
    font-size: 15px;
    font-weight: 600;
    margin: 0 0 10px;
    padding: 12px 15px;
    position: relative;
    background: #172840;
    text-transform: uppercase;

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
  }
`;

const AccordionContent = styled.div`
  position: relative;
  margin: 0 0 40px;
  padding: 0 15px;
  font-size: 17px;
  line-height: 1.4em;
  display: none;
`;

export default Accordion;
