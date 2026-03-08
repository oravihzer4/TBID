import './Portfolio.css';

const portfolioItems = [
  { id: 1, title: 'Serene Retreat', category: 'Bedroom', year: '2024', image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80' },
  { id: 2, title: 'Modern Culinary', category: 'Kitchen', year: '2024', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80' },
  { id: 3, title: 'Elegant Gatherings', category: 'Dining Room', year: '2023', image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80' },
  { id: 4, title: 'Spa Sanctuary', category: 'Bathroom', year: '2023', image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=80' },
  { id: 5, title: 'Urban Loft', category: 'Living', year: '2023', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80' },
  { id: 6, title: 'Coastal Light', category: 'Residential', year: '2024', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80' },
];

function PortfolioCard({ item }) {
  return (
    <article className="portfolio-card">
      <div className="portfolio-card__image">
        <img src={item.image} alt={item.title} className="portfolio-card__img" />
      </div>
      <div className="portfolio-card__content">
        <span className="portfolio-card__meta">{item.category} — {item.year}</span>
        <h3 className="portfolio-card__title">{item.title}</h3>
      </div>
    </article>
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
        {portfolioItems.map((item) => (
          <PortfolioCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
