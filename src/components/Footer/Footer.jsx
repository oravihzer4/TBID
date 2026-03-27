import "./Footer.css";
import { useLanguage } from "../../context/LanguageContext";
import fullLogo from "../../media/fulllogo.png";

function Footer() {
  const { t } = useLanguage();
  return (
    <footer id="contact" className="footer">
      <div className="footer__journey">
        <h3 className="footer__journey-title">{t.footer.title}</h3>
        <a
          href="https://www.instagram.com/tevelbiton_interiordesign/"
          className="footer__journey-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="footer__instagram-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" role="img">
              <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 1.8A3.7 3.7 0 0 0 3.8 7.5v9a3.7 3.7 0 0 0 3.7 3.7h9a3.7 3.7 0 0 0 3.7-3.7v-9a3.7 3.7 0 0 0-3.7-3.7h-9Zm9.8 1.4a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.8A3.2 3.2 0 1 0 12 15.2 3.2 3.2 0 0 0 12 8.8Z" />
            </svg>
          </span>
          {t.footer.instagram} →
        </a>
      </div>
      <div className="footer__content">
        <div className="footer__brand-main">
          <div className="footer__logo-row">
            <img
              src={fullLogo}
              alt="Tevel Biton Interior Design"
              className="footer__full-logo"
            />
            <div className="footer__contact">
              <a
                href="mailto:tevelbiton1@gmail.com"
                className="footer__link footer__contact-link"
              >
                <span className="footer__contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="img">
                    <path d="M20 4H4c-1.11 0-2 .89-2 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </span>
                tevelbiton1@gmail.com
              </a>
              <a
                href="tel:+972501234567"
                className="footer__link footer__contact-link"
              >
                <span className="footer__contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="img">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </span>
                +972 50 453 2673
              </a>
              <p className="footer__address">
                <span className="footer__contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="img">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
                  </svg>
                </span>
                {t.footer.address}
              </p>
            </div>
          </div>
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
