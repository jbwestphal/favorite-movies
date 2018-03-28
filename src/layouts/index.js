import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import withAuthentication from '../components/Session/withAuthentication';

import './index.css';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Favorite Movies - Track movies to watch"
      meta={[
        { name: 'description', content: 'Track movies you want to watch and receive notifications about them!' },
        { name: 'keywords', content: 'movies, follow movies, watch movies, see movies, news movies' },
      ]}
    />
    <main className="app">
      <Header />
      {children()}
    </main>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default withAuthentication(TemplateWrapper)
