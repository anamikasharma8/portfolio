/* 
  File: src/pages/Projects.jsx
  Author: Anamika Sharma
  StudentID: 301379885
  Date: January 27, 2024
*/
// src/pages/Projects.jsx
import React from 'react';
import '../styles/Projects.css'; // You can create this CSS file for styling

const Projects = () => {
  return (
    <div className="projects-container">
      {/* Add content for each project */}
      <div className="project">
        <img src="/src/assets/husk.png" alt="Project 1" />
        <h3>HUMAN POSE ESTIMATION</h3>
        <p>Human Pose Estimation (HPE) is the task that aims to predict the location of human joints from images and videos. This task is used in many applications, such as sports analysis and surveillance systems. Recently, several studies have embraced deep learning to enhance the performance of HPE tasks.
            My role is to analyse the data and also constrct model according to the requirement.</p>
      </div>

      <div className="project">
        <img src="/src/assets/SMARTMMIRROR.jpg" alt="Project 2" />
        <h3>SMART MIRROR USING IOT</h3>
        <p>Starting with the security, this IOT based smart mirror acts as security device where the camera is placed behind the mirror. This camera continuously monitors the surroundings, detects for unknown faces and alerts the user by sending the captured image to the user mobile device.
            My role in it was to install the software and maintain their working.</p>
      </div>

      <div className="project">
        <img src="/src/assets/heachat.png" alt="Project 3" />
        <h3>HEALTHCARE CHATBOT</h3>
        <p>The Chatbot (HealthBot) will try to solve or provide an answer to health-related issues or queries that the user is asking for. In this implementing NLP and ML to improve the efficiency of the chatbot. Tkinter is used as a frontend, and we are creating a desktop application with the help of Tkinter.
            </p>
      </div>
    </div>
  );
};

export default Projects;
