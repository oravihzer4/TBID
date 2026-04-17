import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projectsData";
import { useLanguage } from "../context/LanguageContext";
import "./ProjectDetail.css";

function ProjectDetail() {
  const { t, language } = useLanguage();
  const { id } = useParams();
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const project = projects.find((p) => p.id === parseInt(id, 10));

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [id]);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setLightboxIndex(null);
      } else if (event.key === "ArrowRight") {
        setLightboxIndex((prev) => (prev + 1) % project.gallery.length);
      } else if (event.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev === 0 ? project.gallery.length - 1 : prev - 1,
        );
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxIndex, project?.gallery?.length]);

  if (!project) {
    return (
      <div className="project-not-found">
        <h1>{t.projectDetail.notFound}</h1>
        <Link to="/">← {t.projectDetail.backHome}</Link>
      </div>
    );
  }

  const projectDescription =
    language === "he" ? project.description : project.descriptionEn || project.description;

  return (
    <main className="project-detail">
      <Link to="/#portfolio" className="project-detail__back">
        {t.projectDetail.back}
      </Link>

      <header className="project-detail__header">
        <span className="project-detail__meta">
          {t.projectMeta[project.type] || project.type} ·{" "}
          {t.projectMeta[project.location] || project.location} · {project.year}
        </span>
        <h1 className="project-detail__title">{project.name}</h1>
        <p className="project-detail__description">{projectDescription}</p>
      </header>

      <section className="project-detail__gallery">
        {project.gallery.map((img, index) => (
          <button
            key={index}
            type="button"
            className="project-gallery__item"
            onClick={() => setLightboxIndex(index)}
            aria-label={`Open image ${index + 1}`}
          >
            <img src={img} alt={`${project.name} ${index + 1}`} />
          </button>
        ))}
      </section>

      <div className="project-detail__footer">
        <Link to="/#portfolio" className="project-detail__cta">
          {t.projectDetail.back}
        </Link>
      </div>

      {lightboxIndex !== null && (
        <div
          className="project-lightbox"
          onClick={() => setLightboxIndex(null)}
          role="presentation"
        >
          <button
            className="project-lightbox__close"
            type="button"
            onClick={() => setLightboxIndex(null)}
          >
            ×
          </button>
          <button
            className="project-lightbox__nav project-lightbox__nav--prev"
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) =>
                prev === 0 ? project.gallery.length - 1 : prev - 1,
              );
            }}
          >
            ‹
          </button>
          <img
            key={lightboxIndex}
            className="project-lightbox__image"
            src={project.gallery[lightboxIndex]}
            alt={`${project.name} ${lightboxIndex + 1}`}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="project-lightbox__nav project-lightbox__nav--next"
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev + 1) % project.gallery.length);
            }}
          >
            ›
          </button>
        </div>
      )}
    </main>
  );
}

export default ProjectDetail;
