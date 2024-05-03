import React from 'react';
import weatherImage from './weather.jpg';
import foodImage from './food.jpg';
import googleImage from './google.jpg'
import facebookImage from './facebook.jpg'

function Portfolio() {
  const albums = [
    {
      title: 'Weather website',
      image: weatherImage, 
      link: 'https://master--phenomenal-bonbon-f4ef7f.netlify.app/' // Link to Project 1
    },
    {
      title: 'Food Recipe website ',
      image:foodImage , 
      link: 'https://master--foodspice.netlify.app/' // Link to Project 2
    },
    {
      title: 'Clone Google website ',
      image:googleImage , 
      link: 'https://main--drawweb.netlify.app/' // Link to Project 2
    },
    {
      title: 'Clone Facebook website',
      image:facebookImage , 
      link: 'https://6634b8b52a601ddf8ba580e2--poetic-semifreddo-12fbe5.netlify.app/' // Link to Project 2
    }
    // Add more albums as needed
  ];

  return (
    <div id='Portfolio' className='cover'>
    <h1 className='check'>Check out on some of my projects</h1>
    <div className="portfolio">
      {albums.map((album, index) => (
        <div className="album" key={index}>
          <a href={album.link} target="_blank" rel="noopener noreferrer">
            <img src={album.image} alt={album.title} />
            <h3>{album.title}</h3>
          </a>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Portfolio;
