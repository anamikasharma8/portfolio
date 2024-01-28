/* 
  File: src/pages/Contact.jsx
  Author: Anamika Sharma
  StudentID: 301379885
  Date: January 27, 2024
*/
// src/pages/Contact.jsx
import React from 'react';
import '../styles/contact.css'; // Create this CSS file for styling
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <h1>Contact Me</h1>
        <p>Email: sharma04anamika@gmail.com</p>
        <p>Phone: (437) 868-1452</p>
        
      </div>

      <div className="contact-form">
        <h2>Send me a message</h2>
        <form>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName" required />

          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName" required />

          <label htmlFor="contactNumber">Contact Number:</label>
          <input type="tel" id="contactNumber" name="contactNumber" required />

          <label htmlFor="email">Email Address:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          {/* This button can be made functional later */}
          <button type="submit">Send Message</button>
        </form>
      </div>

      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default Contact;

