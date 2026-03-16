import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, GraduationCap, Shield, ChevronDown } from 'lucide-react'

const TYPED_STRINGS = [
  'Systems Architect',
  'Industrial AI Specialist',
  'Cyber-Physical Security',
  'Reliability Engineer',
]

function useTypingEffect(strings, speed = 80, pause = 2000) {
  const [display, setDisplay] = useState('')
  const [strIdx, setStrIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = strings[strIdx]
    let timeout

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), speed)
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), speed / 2)
    } else if (deleting && charIdx === 0) {
      setDeleting(false)
      setStrIdx((s) => (s + 1) % strings.length)
    }

    setDisplay(current.slice(0, charIdx))
    return () => clearTimeout(timeout)
  }, [charIdx, deleting, strIdx, strings, speed, pause])

  return display
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut', delay },
  }),
}

const badges = [
  { icon: MapPin, label: 'Edmonton, AB · Agadir, Morocco' },
  { icon: GraduationCap, label: 'M.Sc. Software Engineering · UdeS' },
  { icon: Shield, label: 'McGill Applied Cybersecurity' },
]

export default function Hero() {
  const typed = useTypingEffect(TYPED_STRINGS)
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.5 + 0.5,
      a: Math.random(),
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(249,115,22,${p.a * 0.4})`
        ctx.fill()
      })

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(249,115,22,${(1 - dist / 120) * 0.08})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Layered backgrounds */}
      <div className="absolute inset-0 grid-overlay opacity-60" />
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-orange-glow rounded-full blur-[120px] opacity-30" />

      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Status chip */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-DEFAULT/30 bg-orange-glow mb-8"
        >
          <span className="orange-dot animate-pulse-orange" />
          <span className="font-mono text-xs text-orange-DEFAULT tracking-widest uppercase">
            Available for Senior Roles
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="font-mono font-bold text-4xl sm:text-5xl lg:text-7xl leading-tight mb-6"
        >
          <span className="text-gradient-white block">Morad Ait</span>
          <span className="text-gradient-orange block mt-2">
            {typed}
            <span className="animate-blink text-orange-DEFAULT">|</span>
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.35}
          className="max-w-2xl mx-auto text-base sm:text-lg text-text-secondary leading-relaxed mb-10"
        >
          Bridging the{' '}
          <span className="text-text-primary font-medium">physical layer</span> of
          heavy industry with{' '}
          <span className="text-text-primary font-medium">
            secure, intelligent software
          </span>
          . Canadian Citizen · M.Sc. Candidate · 3.84 GPA.
        </motion.p>

        {/* Badges */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.45}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {badges.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 px-4 py-2 rounded-lg glassmorphism text-sm text-text-secondary"
            >
              <Icon size={14} className="text-orange-DEFAULT shrink-0" />
              <span>{label}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.55}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="px-8 py-3.5 rounded-lg bg-orange-DEFAULT hover:bg-orange-dim text-background font-semibold text-sm shadow-orange-glow transition-all duration-200 hover:scale-105"
          >
            View Projects
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="px-8 py-3.5 rounded-lg border border-border-bright hover:border-orange-DEFAULT text-text-secondary hover:text-text-primary font-semibold text-sm transition-all duration-200"
          >
            Let's Connect
          </a>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-text-muted"
      >
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </motion.div>
    </section>
  )
}
