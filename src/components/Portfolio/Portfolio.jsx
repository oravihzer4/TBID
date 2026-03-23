import { Link } from "react-router-dom";
import { projects } from "../../data/projectsData";
import "./Portfolio.css";

function PortfolioCard({ project }) {
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
        <span className="portfolio-card__meta">
          {project.type} — {project.year}
        </span>
        <h3 className="portfolio-card__title">{project.name}</h3>
      </div>
    </Link>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio__header">
        <span className="portfolio__label">Selected Works</span>
        <h2 className="portfolio__title">Portfolio</h2>
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
