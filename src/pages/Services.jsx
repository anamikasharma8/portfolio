/* 
  File: src/pages/Services.jsx
  Author: Anamika Sharma
  StudentID: 301379885
  Date: January 27, 2024
*/
// src/pages/Services.jsx
import React from 'react';
import '../styles/Services.css'; 

const Services = () => {
    return (
      <div className="services-container">
        {/* Add content for each service */}
        <div className="service">
          <img src="/src/assets/python.png" alt="Service 1" />
          <h3>PYTHON</h3>
          <p>Python is a high-level, general-purpose programming language.
            It supports multiple programming paradigms, including structured, object-oriented and functional programming.</p>
        </div>
  
        <div className="service">
          <img src="/src/assets/datas.png" alt="Service 2" />
          <h3>DATA SCIENCE</h3>
          <p>Data science combines math and statistics, specialized programming, advanced analytics with specific subject matter expertise to uncover actionable insights hidden in an organization's data..</p>
        </div>

        <div className="service">
          <img src="/src/assets/malea.png" alt="Service 2" />
          <h3>MACHINE LEARNING</h3>
          <p>Machine learning is a branch of artificial intelligence (AI) and computer science which focuses on the use of data and algorithms to imitate the way that humans learn, gradually improving its accuracy</p>
        </div>


        <div className="service">
          <img src="/src/assets/web.png" alt="Service 2" />
          <h3> WEB  DEVELOPMENT </h3>
          <p>Web development is the work involved in developing a website for the Internet or an intranet.</p>
        </div>
  
        
      </div>
    );
  };
  
  export default Services;
  
