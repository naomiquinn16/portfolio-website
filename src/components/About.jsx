export default function About({ about, location }) {
  return (
    <section id="about" className="section">
      <h2 className="section-title">About</h2>
      <p className="about-text">{about}</p>
      {location && <p className="about-location">📍 {location}</p>}
    </section>
  )
}
