import "./Services.css";
import { useLanguage } from "../../context/LanguageContext";

function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="services">
      <div className="services__container">
        <div className="services__header">
          <span className="services__label">{t.services.label}</span>
          <h2 className="services__title">{t.services.title}</h2>
          <p className="services__subtitle">{t.services.subtitle}</p>
        </div>

        <div className="services__grid">
          {t.services.items.map(([title, description]) => (
            <article key={title} className="services__card">
              <h3 className="services__card-title">{title}</h3>
              <p className="services__card-text">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
