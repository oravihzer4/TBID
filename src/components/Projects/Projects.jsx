import { Link } from "react-router-dom";
import { projects } from "../../data/projectsData";
import "./Projects.css";

function ProjectItem({ project }) {
  return (
    <Link to={`/project/${project.id}`} className="project-item">
      <span className="project-item__year">{project.year}</span>
      <div className="project-item__info">
        <h3 className="project-item__name">{project.name}</h3>
        <p className="project-item__meta">
          {project.type} · {project.location}
        </p>
      </div>
      <span className="project-item__arrow">→</span>
    </Link>
  );
}

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects__header">
        <span className="projects__label">Featured</span>
        <h2 className="projects__title">Projects</h2>
      </div>
      <div className="projects__list">
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
