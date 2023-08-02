// Navbar.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const updateScrollProgress = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolledHeight = window.scrollY;
      const progress = (scrolledHeight / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScrollProgress);

    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
    };
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="brand">Leonardo Oliveira</div>
        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={toggleNavbar}
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="conhecimentos"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={toggleNavbar}
          >
            Conhecimentos
          </Link>
          <Link
            activeClass="active"
            to="sobre"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={toggleNavbar}
          >
            Sobre
          </Link>
          <Link
            activeClass="active"
            to="projetos"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={toggleNavbar}
          >
            Projetos
          </Link>
          <Link
            activeClass="active"
            to="contato"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={toggleNavbar}
          >
            Contato
          </Link>
        </div>
        <div className={`navbar-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className={isMenuOpen ? 'cross' : ''}></span>
          <span className={isMenuOpen ? 'cross' : ''}></span>
          <span className={isMenuOpen ? 'cross' : ''}></span>
        </div>
      </div>
      <div className="progress-bar" style={{ width: `${scrollProgress}%` }} />
    </nav>
  );
};

export default Navbar;
