// App.js
import React from 'react';
import './styles.css'; // Import the CSS file
import NavBar from './NavBar';

import About from './About';
import Attribute from './Attribute';
import Portfolio from './Portfolio';
import ContactForm from './ContactForm';
import Footer from './Footer';

function App() {
  console.log(window.innerWidth);

  return (
    <div className='miles'>
    
    <NavBar />
    
      <About />
      <Attribute />
      <Portfolio />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
