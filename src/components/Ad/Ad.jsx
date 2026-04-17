import "./Ad.css";
import adBannerImage from "../../media/ad-banner.png";

function Ad() {
  return (
    <section className="ad" aria-label="Featured article">
      <a
        className="ad__link"
        href="https://www.mako.co.il/living-architecture/local/Article-53345742262ba81027.htm"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={adBannerImage} alt="mako feature banner" className="ad__image" />
      </a>
    </section>
  );
}

export default Ad;
