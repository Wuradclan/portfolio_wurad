import { motion } from 'framer-motion'
import { Cpu, HardHat, Shield, GitBranch } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const pillars = [
  { icon: HardHat,   label: '11 yrs',  sub: 'Heavy Industry Operations' },
  { icon: Cpu,       label: 'Edge AI', sub: 'Spatial & Embedded Systems' },
  { icon: Shield,    label: 'Cyber',   sub: 'IT/OT Security Architecture' },
  { icon: GitBranch, label: 'M.Sc.',   sub: 'Software Engineering · UdeS' },
]

export default function About() {
  const { ref, isVisible } = useScrollReveal(0.15)

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
              About the Architect
            </h2>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-orange-DEFAULT/40" />
          </div>

          {/* Main card */}
          <div className="glassmorphism rounded-2xl p-8 sm:p-10 relative overflow-hidden">
            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-40 h-40 grid-overlay opacity-30 rounded-bl-3xl pointer-events-none" />
            <div className="absolute top-0 right-0 w-px h-24 bg-gradient-to-b from-orange-DEFAULT/40 to-transparent" />
            <div className="absolute top-0 right-0 w-24 h-px bg-gradient-to-l from-orange-DEFAULT/40 to-transparent" />

            {/* Two-column layout: photo + text */}
            <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-8 lg:gap-12 items-start mb-8">

              {/* ── Photo column ── */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
                className="flex flex-col items-center lg:items-start gap-3"
              >
                <div className="relative">
                  {/* Glow halo behind photo */}
                  <div className="absolute -inset-3 rounded-2xl bg-orange-DEFAULT/10 blur-2xl pointer-events-none" />
                  <img
                    src="/assets/profile-photo.webp"
                    alt="Wurad A. — Lead Architect, Intelligent & Secured Industrial Ecosystems"
                    loading="lazy"
                    decoding="async"
                    className="relative w-44 h-44 lg:w-full lg:h-auto aspect-square object-cover rounded-2xl border border-white/10 shadow-xl"
                  />
                  {/* Status pip */}
                  <span className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-[#0a0a0a]/80 backdrop-blur-sm border border-emerald-500/30 rounded-full px-2.5 py-1 text-[10px] font-mono text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Available
                  </span>
                </div>

                {/* Name plate */}
                <div className="text-center lg:text-left">
                  <p className="font-mono font-bold text-sm text-text-primary">Wurad A.</p>
                  <p className="font-mono text-[10px] text-text-muted mt-0.5">
                    Lead Architect | AI • XR • IIoT
                  </p>
                </div>
              </motion.div>

              {/* ── Text column ── */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.22, ease: 'easeOut' }}
                className="flex flex-col justify-center"
              >
                <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
                  A multidisciplinary{' '}
                  <span className="text-text-primary font-semibold">Systems Architect</span>{' '}
                  with a rare duality:{' '}
                  <span className="text-orange-DEFAULT font-medium">11 years of operational grit</span>{' '}
                  in heavy industry coupled with advanced research in{' '}
                  <span className="text-text-primary font-medium">Software Engineering</span> and{' '}
                  <span className="text-text-primary font-medium">Cybersecurity</span>.
                  My expertise spans the entire stack — from simulating{' '}
                  <span className="text-text-primary font-medium">mechanical gear constraints</span>{' '}
                  in remote desert mining camps to architecting{' '}
                  <span className="text-orange-DEFAULT font-medium">low-latency edge AI</span> and{' '}
                  <span className="text-orange-DEFAULT font-medium">neuro-reactive VR interfaces</span>.
                  I specialize in bridging the gap between the physical layer and the digital edge,
                  ensuring that{' '}
                  <span className="text-text-primary font-medium">high-availability systems</span>{' '}
                  are as resilient in the field as they are secure in the cloud.
                </p>

                {/* Inline highlight tags */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {[
                    'Industrial Reliability', 'Edge AI', 'Spatial Computing',
                    'Cybersecurity', 'VR/AR Development', 'Systems Architecture',
                  ].map((tag) => (
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
              {pillars.map(({ icon: Icon, label, sub }, i) => (
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
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
