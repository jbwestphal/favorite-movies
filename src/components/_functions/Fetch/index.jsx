import React from 'react';
import PropTypes from 'prop-types';

class Fetch extends React.Component {

  static propTypes = {
    url: PropTypes.string.isRequired,
    done: PropTypes.func.isRequired,
    loading: PropTypes.func,
    error: PropTypes.func,
  }

  state = {
    content: ''
  }

  componentDidMount() {

    const { loading, url, done, error } = this.props;

    this.setState({ content: loading() })

    fetch(url)
      .then(res => res.json())
      .then(
        res => this.setState({ content: done(res) }),
        res => this.setState({ content: error() })
      )
  }

  render() {
    return this.state.content;
  }
}

export default Fetch;