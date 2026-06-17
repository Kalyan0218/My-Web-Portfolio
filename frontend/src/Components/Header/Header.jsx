import React from 'react';
import './Header.css';

function Header() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="header">
      <div className="logo" onClick={() => scrollToSection('home')}>
        <img src="logo.png" alt="logo" />
      </div>

      <nav className="options">
        <button type="button" className="nav-link" onClick={() => scrollToSection('about')}>About me</button>
        <button type="button" className="nav-link" onClick={() => scrollToSection('skills')}>Skills</button>
        <button type="button" className="nav-link" onClick={() => scrollToSection('portfolio')}>Portfolio</button>

        <a
          className="cv-btn"
          href="Kalyan Naicker 603072 CV.pdf"
          download="Kalyan Naicker 603072 CV.pdf"
          aria-label="Download CV"
        >
          <svg
            className="cv-btn-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 3v13M7 11l5 5 5-5"/>
            <path d="M5 21h14"/>
          </svg>
          Download CV
        </a>

        <button className="contact-btn" onClick={() => scrollToSection('contact')}>
          CONTACT ME
        </button>
      </nav>
    </div>
  );
}

export default Header;
