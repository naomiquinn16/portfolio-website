export default function Projects({ projects }) {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <article key={project.name} className="project-card">
            <h3>{project.name}</h3>
            {project.role && <p className="project-role">{project.role}</p>}
            <ul className="bullet-list">
              {project.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
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
