export default function Projects({ projects }) {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <article key={project.name} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <ul className="tag-list">
              {project.tags.map((tag) => (
                <li key={tag} className="tag">{tag}</li>
              ))}
            </ul>
            {project.link && (
              <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
                View project →
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
