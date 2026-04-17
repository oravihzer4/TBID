import { useEffect, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import "./CookieBanner.css";

const COOKIE_KEY = "tbid_cookies_ack";

function CookieBanner() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasAccepted = localStorage.getItem(COOKIE_KEY) === "true";
    setIsVisible(!hasAccepted);
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_KEY, "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-live="polite" aria-label="Cookie consent">
      <p className="cookie-banner__text">{t.cookies.message}</p>
      <button type="button" className="cookie-banner__button" onClick={handleAccept}>
        {t.cookies.accept}
      </button>
    </div>
  );
}

export default CookieBanner;
