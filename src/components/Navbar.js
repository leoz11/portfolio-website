import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrolledHeight = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolledHeight / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  const toggleNavbar = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const sections = [
    { id: 'home', text: 'Home' },
    { id: 'projetos', text: 'Projetos' },
    { id: 'skills', text: 'Conhecimentos' },
    { id: 'sobre', text: 'Sobre' },
    { id: 'youtube', text: 'Meu canal' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="brand">Leonardo Oliveira</div>
        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          {sections.map((section) => (
            <Link
              key={section.id}
              activeClass="active"
              to={section.id}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={toggleNavbar}
            >
              {section.text}
            </Link>
          ))}
        </div>
        <div className={`navbar-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleNavbar}>
          <FaBars />
        </div>
      </div>
      <div className="progress-bar" style={{ width: `${scrollProgress}%` }} />
    </nav>
  );
};

export default Navbar;
