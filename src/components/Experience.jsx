import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HardHat, Code2, Brain, MapPin, Calendar, ChevronDown, ChevronUp, Briefcase } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const phases = [
  {
    id: 'phase3',
    phase: 'Phase 3',
    label: 'The Cyber-Physical & Neurotech Edge',
    icon: Brain,
    color: 'from-orange-DEFAULT/20 to-transparent',
    borderColor: 'border-orange-DEFAULT/50',
    dotColor: 'bg-orange-DEFAULT',
    roles: [
      {
        id: 'cognixr',
        title: 'VR/AR & Bio-Signal Developer',
        company: 'Cogni XR Health',
        period: 'Jul 2022 – Jul 2024',
        location: 'Montreal, QC',
        impact: [
          'Architected immersive VR/AR applications using Unity and C# for clinical therapeutic deployment.',
          'Engineered real-time visualization components that translated raw EEG brain signals into in-scene therapeutic responses.',
          'Integrated VR applications with backend APIs to enable autonomous headset deployment workflows.',
        ],
        tags: ['Unity', 'C#', 'EEG / BCI', 'VR/AR', 'REST APIs', 'Clinical Tech'],
        yoe: '+3 yrs',
      },
    ],
  },
  {
    id: 'phase2',
    phase: 'Phase 2',
    label: 'The Enterprise Software Bridge',
    icon: Code2,
    color: 'from-sky-500/10 to-transparent',
    borderColor: 'border-sky-500/40',
    dotColor: 'bg-sky-400',
    roles: [
      {
        id: 'ibm',
        title: 'Fullstack Software Engineer',
        company: 'IBM Canada',
        period: 'Apr 2021 – Apr 2022',
        location: 'Bromont, QC',
        impact: [
          'Developed Java Spring Boot applications and RESTful APIs powering Industry 4.0 smart manufacturing systems.',
          'Maintained and debugged enterprise-scale architecture under strict Agile/Scrum sprint cadences.',
        ],
        tags: ['Java', 'Spring Boot', 'REST APIs', 'Industry 4.0', 'Agile', 'Microservices'],
        yoe: '+2 yrs',
      },
      {
        id: 'auger',
        title: 'Industrial Software Developer (C#)',
        company: 'Auger Groupe Conseil',
        period: 'Jan 2021 – Aug 2021',
        location: 'Trois-Rivières, QC',
        impact: [
          'Built a mobile industrial maintenance management application using C#, WPF, and .NET Core.',
          'Designed reusable object-oriented libraries and integrated SSRS reporting for client operational analytics.',
        ],
        tags: ['C#', 'WPF', '.NET Core', 'SSRS', 'Mobile', 'OOP'],
        yoe: null,
      },
      {
        id: 'simfusion',
        title: 'Unity C# Developer',
        company: 'Simfusion & CognicorpLusTherapy.com',
        period: 'Mar 2020 – Jul 2020',
        location: 'Montreal, QC',
        impact: [
          'Designed interactive 3D VR applications targeting clinical environments with a focus on immersion and therapeutic value.',
          'Optimized application performance across macOS and iOS deployment targets.',
        ],
        tags: ['Unity', 'C#', '3D / VR', 'iOS', 'macOS', 'Clinical UX'],
        yoe: '+1 yr',
      },
    ],
  },
  {
    id: 'phase1',
    phase: 'Phase 1',
    label: 'The Industrial Foundation',
    icon: HardHat,
    color: 'from-amber-500/10 to-transparent',
    borderColor: 'border-amber-500/40',
    dotColor: 'bg-amber-400',
    roles: [
      {
        id: 'ocp',
        title: 'HSE Coordinator & Maintenance Planner',
        company: 'Global Tier-1 Mining Corporation',
        period: 'Jul 2006 – Mar 2017',
        location: 'North Africa',
        impact: [
          'Implemented digital workflows for industrial maintenance management to optimize equipment availability (MTTR / MTBF).',
          'Supervised mechanical engineering projects using SolidWorks and AutoCAD in a large-scale mining environment.',
          'Enforced rigorous Health, Safety & Environment protocols trained under DuPont HSE methodology coaches.',
        ],
        tags: ['HSE / DuPont', 'MTTR / MTBF', 'SolidWorks', 'AutoCAD', 'Maintenance Planning', 'Mining Ops'],
        yoe: null,
      },
    ],
  },
]

function RoleCard({ role, isFirst }) {
  const [expanded, setExpanded] = useState(isFirst)

  return (
    <div className="group rounded-xl border border-border bg-card hover:border-orange-DEFAULT/30 transition-all duration-300 overflow-hidden">
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-DEFAULT to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none" />

      {/* Role header — always visible */}
      <button
        onClick={() => setExpanded((v) => !v)}
        className="w-full text-left p-5 flex items-start justify-between gap-4 hover:bg-card-hover transition-colors duration-200"
      >
        <div className="flex items-start gap-4 flex-1 min-w-0">
          <div className="shrink-0 mt-0.5 p-2 rounded-lg bg-orange-glow border border-orange-DEFAULT/20">
            <Briefcase size={14} className="text-orange-DEFAULT" />
          </div>
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-0.5">
              <h4 className="font-mono font-bold text-base text-text-primary">{role.title}</h4>
              {role.yoe && (
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-orange-DEFAULT/10 text-orange-DEFAULT border border-orange-DEFAULT/20">
                  {role.yoe}
                </span>
              )}
            </div>
            <p className="text-sm font-semibold text-text-secondary">{role.company}</p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1.5">
              <span className="flex items-center gap-1.5 text-xs text-text-muted">
                <Calendar size={10} className="text-orange-DEFAULT/60" />
                {role.period}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-text-muted">
                <MapPin size={10} className="text-orange-DEFAULT/60" />
                {role.location}
              </span>
            </div>
          </div>
        </div>
        <div className="shrink-0 mt-1 text-text-muted">
          {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>
      </button>

      {/* Expandable impact */}
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-0 border-t border-border">
              <ul className="flex flex-col gap-2 mt-4 mb-4">
                {role.impact.map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-text-secondary">
                    <span className="mt-2 shrink-0 w-1 h-1 rounded-full bg-orange-DEFAULT/70" />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 pt-3 border-t border-border">
                {role.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded text-[11px] font-mono text-text-muted bg-surface border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function PhaseBlock({ phase, index }) {
  const { ref, isVisible } = useScrollReveal(0.08)
  const Icon = phase.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: 'easeOut' }}
      className="relative"
    >
      {/* Phase header */}
      <div className={`relative rounded-xl border ${phase.borderColor} bg-gradient-to-br ${phase.color} p-5 mb-4 overflow-hidden`}>
        <div className="absolute inset-0 grid-overlay opacity-30 pointer-events-none" />
        <div className="relative z-10 flex items-center gap-3">
          <div className={`p-2.5 rounded-lg border ${phase.borderColor} bg-black/30`}>
            <Icon size={18} className="text-text-primary" />
          </div>
          <div>
            <span className="font-mono text-[11px] text-text-muted tracking-widest uppercase block">
              {phase.phase}
            </span>
            <h3 className="font-mono font-bold text-lg text-text-primary">{phase.label}</h3>
          </div>
          {/* Connector dot */}
          <div className={`ml-auto shrink-0 w-3 h-3 rounded-full ${phase.dotColor} shadow-[0_0_8px_currentColor]`} />
        </div>
      </div>

      {/* Roles */}
      <div className="ml-4 pl-5 border-l-2 border-border flex flex-col gap-3">
        {phase.roles.map((role, i) => (
          <div key={role.id} className="relative">
            {/* Connector tick */}
            <div className="absolute -left-[21px] top-5 w-3 h-px bg-border" />
            <div className={`absolute -left-[25px] top-[17px] w-2 h-2 rounded-full ${phase.dotColor} opacity-60`} />
            <RoleCard role={role} isFirst={i === 0 && index === 0} />
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const { ref: headRef, isVisible: headVisible } = useScrollReveal()

  return (
    <section id="experience" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 grid-overlay opacity-20" />

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="font-mono text-xs text-orange-DEFAULT tracking-widest uppercase">
            Career Trajectory
          </span>
          <h2 className="font-mono font-bold text-3xl sm:text-4xl lg:text-5xl text-gradient-white mt-4 mb-6">
            Professional Experience
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            From 11 years building operational resilience in Moroccan heavy industry
            to architecting intelligent cyber-physical systems in Canada — a deliberate,
            compounding evolution.
          </p>
        </motion.div>

        {/* Timeline phases */}
        <div className="flex flex-col gap-12">
          {phases.map((phase, i) => (
            <PhaseBlock key={phase.id} phase={phase} index={i} />
          ))}
        </div>

        {/* Bottom legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={headVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-6 mt-16 pt-8 border-t border-border"
        >
          {phases.map((phase) => (
            <div key={phase.id} className="flex items-center gap-2 text-xs text-text-muted">
              <div className={`w-2 h-2 rounded-full ${phase.dotColor}`} />
              {phase.label}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
