import './Portfolio.css';

const portfolioItems = [
  {
    id: 1,
    title: 'Modern Loft',
    category: 'Residential',
    description: 'Industrial elegance meets contemporary comfort.',
  },
  {
    id: 2,
    title: 'Coastal Villa',
    category: 'Residential',
    description: 'Light, airy spaces with Mediterranean influences.',
  },
  {
    id: 3,
    title: 'Urban Penthouse',
    category: 'Residential',
    description: 'City views framed by minimalist design.',
  },
  {
    id: 4,
    title: 'Scandinavian Retreat',
    category: 'Residential',
    description: 'Warm minimalism in natural materials.',
  },
  {
    id: 5,
    title: 'Art Gallery',
    category: 'Commercial',
    description: 'Spaces that elevate the art within.',
  },
  {
    id: 6,
    title: 'Wellness Studio',
    category: 'Commercial',
    description: 'Serene environments for restoration.',
  },
];

function PortfolioCard({ item }) {
  return (
    <article className="portfolio-card">
      <div className="portfolio-card__image">
        <div className="portfolio-card__placeholder" />
      </div>
      <div className="portfolio-card__content">
        <span className="portfolio-card__category">{item.category}</span>
        <h3 className="portfolio-card__title">{item.title}</h3>
        <p className="portfolio-card__description">{item.description}</p>
      </div>
    </article>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio__header">
        <span className="portfolio__label">Selected Work</span>
        <h2 className="portfolio__title">Portfolio</h2>
      </div>
      <div className="portfolio__grid">
        {portfolioItems.map((item) => (
          <PortfolioCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
