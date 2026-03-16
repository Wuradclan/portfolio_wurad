import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Pillars from './components/Pillars'
import Projects from './components/Projects'
import ExperienceTimeline from './components/ExperienceTimeline'
import Academic from './components/Academic'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-background text-text-primary overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Pillars />
        <Projects />
        <ExperienceTimeline />
        <Academic />
        <Contact />
      </main>
    </div>
  )
}
