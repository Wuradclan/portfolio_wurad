import { motion } from 'framer-motion'
import { HardHat, Shield, Brain, Activity, Cpu, Lock, LayoutTemplate, CheckCircle2 } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const pillars = [
  {
    id: 'reliability',
    icon: HardHat,
    tag: '01 — INDUSTRIAL',
    title: 'Reliability & OT Operations',
    subtitle: 'Reliability & OT Operations',
    accent: '#f97316',
    description:
      'Specialist in industrial asset reliability with hands-on deployment experience in Tier-1 global mining. Translating raw operational telemetry into actionable maintenance intelligence.',
    skills: [
      { icon: Activity,      label: 'MTTR / MTBF Optimization',  desc: 'Mean-time analytics driving heavy machinery uptime' },
      { icon: HardHat,       label: 'DuPont Safety Culture',      desc: 'HSE Coordination trained by global safety frameworks' },
      { icon: Cpu,           label: 'Reliability Engineering',    desc: 'Structured SOP and digital workflow deployment in complex physical operations' },
    ],
    stat: { value: '99.2%', label: 'Asset Uptime Target' },
    siteReady: { label: 'Canadian Industrial Site-Ready', certs: 'CSO · H2S · CSTS 2020' },
  },
  {
    id: 'security',
    icon: Shield,
    tag: '02 — SECURITY',
    title: 'Cyber-Physical Security',
    subtitle: 'Cyber-Physical Security',
    accent: '#f97316',
    description:
      'Architecting robust cyber defenses for converged IT/OT environments where software vulnerabilities have immediate physical-world consequences. McGill-certified in Applied Cybersecurity.',
    skills: [
      { icon: Shield,        label: 'Security Architecture & Design', desc: 'Building resilient, fault-tolerant network topologies' },
      { icon: Lock,          label: 'Enterprise Risk Management',     desc: 'Systemic risk mapping and threat modeling' },
      { icon: Cpu,           label: 'Secure IoT / ICS',              desc: 'Hardening industrial control systems and edge-sensor networks' },
    ],
    stat: { value: 'IT/OT', label: 'Convergence Specialization' },
  },
  {
    id: 'intelligence',
    icon: Brain,
    tag: '03 — INTELLIGENCE & ARCHITECTURE',
    title: 'Spatial Computing & AI',
    subtitle: 'Spatial Computing & AI Pipelines',
    accent: '#f97316',
    description:
      'Building next-generation diagnostic systems. Fusing predictive AI with immersive XR interfaces, grounded in a formal AEC in VR & AR Specialist (Champlain College) and backed by master\'s-level software engineering methodologies.',
    skills: [
      { icon: Cpu,            label: 'Data Engineering & Big Data',    desc: 'Architecting scalable data warehousing pipelines' },
      { icon: Activity,       label: 'XR Architecture & Spatial Computing', desc: 'Formal AEC credential applied to BCI-VR neuro-diagnostics and industrial spatial UI' },
      { icon: Brain,          label: 'Predictive ML Models',           desc: 'Deploying AI for industrial failure prediction and clinical rehabilitation' },
      { icon: LayoutTemplate, label: 'Enterprise Systems Analysis',    desc: 'End-to-end software architecture and lifecycle management' },
    ],
    stat: { value: 'HA', label: 'High-Availability Systems' },
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

        {/* Canadian site-ready credential badge */}
        {pillar.siteReady && (
          <div className="flex items-center gap-2.5 mt-4 px-3 py-2.5 rounded-lg border border-amber-400/25 bg-amber-400/5 w-fit">
            <CheckCircle2 size={12} className="text-amber-400 shrink-0" />
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="font-mono text-[10px] font-semibold text-amber-400 tracking-wide">
                {pillar.siteReady.label}
              </span>
              <span className="font-mono text-[9px] text-amber-400/40">·</span>
              <span className="font-mono text-[10px] text-amber-400/70">
                {pillar.siteReady.certs}
              </span>
            </div>
          </div>
        )}
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
