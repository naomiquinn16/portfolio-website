export default function Skills({ skills }) {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills</h2>
      <ul className="tag-list skills-list">
        {skills.map((skill) => (
          <li key={skill} className="tag">{skill}</li>
        ))}
      </ul>
    </section>
  )
}
