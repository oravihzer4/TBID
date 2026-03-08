import './Footer.css';

function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer__content">
        <div className="footer__brand">
          <h3 className="footer__logo">Tevel Biton Interior Design</h3>
          <p className="footer__tagline">Crafting spaces with intention.</p>
        </div>
        <div className="footer__contact">
          <h4 className="footer__heading">Get in touch</h4>
          <a href="mailto:hello@tevelbiton.com" className="footer__link">
            hello@tevelbiton.com
          </a>
          <a href="tel:+972501234567" className="footer__link">
            +972 50 123 4567
          </a>
        </div>
        <div className="footer__social">
          <h4 className="footer__heading">Follow</h4>
          <a href="#" className="footer__link">Instagram</a>
          <a href="#" className="footer__link">Pinterest</a>
        </div>
      </div>
      <div className="footer__bottom">
        <p className="footer__copyright">
          © {new Date().getFullYear()} Tevel Biton Interior Design. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
