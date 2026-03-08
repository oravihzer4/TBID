import { useState } from 'react';
import './Navbar.css';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <a href="#hero" className="navbar__logo">
        TBID
      </a>

      <button
        className="navbar__toggle"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`navbar__hamburger ${isMenuOpen ? 'open' : ''}`} />
        <span className={`navbar__hamburger ${isMenuOpen ? 'open' : ''}`} />
        <span className={`navbar__hamburger ${isMenuOpen ? 'open' : ''}`} />
      </button>

      <ul className={`navbar__links ${isMenuOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="navbar__link"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
