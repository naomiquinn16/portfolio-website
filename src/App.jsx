import { profile } from './data/profile'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Header name={profile.name} />
      <main>
        <Hero name={profile.name} title={profile.title} tagline={profile.tagline} />
        <About about={profile.about} location={profile.location} />
        <Experience experience={profile.experience} />
        <Projects projects={profile.projects} />
        <Skills skills={profile.skills} />
        <Contact email={profile.email} social={profile.social} />
      </main>
      <Footer name={profile.name} />
    </>
  )
}

export default App
