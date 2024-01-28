// src/components/Navigation.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/asphoto.png'; // Update the path
import '../styles/navigation.css';

const Navigation = () => {
  return (
    <nav>
      <div className="logo-container">
        <img src={Logo} alt="Custom Logo" />
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;
