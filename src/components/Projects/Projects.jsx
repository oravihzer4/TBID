import "./Projects.css";

const projects = [
  {
    id: 1,
    year: "2024",
    name: "Skyline Residence",
    type: "Full Renovation",
    location: "Tel Aviv",
  },
  {
    id: 2,
    year: "2024",
    name: "Heritage Apartment",
    type: "Interior Design",
    location: "Jaffa",
  },
  {
    id: 3,
    year: "2023",
    name: "Riverside Loft",
    type: "Commercial",
    location: "Ramat Gan",
  },
  {
    id: 4,
    year: "2023",
    name: "Garden Villa",
    type: "New Build",
    location: "Herzliya",
  },
  {
    id: 5,
    year: "2023",
    name: "Minimal House",
    type: "Interior Design",
    location: "Tel Aviv",
  },
];

function ProjectItem({ project }) {
  return (
    <article className="project-item">
      <span className="project-item__year">{project.year}</span>
      <div className="project-item__info">
        <h3 className="project-item__name">{project.name}</h3>
        <p className="project-item__meta">
          {project.type} · {project.location}
        </p>
      </div>
      <span className="project-item__arrow">→</span>
    </article>
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
