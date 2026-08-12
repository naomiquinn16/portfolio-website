export default function Skills({ skillGroups, certifications }) {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills & Certifications</h2>
      <div className="skill-groups">
        {skillGroups.map((group) => (
          <div key={group.category} className="skill-group">
            <h3 className="skill-group-title">{group.category}</h3>
            <ul className="tag-list">
              {group.items.map((skill) => (
                <li key={skill} className="tag">{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {certifications?.length > 0 && (
        <div className="skill-group">
          <h3 className="skill-group-title">Certifications</h3>
          <ul className="tag-list">
            {certifications.map((cert) => (
              <li key={cert} className="tag">{cert}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  )
}
