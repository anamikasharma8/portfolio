// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="container">
      <h1>Welcome to My Website!</h1>
      <p>This is the place where you can explore more about me and my work.</p>
      <p>Discover my projects, services, and more.</p>

      <div>
               <Link to="/about">
          <button>Learn More About Me</button>
        </Link>
      </div>

      <h2>Mission Statement</h2>
      <p>
      To use my artistic skills to bring beauty into the world.
      </p>
    </div>
  );
};

export default Home;

