import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projectsData";
import { useLanguage } from "../context/LanguageContext";
import ParallaxGallery from "../components/ParallaxGallery/ParallaxGallery";
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

    const onKeyboardNav = (event) => {
      if (event.code === "Escape") {
        setLightboxIndex(null);
      } else if (event.code === "ArrowRight") {
        setLightboxIndex((prev) => (prev + 1) % project.gallery.length);
      } else if (event.code === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev === 0 ? project.gallery.length - 1 : prev - 1,
        );
      }
    };

    window.addEventListener("keydown", onKeyboardNav);
    return () => window.removeEventListener("keydown", onKeyboardNav);
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
    language === "he"
      ? project.description
      : project.descriptionEn || project.description;

  return (
    <main className="project-detail">
      <div className="project-detail__container">
        <Link to="/#portfolio" className="project-detail__back">
          {t.projectDetail.back}
        </Link>

        <header className="project-detail__header">
          <span className="project-detail__meta">
            {t.projectMeta[project.type] || project.type} ·{" "}
            {t.projectMeta[project.location] || project.location} ·{" "}
            {project.year}
          </span>
          <h1 className="project-detail__title">{project.name}</h1>
          <p className="project-detail__description">{projectDescription}</p>
        </header>
      </div>

      <ParallaxGallery
        images={project.gallery}
        projectName={project.name}
        onImageClick={setLightboxIndex}
      />

      <div className="project-detail__container">
        <div className="project-detail__footer">
          <Link to="/#portfolio" className="project-detail__cta">
            {t.projectDetail.back}
          </Link>
        </div>
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
