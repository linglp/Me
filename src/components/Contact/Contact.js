import React, { useState } from 'react';
import './Contact.css';
import ContactSVG from './ContactSVG';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <section id="contact">
      <h1>Contact Me</h1>
      <div className="contact-form">
        <ContactSVG />

        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="form-group position-relative">
            <label htmlFor="formName" className="d-block">
              <i className="icon" data-feather="user"></i>
            </label>
            <input
              type="text"
              id="formName"
              name="name"
              className="form-control form-control-lg thick"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          {/* E-mail */}
          <div className="form-group position-relative">
            <label htmlFor="formEmail" className="d-block">
              <i className="icon" data-feather="mail"></i>
            </label>
            <input
              type="email"
              id="formEmail"
              name="email"
              className="form-control form-control-lg thick"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* Message */}
          <div className="form-group message">
            <textarea
              id="formMessage"
              name="message"
              className="form-control form-control-lg"
              rows="7"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          {/* Submit btn */}
          <div className="text-center">
            <button type="submit" className="btn btn-primary" tabIndex="-1">
              Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
