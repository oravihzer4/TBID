import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="about__container">
        <div className="about__content">
          <span className="about__label">About</span>
          <h2 className="about__title">Crafting Spaces with Soul</h2>
          <p className="about__text">
            I believe that every space tells a story. My approach combines minimalist aesthetics
            with warm, inviting elements that transform houses into homes.
          </p>
          <p className="about__text">
            I specialize in creating harmonious environments that reflect my clients' personalities
            while maintaining a timeless elegance. From concept to completion, I work closely with
            each client to ensure their vision becomes reality.
          </p>
          <p className="about__text about__text--highlight">
            Based in Tel Aviv, I bring a unique perspective that blends Mediterranean warmth
            with contemporary design principles.
          </p>
          <a href="#portfolio" className="about__cta">Read More</a>
        </div>
        <div className="about__stats">
          <div className="about__stat">
            <span className="about__stat-number">10+</span>
            <span className="about__stat-label">Years Experience</span>
          </div>
          <div className="about__stat">
            <span className="about__stat-number">150+</span>
            <span className="about__stat-label">Projects Completed</span>
          </div>
          <div className="about__stat">
            <span className="about__stat-number">50+</span>
            <span className="about__stat-label">Happy Clients</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
