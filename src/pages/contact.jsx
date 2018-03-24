import React, { Component } from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";

class ContactPage extends Component {
  render() {
    return (
      <div className="about-container">
        <Helmet title={`Contact | ${config.siteTitle}`} />
        <div>contact</div>
      </div>
    );
  }
}

export default ContactPage;
