import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { HardHat, Code2, Brain, MapPin, Terminal } from 'lucide-react'

// ─── Data ────────────────────────────────────────────────────────────────────

const phases = [
  {
    id: 'phase3',
    phase: 'Phase 3',
    label: 'The Cyber-Physical & Neurotech Edge',
    Icon: Brain,
    accentClass: 'text-orange-DEFAULT',
    accentBg: 'bg-orange-DEFAULT',
    accentBorder: 'border-orange-DEFAULT',
    accentGlow: '0 0 14px rgba(249,115,22,0.8), 0 0 30px rgba(249,115,22,0.35)',
    phaseTagClass: 'bg-orange-DEFAULT/10 text-orange-DEFAULT border-orange-DEFAULT/30',
    roles: [
      {
        id: 'cognixr',
        title: 'VR/AR & Bio-Signal Developer',
        company: 'Cogni XR Health',
        periodRaw: 'JUL 2022 → JUL 2024',
        location: 'Montreal, QC',
        yoe: '+3 yrs',
        impact: [
          'Architected immersive VR/AR applications using Unity and C# for clinical therapeutic deployment.',
          'Engineered real-time visualization of raw EEG brain signals to trigger in-scene therapeutic responses.',
          'Integrated VR applications with backend APIs for autonomous headset deployment workflows.',
        ],
        tags: ['Unity', 'C#', 'EEG / BCI', 'VR / AR', 'REST APIs', 'Clinical Tech'],
      },
    ],
  },
  {
    id: 'phase2',
    phase: 'Phase 2',
    label: 'The Enterprise Software Bridge',
    Icon: Code2,
    accentClass: 'text-sky-400',
    accentBg: 'bg-sky-400',
    accentBorder: 'border-sky-400',
    accentGlow: '0 0 14px rgba(56,189,248,0.8), 0 0 30px rgba(56,189,248,0.3)',
    phaseTagClass: 'bg-sky-400/10 text-sky-400 border-sky-400/30',
    roles: [
      {
        id: 'ibm',
        title: 'Fullstack Software Engineer',
        company: 'IBM Canada',
        periodRaw: 'APR 2021 → APR 2022',
        location: 'Bromont, QC',
        yoe: '+2 yrs',
        impact: [
          'Developed Java Spring Boot applications and RESTful APIs powering Industry 4.0 smart manufacturing.',
          'Maintained enterprise-scale architecture through strict Agile/Scrum sprint cadences.',
        ],
        tags: ['Java', 'Spring Boot', 'REST APIs', 'Industry 4.0', 'Agile', 'Microservices'],
      },
      {
        id: 'auger',
        title: 'Industrial Software Developer (C#)',
        company: 'Auger Groupe Conseil',
        periodRaw: 'JAN 2021 → AUG 2021',
        location: 'Trois-Rivières, QC',
        yoe: null,
        impact: [
          'Built a mobile industrial maintenance management app using C#, WPF, and .NET Core.',
          'Designed OOP libraries and integrated SSRS reporting for client operational analytics.',
        ],
        tags: ['C#', 'WPF', '.NET Core', 'SSRS', 'Mobile', 'OOP'],
      },
      {
        id: 'simfusion',
        title: 'Unity C# Developer',
        company: 'Simfusion & CognicorpLusTherapy.com',
        periodRaw: 'MAR 2020 → JUL 2020',
        location: 'Montreal, QC',
        yoe: '+1 yr',
        impact: [
          'Designed interactive 3D VR applications for clinical environments with immersive therapeutic UX.',
          'Optimised performance across macOS and iOS deployment targets.',
        ],
        tags: ['Unity', 'C#', '3D / VR', 'iOS', 'macOS', 'Clinical UX'],
      },
    ],
  },
  {
    id: 'phase1',
    phase: 'Phase 1',
    label: 'The Industrial Foundation',
    Icon: HardHat,
    accentClass: 'text-amber-400',
    accentBg: 'bg-amber-400',
    accentBorder: 'border-amber-400',
    accentGlow: '0 0 14px rgba(251,191,36,0.8), 0 0 30px rgba(251,191,36,0.3)',
    phaseTagClass: 'bg-amber-400/10 text-amber-400 border-amber-400/30',
    roles: [
      {
        id: 'ocp',
        title: 'HSE Coordinator & Maintenance Planner',
        company: 'Groupe OCP',
        periodRaw: 'JUL 2006 → MAR 2017',
        location: 'Morocco',
        yoe: '11 yrs',
        impact: [
          'Implemented digital maintenance workflows to optimize MTTR / MTBF across heavy industrial equipment.',
          'Supervised mechanical projects using SolidWorks and AutoCAD in large-scale mining operations.',
          'Enforced HSE protocols under DuPont methodology — zero-tolerance safety culture across all sites.',
        ],
        tags: ['HSE / DuPont', 'MTTR / MTBF', 'SolidWorks', 'AutoCAD', 'Maintenance Mgmt', 'Mining Ops'],
      },
    ],
  },
]

// ─── Sub-components ──────────────────────────────────────────────────────────

function PhaseLabel({ phase, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      className={`inline-flex items-center gap-2.5 mb-6 px-3 py-1.5 rounded-lg border ${phase.phaseTagClass} backdrop-blur-sm`}
    >
      <phase.Icon size={13} />
      <span className="font-mono text-[11px] tracking-widest uppercase">{phase.phase}</span>
      <span className="text-[11px] opacity-70">— {phase.label}</span>
    </motion.div>
  )
}

function TimelineNode({ accentBg, accentGlow, index }) {
  return (
    <motion.div
      initial={{
        backgroundColor: '#262626',
        boxShadow: 'none',
        scale: 0.7,
      }}
      whileInView={{
        backgroundColor: '#f97316',
        boxShadow: accentGlow,
        scale: 1,
      }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.05, ease: 'easeOut' }}
      className="absolute left-0 top-6 -translate-x-1/2 z-20 w-3.5 h-3.5 rounded-full border-2 border-background"
      style={{ left: 'var(--line-x)' }}
    />
  )
}

function RoleCard({ role, phase, cardIndex, globalIndex }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.55,
        delay: cardIndex * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="relative mb-6 last:mb-0"
    >
      {/* Node on the line */}
      <TimelineNode
        accentBg={phase.accentBg}
        accentGlow={phase.accentGlow}
        index={globalIndex}
      />

      {/* Card */}
      <div className="glassmorphism rounded-xl overflow-hidden group hover:border-orange-DEFAULT/30 transition-all duration-300 hover:shadow-card-hover">
        {/* Shimmer top line */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-DEFAULT/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        <div className="p-5 sm:p-6">
          {/* Header row */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
            <div className="flex-1 min-w-0">
              {/* System-log date */}
              <div className="flex items-center gap-2 mb-2">
                <Terminal size={10} className="text-orange-DEFAULT/60 shrink-0" />
                <span className="font-mono text-[11px] text-orange-DEFAULT/70 tracking-widest">
                  {role.periodRaw}
                </span>
                <span className="font-mono text-[10px] text-text-muted/50">·</span>
                <MapPin size={9} className="text-text-muted/50 shrink-0" />
                <span className="font-mono text-[10px] text-text-muted">{role.location}</span>
              </div>

              <h4 className="font-mono font-bold text-base sm:text-lg text-text-primary leading-snug">
                {role.title}
              </h4>
              <p className={`font-semibold text-sm mt-0.5 ${phase.accentClass}`}>
                {role.company}
              </p>
            </div>

            {role.yoe && (
              <span className="self-start shrink-0 px-2.5 py-1 rounded-full text-[10px] font-mono bg-orange-DEFAULT/10 text-orange-DEFAULT border border-orange-DEFAULT/25">
                {role.yoe}
              </span>
            )}
          </div>

          {/* Impact bullets */}
          <ul className="flex flex-col gap-2 mb-4">
            {role.impact.map((point, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="mt-[7px] shrink-0 w-1 h-1 rounded-full bg-orange-DEFAULT/60" />
                <span className="text-sm text-text-secondary leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>

          {/* Tag strip */}
          <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border">
            {role.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded text-[10px] font-mono text-text-muted bg-surface border border-border hover:border-orange-DEFAULT/30 hover:text-text-secondary transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function ExperienceTimeline() {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 15%', 'end 85%'],
  })

  // Spring-smoothed progress for the line draw
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  })

  const scaleY = useTransform(smoothProgress, [0, 1], [0, 1])

  // Flat list of all roles for global index (stagger offset)
  const allRoles = phases.flatMap((p) => p.roles)

  return (
    <section id="experience" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <span className="font-mono text-xs text-orange-DEFAULT tracking-widest uppercase">
            Career Trajectory
          </span>
          <h2 className="font-mono font-bold text-3xl sm:text-4xl lg:text-5xl text-gradient-white mt-4 mb-6">
            Professional Experience
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            From 11 years forging operational resilience in Moroccan heavy industry to
            architecting intelligent cyber-physical systems in Canada — a deliberate,
            compounding evolution.
          </p>
        </motion.div>

        {/* ── Timeline body ── */}
        {/*
          CSS custom property --line-x drives node horizontal position.
          On mobile: 16px from left edge. On sm+: 20px.
        */}
        <div
          ref={containerRef}
          className="relative [--line-x:20px] sm:[--line-x:24px]"
          style={{ paddingLeft: 'calc(var(--line-x) + 20px)' }}
        >
          {/* Track line — static grey background */}
          <div
            className="absolute top-0 bottom-0 w-px bg-border"
            style={{ left: 'var(--line-x)' }}
          />

          {/* Animated fill line — draws down as user scrolls */}
          <motion.div
            className="absolute top-0 bottom-0 w-px origin-top"
            style={{
              left: 'var(--line-x)',
              scaleY,
              background:
                'linear-gradient(to bottom, #f97316 0%, #fb923c 60%, rgba(249,115,22,0.2) 100%)',
              boxShadow: '0 0 8px rgba(249,115,22,0.5), 0 0 20px rgba(249,115,22,0.2)',
            }}
          />

          {/* ── Phases ── */}
          {phases.map((phase) => (
            <div key={phase.id} className="mb-14 last:mb-0">
              {/* Phase label */}
              <PhaseLabel phase={phase} delay={0} />

              {/* Roles */}
              {phase.roles.map((role, cardIndex) => {
                const globalIndex = allRoles.findIndex((r) => r.id === role.id)
                return (
                  <RoleCard
                    key={role.id}
                    role={role}
                    phase={phase}
                    cardIndex={cardIndex}
                    globalIndex={globalIndex}
                  />
                )
              })}
            </div>
          ))}
        </div>

        {/* ── Bottom legend ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-6 mt-16 pt-8 border-t border-border"
        >
          {phases.map((phase) => (
            <div key={phase.id} className="flex items-center gap-2 text-xs text-text-muted">
              <div className={`w-2 h-2 rounded-full ${phase.accentBg}`} />
              <span className={`font-mono ${phase.accentClass}`}>{phase.phase}</span>
              <span>— {phase.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
