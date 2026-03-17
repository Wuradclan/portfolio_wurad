import { motion } from 'framer-motion'
import { Cpu, HardHat, Shield, GitBranch } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useLanguage } from '../contexts/LanguageContext'

const statIcons = [HardHat, Cpu, Shield, GitBranch]

/** Renders bio segments with inline colour highlights — no regex, fully typed */
function BioText({ segments }) {
  return (
    <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
      {segments.map(({ text, type }, i) => {
        if (type === 'primary') {
          return <span key={i} className="text-text-primary font-semibold">{text}</span>
        }
        if (type === 'orange') {
          return <span key={i} className="text-orange-DEFAULT font-medium">{text}</span>
        }
        return <span key={i}>{text}</span>
      })}
    </p>
  )
}

export default function About() {
  const { ref, isVisible } = useScrollReveal(0.15)
  const { tr }             = useLanguage()
  const a                  = tr.about

  return (
    <section id="about" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0d0d0d]" />
      <div className="absolute inset-0 grid-overlay opacity-25" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[260px] rounded-full bg-orange-DEFAULT/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: 'easeOut' }}
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-orange-DEFAULT/40" />
            <h2 className="font-mono text-[11px] text-orange-DEFAULT tracking-widest uppercase">
              {a.eyebrow}
            </h2>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-orange-DEFAULT/40" />
          </div>

          {/* Main card */}
          <div className="glassmorphism rounded-2xl p-8 sm:p-10 relative overflow-hidden">
            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-40 h-40 grid-overlay opacity-30 rounded-bl-3xl pointer-events-none" />
            <div className="absolute top-0 right-0 w-px h-24 bg-gradient-to-b from-orange-DEFAULT/40 to-transparent" />
            <div className="absolute top-0 right-0 w-24 h-px bg-gradient-to-l from-orange-DEFAULT/40 to-transparent" />

            {/* Two-column layout */}
            <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-8 lg:gap-12 items-start mb-8">

              {/* ── Image column ── */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
                className="flex flex-col items-center lg:items-start gap-3"
              >
                <div className="relative">
                  <div className="absolute -inset-3 rounded-2xl bg-orange-DEFAULT/10 blur-2xl pointer-events-none" />
                  <img
                    src="/assets/hero_banner.webp"
                    alt="Lead Architect Profile Cartoon"
                    loading="lazy"
                    decoding="async"
                    className="relative w-44 h-44 lg:w-full lg:h-auto aspect-square object-cover rounded-2xl border border-white/10 shadow-xl"
                  />
                  <span className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-[#0a0a0a]/80 backdrop-blur-sm border border-emerald-500/30 rounded-full px-2.5 py-1 text-[10px] font-mono text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {a.available}
                  </span>
                </div>

                {/* Label plate */}
                <div className="text-center lg:text-left">
                  <p className="font-mono font-bold text-sm text-text-primary">{a.nameplate}</p>
                  <p className="font-mono text-[10px] text-text-muted mt-0.5">
                    {a.subLabel}
                  </p>
                </div>
              </motion.div>

              {/* ── Bio column ── */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.22, ease: 'easeOut' }}
                className="flex flex-col justify-center"
              >
                <BioText segments={a.bioSegments} />

                {/* Skill tags */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {a.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] text-text-muted border border-border rounded-full px-3 py-1 bg-surface/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-orange-DEFAULT/20 via-orange-DEFAULT/10 to-transparent mb-8" />

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {a.stats.map(({ label, sub }, i) => {
                const Icon = statIcons[i]
                return (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 16 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.45, delay: 0.35 + i * 0.08, ease: 'easeOut' }}
                    className="group flex flex-col items-center text-center gap-2 p-4 rounded-xl border border-border hover:border-orange-DEFAULT/30 bg-surface/50 hover:bg-orange-DEFAULT/5 transition-all duration-300"
                  >
                    <div className="p-2 rounded-lg bg-orange-DEFAULT/10 border border-orange-DEFAULT/20 group-hover:bg-orange-DEFAULT/15 transition-colors">
                      <Icon size={15} className="text-orange-DEFAULT" />
                    </div>
                    <span className="font-mono font-bold text-sm text-text-primary">{label}</span>
                    <span className="font-mono text-[10px] text-text-muted leading-tight">{sub}</span>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
