import './Footer.css';

function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer__journey">
        <h3 className="footer__journey-title">Follow Our Journey</h3>
        <a href="#" className="footer__journey-link" target="_blank" rel="noopener noreferrer">
          Instagram →
        </a>
      </div>
      <div className="footer__content">
        <div className="footer__brand">
          <h3 className="footer__logo">Tevel Biton Interior Design</h3>
          <p className="footer__address">Tel Aviv, Israel</p>
        </div>
        <div className="footer__contact">
          <a href="mailto:hello@tevelbiton.com" className="footer__link">
            hello@tevelbiton.com
          </a>
          <a href="tel:+972501234567" className="footer__link">
            +972 50 123 4567
          </a>
        </div>
      </div>
      <div className="footer__bottom">
        <p className="footer__copyright">
          © {new Date().getFullYear()} Tevel Biton Interior Design
        </p>
      </div>
    </footer>
  );
}

export default Footer;
