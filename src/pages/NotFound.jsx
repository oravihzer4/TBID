import { Link } from "react-router-dom";
import "./NotFound.css";
import { useLanguage } from "../context/LanguageContext";

function NotFound() {
  const { t } = useLanguage();
  return (
    <main className="not-found">
      <div className="not-found__content">
        <p className="not-found__label">404</p>
        <h1 className="not-found__title">{t.notFound.title}</h1>
        <p className="not-found__text">
          {t.notFound.text}
        </p>
        <Link to="/" className="not-found__button">
          {t.notFound.back}
        </Link>
      </div>
    </main>
  );
}

export default NotFound;
