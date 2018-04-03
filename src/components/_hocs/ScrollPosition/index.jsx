import React from 'react';
import PropTypes from 'prop-types';

class ScrollPosition extends React.Component {
  constructor() {
    super( );
    this.state = { position: 0 };
  }

  componentDidMount() {
    window.addEventListener( "scroll", this.updatePosition );
  }

  updatePosition = () => {
    this.setState( { position: window.pageYOffset } )
  }

  render() {
    return this.props.children( this.state.position )
  }
}

ScrollPosition.propTypes = {
  children: PropTypes.func,
}

export default ScrollPosition