export default function Footer({ name }) {
  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} {name}. Built with React + Vite.</p>
    </footer>
  )
}
