import { motion } from 'framer-motion'
import { HardHat, Shield, Brain, Activity, Cpu, Lock } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const pillars = [
  {
    id: 'reliability',
    icon: HardHat,
    tag: '01 — INDUSTRIAL',
    title: 'Reliability Engineering',
    subtitle: 'Physical Layer Operations',
    accent: '#f97316',
    description:
      'Specialist in industrial asset reliability with hands-on OCP Group (mining sector) deployment experience. Translating raw operational data into actionable maintenance intelligence.',
    skills: [
      { icon: Activity, label: 'MTTR / MTBF Optimization', desc: 'Mean-time analytics driving uptime improvements' },
      { icon: HardHat, label: 'DuPont Safety Culture', desc: 'HSE Coordination trained by DuPont coaches' },
      { icon: Cpu, label: 'Bureau de Méthodes', desc: 'Structured workflow deployment in mining operations' },
    ],
    stat: { value: '99.2%', label: 'Asset Uptime Target' },
  },
  {
    id: 'security',
    icon: Shield,
    tag: '02 — SECURITY',
    title: 'Cyber-Physical Security',
    subtitle: 'McGill-Certified Architecture',
    accent: '#f97316',
    description:
      'McGill University Applied Cybersecurity graduate. Architecting defences for converged IT/OT environments where a software vulnerability can have physical-world consequences.',
    skills: [
      { icon: Shield, label: 'Security Architecture', desc: 'A-grade in Security Architecture & Design' },
      { icon: Lock, label: 'Risk Management (4.0)', desc: 'A-grade in Security Risk Management' },
      { icon: Cpu, label: 'Secure IoT / ICS', desc: 'Securing industrial control & sensor networks' },
    ],
    stat: { value: '4.0', label: 'Cybersecurity GPA (McGill)' },
  },
  {
    id: 'intelligence',
    icon: Brain,
    tag: '03 — INTELLIGENCE',
    title: 'AI & Extended Reality',
    subtitle: 'Intelligent Systems Design',
    accent: '#f97316',
    description:
      'Building next-generation diagnostic and situational-awareness systems that fuse AI with immersive XR interfaces. Specializing in applications where lives depend on the accuracy of the model.',
    skills: [
      { icon: Brain, label: 'Predictive AI Models', desc: 'ML pipelines for industrial failure prediction' },
      { icon: Activity, label: 'VR Diagnostics (BCI)', desc: 'Brain-Computer Interface + VR neuro-diagnostics' },
      { icon: Cpu, label: 'Kinetic Dexterity', desc: 'AI-driven platform for dyspraxia rehabilitation' },
    ],
    stat: { value: 'XR+AI', label: 'Neurotech Specialization' },
  },
]

function PillarCard({ pillar, index }) {
  const { ref, isVisible } = useScrollReveal()
  const Icon = pillar.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
      className="group relative flex flex-col rounded-xl border border-border bg-card hover:border-orange-DEFAULT/40 hover:bg-card-hover transition-all duration-300 overflow-hidden hover:shadow-card-hover"
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-DEFAULT to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Corner grid decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 grid-overlay opacity-40 rounded-bl-3xl" />

      <div className="relative z-10 p-8 flex flex-col gap-6 h-full">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs text-orange-DEFAULT tracking-widest uppercase">
              {pillar.tag}
            </span>
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-orange-glow border border-orange-DEFAULT/20">
                <Icon size={22} className="text-orange-DEFAULT" />
              </div>
              <div>
                <h3 className="font-mono font-bold text-xl text-text-primary">
                  {pillar.title}
                </h3>
                <p className="text-xs text-text-muted mt-0.5">{pillar.subtitle}</p>
              </div>
            </div>
          </div>
          {/* Stat badge */}
          <div className="text-right shrink-0 ml-4">
            <div className="font-mono font-bold text-2xl text-gradient-orange">
              {pillar.stat.value}
            </div>
            <div className="text-[10px] text-text-muted max-w-[80px] text-right">
              {pillar.stat.label}
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-text-secondary leading-relaxed">{pillar.description}</p>

        {/* Skills list */}
        <ul className="flex flex-col gap-3 mt-auto">
          {pillar.skills.map(({ icon: SIcon, label, desc }) => (
            <li key={label} className="flex items-start gap-3">
              <div className="mt-0.5 shrink-0">
                <SIcon size={14} className="text-orange-DEFAULT" />
              </div>
              <div>
                <span className="text-sm font-medium text-text-primary">{label}</span>
                <p className="text-xs text-text-muted mt-0.5">{desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default function Pillars() {
  const { ref: headRef, isVisible: headVisible } = useScrollReveal()

  return (
    <section id="pillars" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 grid-overlay opacity-30" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="font-mono text-xs text-orange-DEFAULT tracking-widest uppercase">
            Core Competencies
          </span>
          <h2 className="font-mono font-bold text-3xl sm:text-4xl lg:text-5xl text-gradient-white mt-4 mb-6">
            The Three Pillars
          </h2>
          <p className="max-w-2xl mx-auto text-text-secondary">
            A rare convergence of industrial operations experience, cybersecurity
            architecture, and AI/XR development — all within a single systems mindset.
          </p>
        </motion.div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <PillarCard key={pillar.id} pillar={pillar} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
