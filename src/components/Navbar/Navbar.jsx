import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const navLinks = [
  { label: "Home", to: "/#hero" },
  { label: "About", to: "/#about" },
  { label: "Portfolio", to: "/#portfolio" },
  { label: "Contact", to: "/#contact" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location.pathname, location.hash]);
  const isHome = location.pathname === "/";

  return (
    <nav
      className={`navbar ${isScrolled || !isHome ? "navbar--scrolled" : ""}`}
    >
      <Link
        to="/"
        className="navbar__logo"
        onClick={(e) => {
          if (isHome) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        }}
      >
        TB
      </Link>

      <button
        className="navbar__toggle"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`navbar__hamburger ${isMenuOpen ? "open" : ""}`} />
        <span className={`navbar__hamburger ${isMenuOpen ? "open" : ""}`} />
        <span className={`navbar__hamburger ${isMenuOpen ? "open" : ""}`} />
      </button>

      <ul className={`navbar__links ${isMenuOpen ? "open" : ""}`}>
        {navLinks.map((link) => {
          const sectionId = link.to.split("#")[1];
          const handleClick = (e) => {
            setIsMenuOpen(false);
            if (isHome && sectionId) {
              e.preventDefault();
              const el = document.getElementById(sectionId);
              if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          };
          return (
            <li key={link.label}>
              <Link to={link.to} onClick={handleClick} className="navbar__link">
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
