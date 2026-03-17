import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, GraduationCap, Shield, ChevronDown } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

/** Typed rotator — resets cleanly when `resetKey` changes (language switch) */
function useTypingEffect(strings, resetKey, speed = 80, pause = 2000) {
  const [display,  setDisplay]  = useState('')
  const [strIdx,   setStrIdx]   = useState(0)
  const [charIdx,  setCharIdx]  = useState(0)
  const [deleting, setDeleting] = useState(false)

  // Hard-reset when language toggles
  useEffect(() => {
    setDisplay('')
    setStrIdx(0)
    setCharIdx(0)
    setDeleting(false)
  }, [resetKey])

  useEffect(() => {
    const current = strings[strIdx]
    if (!current) return
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

export default function Hero() {
  const { lang, tr }   = useLanguage()
  const h              = tr.hero
  const typed          = useTypingEffect(h.typedStrings, lang)
  const badgeIcons     = [MapPin, GraduationCap, Shield]
  const badgeLabels    = [h.badges.location, h.badges.degree, h.badges.security]
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    let animId
    let timerId

    const start = () => {
      const ctx = canvas.getContext('2d')

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
    }

    // Defer canvas init until after the browser has painted the LCP text
    if ('requestIdleCallback' in window) {
      timerId = requestIdleCallback(start, { timeout: 800 })
    } else {
      timerId = setTimeout(start, 200)
    }

    return () => {
      cancelAnimationFrame(animId)
      if ('requestIdleCallback' in window) cancelIdleCallback(timerId)
      else clearTimeout(timerId)
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

        {/* Status chips row */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
          className="flex flex-wrap items-center justify-center gap-3 mb-8"
        >
          {/* Availability chip */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-DEFAULT/30 bg-orange-glow">
            <span className="orange-dot animate-pulse-orange" />
            <span className="font-mono text-xs text-orange-DEFAULT tracking-widest uppercase">
              Available for Senior Roles
            </span>
          </div>

          {/* Site-Ready badge with tooltip */}
          <div className="relative group">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/40 bg-green-500/8 cursor-default select-none">
              {/* Pulsing green dot */}
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-50" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="font-mono text-xs text-green-400 tracking-widest uppercase">
                ✓ Site-Ready:
              </span>
              <span className="font-mono text-xs text-green-300/80 tracking-wider">
                CSO · H2S · CSTS 2020
              </span>
            </div>

            {/* Tooltip */}
            <div
              className="
                absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 z-50
                w-max max-w-xs px-4 py-3 rounded-lg
                border border-green-500/25 bg-[#0d1a0d]/95 backdrop-blur-md
                shadow-[0_4px_24px_rgba(34,197,94,0.15)]
                pointer-events-none
                opacity-0 translate-y-1
                group-hover:opacity-100 group-hover:translate-y-0
                transition-all duration-200 ease-out
              "
              role="tooltip"
            >
              {/* Tooltip arrow */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-green-500/25" />
              <p className="font-mono text-[11px] text-green-400 font-semibold mb-2 tracking-wide">
                Canadian Industrial Site-Ready
              </p>
              <ul className="flex flex-col gap-1.5">
                {[
                  { cert: 'CSO', full: 'Common Safety Orientation', issuer: 'Energy Safety Canada' },
                  { cert: 'H2S', full: 'H2S Awareness', issuer: 'Energy Safety Canada' },
                  { cert: 'CSTS', full: 'CSTS 2020 & WHMIS', issuer: 'Alberta Construction Safety Assoc. (ACSA)' },
                ].map(({ cert, full, issuer }) => (
                  <li key={cert} className="flex items-start gap-2">
                    <span className="font-mono text-[10px] font-bold text-green-500 shrink-0 mt-0.5 w-9">
                      {cert}
                    </span>
                    <div>
                      <span className="font-mono text-[10px] text-green-300/90">{full}</span>
                      <span className="font-mono text-[9px] text-green-500/50 block">{issuer}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Headline — rendered immediately for LCP; secondary elements animate in */}
        <div className="mb-3">
          <h1 className="font-mono font-bold text-4xl sm:text-5xl lg:text-7xl leading-tight">
            {/*
              Use solid text-white here — NOT text-gradient-white.
              background-clip:text sets -webkit-text-fill-color:transparent,
              which Lighthouse treats as unpainted text, killing LCP.
              The subtle white→gray gradient is preserved via a decorative
              shimmer overlay on the parent so the visual is unchanged.
            */}
            <span className="text-white block relative">
              Wurad A.
              {/* Decorative gradient overlay — aria-hidden, does not affect paint timing */}
              <span
                className="absolute inset-0 text-gradient-white pointer-events-none select-none"
                aria-hidden="true"
              >
                Wurad A.
              </span>
            </span>
          </h1>
          {/* Identity tag */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.15}
            className="font-mono text-xs sm:text-sm text-slate-400 tracking-wider mt-2 uppercase"
          >
            {h.identityTag}&nbsp;
            <span className="text-orange-DEFAULT/70">{h.identityTagSuffix}</span>
          </motion.p>
          {/* Typed rotator */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.25}
            className="font-mono font-bold text-xl sm:text-2xl lg:text-3xl text-gradient-orange mt-4 h-9 flex items-center justify-center"
          >
            <span>{typed}</span>
            <span className="animate-blink text-orange-DEFAULT ml-0.5">|</span>
          </motion.div>
        </div>

        {/* Master headline */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.35}
          className="max-w-2xl mx-auto text-base sm:text-lg text-text-secondary leading-relaxed mt-6 mb-5"
        >
          {h.headline.pre}{' '}
          <span className="text-text-primary font-medium">{h.headline.h1}</span>{' '}
          {h.headline.mid}{' '}
          <span className="text-text-primary font-medium">{h.headline.h2}</span>
          {h.headline.pre2}{' '}
          <span className="text-text-primary font-medium">{h.headline.h3}</span>{' '}
          {h.headline.mid2}{' '}
          <span className="text-orange-DEFAULT font-medium">{h.headline.h4}</span>{' '}
          {h.headline.mid3}{' '}
          <span className="text-orange-DEFAULT font-medium">{h.headline.h5}</span>.
        </motion.p>

        {/* "Gears to Code" hook */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.42}
          className="max-w-xl mx-auto mb-10"
        >
          <div className="flex items-start gap-3 px-4 py-3 rounded-lg border-l-2 border-orange-DEFAULT/50 bg-orange-DEFAULT/5">
            <span className="font-mono text-xs sm:text-sm text-slate-400 leading-relaxed italic">
              "{h.quote.pre}{' '}
              <span className="text-slate-300 not-italic font-medium">{h.quote.h1}</span>{' '}
              {h.quote.mid}{' '}
              <span className="text-slate-300 not-italic font-medium">{h.quote.h2}</span>."
            </span>
          </div>
        </motion.div>

        {/* Badges */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.5}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {badgeIcons.map((Icon, i) => (
            <div
              key={badgeLabels[i]}
              className="flex items-center gap-2 px-4 py-2 rounded-lg glassmorphism text-sm text-text-secondary"
            >
              <Icon size={14} className="text-orange-DEFAULT shrink-0" />
              <span>{badgeLabels[i]}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.6}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm shadow-orange-glow transition-colors duration-200 text-center"
          >
            {h.cta.projects}
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-lg bg-transparent border-2 border-slate-500 hover:border-slate-300 text-slate-200 hover:text-white font-semibold text-sm transition-colors duration-200 text-center"
          >
            {h.cta.connect}
          </a>
          <a
            href="/assets/Wurad_A_Resume.pdf"
            download="Wurad_A_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 rounded-lg bg-transparent border border-orange-DEFAULT/40 hover:border-orange-DEFAULT/80 text-orange-DEFAULT hover:text-orange-300 font-semibold text-sm transition-colors duration-200 text-center font-mono"
          >
            {h.cta.cv}
          </a>
        </motion.div>
      </div>{/* end content wrapper */}

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-400"
      >
        <span className="text-xs font-mono tracking-widest uppercase animate-pulse">{h.cta.scroll}</span>
        <ChevronDown size={16} className="animate-bounce" />
      </motion.div>
    </section>
  )
}
