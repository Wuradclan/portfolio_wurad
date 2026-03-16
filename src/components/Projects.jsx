import { motion } from 'framer-motion'
import { ExternalLink, Lock, Brain, Wrench, Activity, Code2, GitBranch } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const projects = [
  {
    id: 'kinetic',
    icon: Brain,
    status: 'active',
    statusLabel: 'Active · GitLab',
    tag: 'AI · XR · Neurotech',
    title: 'Kinetic Dexterity',
    subtitle: 'AI-Driven VR Diagnostic Platform',
    description:
      'A full-stack VR diagnostic engine leveraging real-time motion capture and machine learning to detect and rehabilitate dyspraxia. Designed for clinical deployment with BCI integration roadmap.',
    techStack: ['Python', 'Unity XR', 'TensorFlow', 'FastAPI', 'WebSocket', 'BCI SDK'],
    link: 'https://gitlab.com',
    linkLabel: 'View on GitLab',
    linkIcon: ExternalLink,
    stealth: false,
    highlights: [
      'Real-time kinematic analysis pipeline',
      'ML-powered dyspraxia severity scoring',
      'VR immersive rehabilitation environment',
      'BCI integration architecture (roadmap)',
    ],
  },
  {
    id: 'industrial-rd',
    icon: Lock,
    status: 'stealth',
    statusLabel: 'Stealth · NDA',
    tag: 'Industrial · AI · Safety',
    title: 'Industrial Safety R&D',
    subtitle: 'Proprietary AI Situational Awareness',
    description:
      'A classified AI platform for real-time situational awareness in high-noise industrial environments (mining, refinery). Fuses sensor telemetry, edge inference, and human-factors data for proactive hazard detection.',
    techStack: ['Python', 'Edge AI', 'Sensor Fusion', 'Time-Series ML', 'IEC 61511'],
    link: null,
    linkLabel: 'Details Under NDA',
    linkIcon: Lock,
    stealth: true,
    highlights: [
      'Multi-modal sensor fusion at the edge',
      'Sub-100ms hazard alert latency',
      'IEC 61511 functional safety alignment',
      'Human-machine trust calibration model',
    ],
  },
  {
    id: 'cognixr',
    icon: Activity,
    status: 'past',
    statusLabel: 'Former Acting CTO',
    tag: 'Health-Tech · Leadership',
    title: 'CogniXr Health',
    subtitle: 'Acting CTO · Investor-Mandated Roadmap',
    description:
      'Led technical strategy and architecture as Acting CTO for a health-tech startup. Managed investor-mandated technical roadmaps, architected the XR diagnostic platform, and built cross-functional engineering teams.',
    techStack: ['React', 'Node.js', 'Unity', 'Azure', 'Technical Leadership', 'Roadmapping'],
    link: null,
    linkLabel: 'Private Company',
    linkIcon: Lock,
    stealth: false,
    highlights: [
      'Managed full technical roadmap under investor scrutiny',
      'Architected XR health diagnostic MVP',
      'Built and led cross-functional engineering team',
      'Bridged clinical requirements with engineering delivery',
    ],
  },
  {
    id: 'toolmanager',
    icon: Wrench,
    status: 'active',
    statusLabel: 'Open Source · Monorepo',
    tag: 'Full-Stack · Industrial · DevOps',
    title: 'ToolManager',
    subtitle: 'Industrial Asset Tracking Monorepo',
    description:
      'A full-stack monorepo system for tracking, maintenance scheduling, and lifecycle management of industrial tools and equipment. Built with a microservices architecture for deployment in mining and heavy-industry environments.',
    techStack: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Docker', 'Turborepo'],
    link: 'https://github.com',
    linkLabel: 'View Repository',
    linkIcon: GitBranch,
    stealth: false,
    highlights: [
      'Full CRUD asset lifecycle management',
      'Predictive maintenance scheduling engine',
      'Role-based access for field vs. office users',
      'Monorepo architecture with shared types',
    ],
  },
]

const statusStyles = {
  active: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
  stealth: 'bg-orange-DEFAULT/10 text-orange-DEFAULT border-orange-DEFAULT/30',
  past: 'bg-zinc-500/10 text-zinc-400 border-zinc-500/30',
}

function ProjectCard({ project, index }) {
  const { ref, isVisible } = useScrollReveal()
  const Icon = project.icon

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: 'easeOut' }}
      className="group relative flex flex-col rounded-xl border border-border bg-card hover:border-orange-DEFAULT/40 hover:bg-card-hover transition-all duration-300 overflow-hidden hover:shadow-card-hover"
    >
      {/* Stealth overlay shimmer */}
      {project.stealth && (
        <div className="absolute inset-0 bg-gradient-to-br from-orange-DEFAULT/3 via-transparent to-transparent pointer-events-none" />
      )}

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-DEFAULT to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10 p-8 flex flex-col gap-5 h-full">
        {/* Top row */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-orange-glow border border-orange-DEFAULT/20 shrink-0">
              <Icon size={20} className="text-orange-DEFAULT" />
            </div>
            <div>
              <h3 className="font-mono font-bold text-lg text-text-primary">
                {project.title}
              </h3>
              <p className="text-xs text-text-muted mt-0.5">{project.subtitle}</p>
            </div>
          </div>
          <span
            className={`shrink-0 px-2.5 py-1 rounded-full text-[10px] font-mono border ${
              statusStyles[project.status]
            }`}
          >
            {project.statusLabel}
          </span>
        </div>

        {/* Tag */}
        <div className="flex items-center gap-1.5">
          <Code2 size={11} className="text-orange-DEFAULT" />
          <span className="font-mono text-[11px] text-orange-DEFAULT tracking-wider uppercase">
            {project.tag}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-text-secondary leading-relaxed">{project.description}</p>

        {/* Highlights */}
        <ul className="grid grid-cols-1 gap-1.5">
          {project.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-xs text-text-secondary">
              <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full bg-orange-DEFAULT/60" />
              {h}
            </li>
          ))}
        </ul>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded text-[11px] font-mono text-text-muted bg-surface border border-border"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Link */}
        <div className="pt-2">
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-orange-DEFAULT hover:text-orange-dim transition-colors group/link"
            >
              <project.linkIcon size={14} />
              {project.linkLabel}
              <ExternalLink
                size={11}
                className="opacity-0 group-hover/link:opacity-100 transition-opacity"
              />
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-text-muted cursor-default">
              <project.linkIcon size={14} />
              {project.linkLabel}
            </span>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const { ref: headRef, isVisible: headVisible } = useScrollReveal()

  return (
    <section id="projects" className="relative py-24 lg:py-32">
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
            Portfolio
          </span>
          <h2 className="font-mono font-bold text-3xl sm:text-4xl lg:text-5xl text-gradient-white mt-4 mb-6">
            Stealth & Featured Projects
          </h2>
          <p className="max-w-2xl mx-auto text-text-secondary">
            From proprietary industrial AI under NDA to open-source monorepos — a
            portfolio built at the intersection of field operations and software
            engineering.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
