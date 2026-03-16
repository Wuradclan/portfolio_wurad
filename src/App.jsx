import { Analytics } from '@vercel/analytics/react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Pillars from './components/Pillars'
import Projects from './components/Projects'
import ExperienceTimeline from './components/ExperienceTimeline'
import IndustrialOps from './components/IndustrialOps'
import Endorsements from './components/Endorsements'
import Academic from './components/Academic'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <div className="min-h-screen bg-background text-text-primary overflow-x-hidden">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Pillars />
          <Projects />
          <ExperienceTimeline />
          <IndustrialOps />
          <Endorsements />
          <Academic />
          <Contact />
        </main>
      </div>
      <Analytics />
    </>
  )
}
