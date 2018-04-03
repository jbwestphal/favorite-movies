import React from 'react';

import { StyledForm } from '../../utils/cssForm';

class ContactForm extends React.Component {

  onSubmit = (event) => {
    event.preventDefault();
  }

  render() {

    return (
      <StyledForm>
        <p>If you have doubts, fill the form below and talk to us.</p>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            required
            placeholder="Your Name"
          />
          <input
            type="email"
            required
            placeholder="Your Email"
          />
          <input
            type="text"
            required
            placeholder="Subject"
          />
          <input
            type="text"
            placeholder="Your Phone"
          />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send</button>

          {/* { error && <p>{error.message}</p> } */}
        </form>
      </StyledForm>
    );
  }
}

export default ContactForm;
