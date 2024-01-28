/* 
  File: src/pages/About.jsx
  Author: Anamika Sharma
  StudentID: 301379885
  Date: January 27, 2024
*/
// src/pages/About.jsx
import React from 'react';
import myImage from '../assets/asphto.jpg'; 
import '../styles/About.css';

const About = () => {
  return (
    <div className="container">
      <h1 className="heading">About Me</h1>
      {/* Add your image here */}
      <img src={myImage} alt="ANAMIKA SHARMA" className="image" />
      <p className="paragraph">
        I am a student at Centennial College in the Software Engineering Technician (Fast track) program. I completed my bachelor's in computer science and engineering. I have been a dedicated and disciplined student throughout my life. Throughout my school education, I had been a monitor from grade 1 to grade 10, which led to enhancing my leadership qualities. My hobbies are painting and reading books. I love playing badminton.
      </p>
      <a href="/safresume.pdf" target="_blank" rel="noopener noreferrer"className="download-button">
        Download Resume (PDF)</a>
    </div>
  );
};

export default About;
