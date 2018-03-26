import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Navigation from '../components/Navigation';
import withAuthentication from '../components/Session/withAuthentication';

import './index.css';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Favorite Movies"
      meta={[
        { name: 'description', content: 'Track movies you want to watch and receive notifications about them!' },
        { name: 'keywords', content: 'movies, follow movies, watch movies, see movies, news movies' },
      ]}
    />
    <div className="app">
      <Navigation />

      <hr/>

      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default withAuthentication(TemplateWrapper)
