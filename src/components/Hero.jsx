export default function Hero({ name, title, tagline }) {
  return (
    <section id="top" className="hero">
      <p className="eyebrow">Hi, I'm</p>
      <h1>{name}</h1>
      <h2 className="hero-title">{title}</h2>
      <p className="hero-tagline">{tagline}</p>
      <div className="hero-actions">
        <a className="button primary" href="#contact">Get in touch</a>
        <a className="button" href="#projects">View projects</a>
      </div>
    </section>
  )
}
