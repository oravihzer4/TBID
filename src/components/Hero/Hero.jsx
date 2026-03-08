import "./Hero.css";

const heroImage =
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1920&q=80";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__image" style={{ backgroundImage: `url(${heroImage})` }} />
      <div className="hero__overlay" />
      <div className="hero__content">
        <p className="hero__label">Interior Designer</p>
        <h1 className="hero__title">Tevel Biton</h1>
        <p className="hero__tagline">
          Functional. Elegant. Unique.
          <span className="hero__tagline-accent">Life Well Designed.</span>
        </p>
        <p className="hero__subtitle">
          Creating timeless spaces that harmonize elegance with everyday living.
        </p>
        <a href="#portfolio" className="hero__cta">
          View Portfolio
        </a>
      </div>
    </section>
  );
}

export default Hero;
