import "./About.css";
import { useLanguage } from "../../context/LanguageContext";
import aboutHeroImage from "../../media/abouthero.jpg";

function About() {
  const { t } = useLanguage();
  return (
    <section id="about" className="about">
      <div className="about__container">
        <div className="about__content">
          <span className="about__label">{t.about.label}</span>
          {/* <h2 className="about__title">{t.about.title}</h2> */}
          <p className="about__text">{t.about.p1}</p>
          <p className="about__text">{t.about.p2}</p>
          <p className="about__text about__text--highlight">{t.about.p3}</p>
          {/* <a href="#portfolio" className="about__cta">
            {t.about.cta}
          </a> */}
        </div>
        <div className="about__image-wrapper">
          <img
            src={aboutHeroImage}
            alt="Tevel Biton"
            className="about__image"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
