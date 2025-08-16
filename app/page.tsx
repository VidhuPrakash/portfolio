import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Education from '../components/Education'
import Certificates from '../components/Certificates'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import ThemeToggle from '../components/ThemeToggle'

export default function Home() {
  return (
    <main className="min-h-screen bg-vintage text-vintage overflow-x-hidden">
      <div className="fixed inset-0 bg-vintage-pattern opacity-5 pointer-events-none" />
      <ThemeToggle />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Certificates />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}
