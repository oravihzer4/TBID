import { Link } from "react-router-dom";
import { projects } from "../../data/projectsData";
import { useLanguage } from "../../context/LanguageContext";
import "./Portfolio.css";

function PortfolioCard({ project }) {
  const { language } = useLanguage();
  const projectDescription =
    language === "he" ? project.description : project.descriptionEn || project.description;

  return (
    <Link to={`/project/${project.id}`} className="portfolio-card">
      <div className="portfolio-card__image">
        <img
          src={project.gallery[0]}
          alt={project.name}
          className="portfolio-card__img"
        />
      </div>
      <div className="portfolio-card__content">
        <h2 className="portfolio-card__title">{project.name}</h2>
        <p className="portfolio-card__description">{projectDescription}</p>
      </div>
    </Link>
  );
}

function Portfolio() {
  const { t } = useLanguage();
  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio__header">
        <span className="portfolio__label">{t.portfolio.label}</span>
        <h2 className="portfolio__title">{t.portfolio.title}</h2>
      </div>
      <div className="portfolio__grid">
        {projects.map((project) => (
          <PortfolioCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
