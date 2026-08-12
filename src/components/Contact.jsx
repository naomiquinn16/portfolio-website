export default function Contact({ email, social }) {
  return (
    <section id="contact" className="section contact">
      <h2 className="section-title">Get in touch</h2>
      <p>
        The best way to reach me is by email at{' '}
        <a href={`mailto:${email}`}>{email}</a>.
      </p>
      <div className="social-links">
        {social.github && (
          <a href={social.github} target="_blank" rel="noreferrer">GitHub</a>
        )}
        {social.linkedin && (
          <a href={social.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        )}
      </div>
    </section>
  )
}
