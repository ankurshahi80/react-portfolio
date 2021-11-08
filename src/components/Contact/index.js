import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <section>
      <h2 data-testid="h1tag" className="my-2">Contact me</h2>
      <form id="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name</label>
        <input type="text" name="name" defaultValue={name} onBlur={handleChange} required/>
        <label htmlFor="email">Your Email</label>
        <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="5" cols="50" defaultValue={message} onBlur={handleChange} />
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button data-testid="button" type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
