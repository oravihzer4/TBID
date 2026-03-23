import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projectsData";
import "./ProjectDetail.css";

function ProjectDetail() {
  const { id } = useParams();
  const [activeImage, setActiveImage] = useState(0);

  const project = projects.find((p) => p.id === parseInt(id, 10));

  if (!project) {
    return (
        <div className="project-not-found">
          <h1>Project not found</h1>
          <Link to="/">← Back to home</Link>
        </div>
    );
  }

  return (
    <main className="project-detail">
        <Link to="/#portfolio" className="project-detail__back">
          ← Back to Portfolio
        </Link>

        <header className="project-detail__header">
          <span className="project-detail__meta">
            {project.type} · {project.location} · {project.year}
          </span>
          <h1 className="project-detail__title">{project.name}</h1>
          <p className="project-detail__description">{project.description}</p>
        </header>

        <section className="project-detail__gallery">
          <div className="project-gallery__main">
            <img
              src={project.gallery[activeImage]}
              alt={`${project.name} - ${activeImage + 1}`}
            />
          </div>
          <div className="project-gallery__thumbnails">
            {project.gallery.map((img, index) => (
              <button
                key={index}
                type="button"
                className={`project-gallery__thumb ${activeImage === index ? "active" : ""}`}
                onClick={() => setActiveImage(index)}
                aria-label={`View image ${index + 1}`}
              >
                <img src={img} alt="" />
              </button>
            ))}
          </div>
        </section>

        <div className="project-detail__footer">
          <Link to="/#portfolio" className="project-detail__cta">
            View All Projects
          </Link>
        </div>
    </main>
  );
}

export default ProjectDetail;
