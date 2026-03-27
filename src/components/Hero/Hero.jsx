import "./Hero.css";
import heroVideo from "../../media/mainvideo/copy_74737672-A535-4EBE-83C7-33193399F7BF.mov";
import { useLanguage } from "../../context/LanguageContext";
import logo from "../../media/tblogo.png";

function Hero() {
  const { t } = useLanguage();
  return (
    <section id="hero" className="hero">
      <div className="hero__video-wrap">
        <video
          className="hero__video"
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1920&q=80"
        >
          <source src={heroVideo} type="video/quicktime" />
        </video>
      </div>
      <div className="hero__overlay" />
      <div className="hero__content">
        {/* <p className="hero__label">{t.hero.label}</p> */}

        <h1 className="hero__title">Tevel Biton</h1>
        <p className="hero__tagline">
          <span className="hero__tagline-accent">{t.hero.tagline2}</span>
        </p>
        {/* <p className="hero__subtitle">{t.hero.subtitle}</p>  */}
        <a href="#portfolio" className="hero__cta">
          {t.hero.cta}
        </a>
      </div>
    </section>
  );
}

export default Hero;
