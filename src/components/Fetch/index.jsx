import React from 'react';

class Fetch extends React.Component {
  constructor() {
    super();
    this.state = {
      content: ''
    }
  }
  componentDidMount() {
    this.setState({ content: this.props.loading() })

    fetch(this.props.url)
      .then(res => res.json())
      .then(
        res => this.setState({ content: this.props.done(res) }),
        res => this.setState({ content: this.props.error() })
      )
  }

  render() {
    return this.state.content;
  }
}

export default Fetch;