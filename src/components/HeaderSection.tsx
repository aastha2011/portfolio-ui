import React, { useState, useEffect } from 'react';
import './styles.css';

export const HeaderSection = () => {
  const [isMenuActive, setMenuActive] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isSticky, setSticky] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleMenu = () => {
    setMenuActive(prev => !prev);
  };

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setSticky(scrollY > 100);

      const sections = document.querySelectorAll('section');
      sections.forEach(sec => {
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');
      
        if (id && scrollY >= offset && scrollY < offset + height) {
          setActiveSection(id);
        }
      });
      
      setMenuActive(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <header className={`header ${isSticky ? 'sticky' : ''}`}>
      <a href='#' className='logo'>Portfolio.</a>
      <nav className={`navbar ${isMenuActive ? 'active' : ''}`}>
        <a href='#home' className={activeSection === 'home' ? 'active' : ''}>Home</a>
        <a href='#about' className={activeSection === 'about' ? 'active' : ''}>About</a>
        <a href='#services' className={activeSection === 'services' ? 'active' : ''}>Services</a>
        <a href='#portfolio' className={activeSection === 'portfolio' ? 'active' : ''}>Portfolio</a>
        <a href='#contact' className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
      </nav>

      <div 
        className={`bx ${isDarkMode ? 'bx-sun' : 'bx-moon'}`} 
        id='darkMode-icon'
        onClick={toggleDarkMode}
        style={{ cursor: 'pointer' }}
      ></div>

      <div 
        className={`bx bx-menu-alt-right ${isMenuActive ? 'bx-x' : ''}`} 
        id='menu-icon'
        onClick={toggleMenu}
        style={{ cursor: 'pointer' }}
      ></div>
    </header>
  );
};
