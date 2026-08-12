export default function Experience({ experience }) {
  return (
    <section id="experience" className="section">
      <h2 className="section-title">Experience</h2>
      <ol className="timeline">
        {experience.map((job) => (
          <li key={`${job.company}-${job.role}`} className="timeline-item">
            <div className="timeline-heading">
              <h3>{job.role}</h3>
              <span className="timeline-period">{job.period}</span>
            </div>
            <p className="timeline-company">{job.company}</p>
            <p className="timeline-description">{job.description}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
