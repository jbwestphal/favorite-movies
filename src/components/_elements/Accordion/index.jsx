import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

import { redDark } from "../../../utils/colors";

class Accordion extends React.Component {

  state = {
    isOpen: false
  }

  render() {

    const { items } = this.props;

    return (
      <StyledAccordion>
        {
          items.map(item => (
            <AccordionItem key={item.id}>
              <h5>{item.title}</h5>
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
`;

const AccordionItem = styled.li`
  position: relative;

  & h5 {
    cursor: pointer;
    padding: 12px 15px;
    font-size: 15px;
    text-transform: uppercase;
    background: #172840;
    color: #fff;
    font-weight: 600;
    margin: 0 0 10px;
  }
`;

const AccordionContent = styled.div`
  position: relative;
  margin: 0 0 40px;
  padding: 0 15px;
  font-size: 17px;
  line-height: 1.4em;
`;

export default Accordion;
