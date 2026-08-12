export default function Education({ education }) {
  return (
    <section id="education" className="section">
      <h2 className="section-title">Education</h2>
      <ul className="education-list">
        {education.map((entry) => (
          <li key={`${entry.institution}-${entry.degree}`} className="education-item">
            <div className="timeline-heading">
              <h3>{entry.institution}</h3>
              <span className="timeline-period">{entry.period}</span>
            </div>
            <p className="timeline-company">{entry.degree}</p>
            {entry.detail && <p className="education-detail">{entry.detail}</p>}
          </li>
        ))}
      </ul>
    </section>
  )
}
