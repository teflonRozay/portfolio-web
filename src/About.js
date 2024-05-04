// About.js
import React from 'react';
import resumeFile from './Portable.pdf'
import resumeImage from './bj.jpg';

const handleDownload = () => {
  // Trigger download when the button is clicked
  const link = document.createElement('a');
  link.href = resumeFile;
  link.download = 'Portable.pdf'; // Specify the file name for download
  link.click();
};

const About = () => {
  return (
    <div className='everything'>
    <h1  className='details'>About Me</h1>
    <div id='About' className="about-me-container">
      <div className="content">
        <div className="image-container">
          <img src={resumeImage} alt="Your Name" className="round-image" />
        </div>
        <div className="text-container">
          <p className='passion'>Hi, I'm Banji Wilson, a passionate frontend developer dedicated to creating captivating online experiences. With a strong foundation in coding and a commitment to staying current with industry trends, I deliver top-notch projects.</p>
        </div>
        <div className="resume-container">
          <button className="download-button" onClick={handleDownload}>
            <i className="fas fa-download"></i>
            Download Resume
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default About;
