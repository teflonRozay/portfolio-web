import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [showNav, setShowNav] = useState(false);

  const toggleNavbar = () => {
    setShowNav(!showNav);
  };

  const exitNavbar = () => {
    setShowNav(false);
  };

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showHeading = () => {
      setIsVisible(true);
      setTimeout(hideHeading, 2000);
    };

    const hideHeading = () => {
      setIsVisible(false);
      setTimeout(showHeading, 2000);
    };

    showHeading();

    return () => {
      clearTimeout(hideHeading);
      clearTimeout(showHeading);
    };
  }, []);

  return (
    <div className='back'>
      <div className={`toggle ${showNav ? 'clicked' : ''}`} onClick={toggleNavbar}>
        &#9776;
      </div>
      <nav className={`headbar ${showNav ? 'show' : ''}`}>
        <button onClick={() => scrollToSection('Home')}>Home</button>
        <button onClick={() => scrollToSection('About')}>About</button>
        <button onClick={() => scrollToSection('Attribute')}>Skills</button>
        <button onClick={() => scrollToSection('Portfolio')}>Portfolio</button>
        <button onClick={() => scrollToSection('ContactForm')}>Contact</button>
      </nav>
      {showNav && <div className="exit" onClick={exitNavbar}>X</div>}
      <div id='Home'>
        <div className="container">
          <h1 className={`heading ${isVisible ? 'visible' : ''}`}>Welcome to my portfolio page!</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
