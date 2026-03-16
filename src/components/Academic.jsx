import { motion } from 'framer-motion'
import { GraduationCap, Award, BookOpen, Cpu, Globe, Shield, Wrench } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const timeline = [
  {
    id: 'msc',
    year: 'Autumn 2026',
    type: 'Graduate — M.Sc.',
    icon: GraduationCap,
    degree: 'M.Sc. Software Engineering',
    institution: 'Université de Sherbrooke',
    location: 'Sherbrooke, QC',
    status: 'Starting Autumn 2026',
    statusStyle: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    highlight: 'Research focus: AI systems for industrial safety & reliability',
    courses: [],
    note: null,
  },
  {
    id: 'dess',
    year: '2022 → 2024',
    type: 'Graduate Certificate — D.E.S.S.',
    icon: BookOpen,
    degree: 'D.E.S.S. — Information Technology',
    institution: 'Université de Sherbrooke',
    location: 'Sherbrooke, QC',
    status: 'GPA 3.84 / 4.00',
    statusStyle: 'bg-orange-DEFAULT/10 text-orange-DEFAULT border-orange-DEFAULT/30',
    highlight: 'Graduated with Distinction',
    courses: ['Software Architecture', 'Systems Analysis', 'Data Engineering'],
    note: null,
  },
  {
    id: 'mcgill',
    year: 'Completed Jun 2024',
    type: 'Professional Certificate',
    icon: Shield,
    degree: 'Certificate in Applied Cybersecurity',
    institution: 'McGill University',
    location: 'Montréal, QC',
    status: 'A in All Courses',
    statusStyle: 'bg-orange-DEFAULT/10 text-orange-DEFAULT border-orange-DEFAULT/30',
    highlight: 'McGill School of Continuing Studies',
    courses: ['Risk Management', 'Threat Detection', 'Governance'],
    note: '4.0 performance across all cybersecurity modules.',
  },
  {
    id: 'iot-aec',
    year: 'Completed Apr 2023',
    type: 'AEC',
    icon: Globe,
    degree: 'AEC — Industrial Internet of Things',
    institution: 'Champlain College Saint-Lambert',
    location: 'Saint-Lambert, QC',
    status: 'Completed',
    statusStyle: 'bg-zinc-500/10 text-zinc-400 border-zinc-500/30',
    highlight: 'Industrial IoT, Embedded Systems & Edge Computing',
    courses: ['Embedded C', 'MQTT / CoAP Protocols', 'Edge Computing'],
    note: null,
  },
  {
    id: 'ai-aec',
    year: '2022',
    type: 'AEC',
    icon: Cpu,
    degree: 'AEC — Artificial Intelligence',
    institution: 'Collège de Bois-de-Boulogne',
    location: 'Montréal, QC',
    status: 'Completed',
    statusStyle: 'bg-zinc-500/10 text-zinc-400 border-zinc-500/30',
    highlight: 'Applied ML, Computer Vision, NLP',
    courses: ['Machine Learning', 'Computer Vision', 'Natural Language Processing'],
    note: null,
  },
  {
    id: 'bac-morocco',
    year: 'Morocco',
    type: 'Baccalauréat',
    icon: Award,
    degree: 'B.Sc. — Multimedia & Web Technologies',
    institution: 'Université Hassan Ier',
    location: 'Settat, Morocco',
    status: 'Completed',
    statusStyle: 'bg-zinc-500/10 text-zinc-400 border-zinc-500/30',
    highlight: 'Web development, multimedia systems, digital media design',
    courses: [],
    note: null,
  },
  {
    id: 'mec-diploma',
    year: 'Morocco',
    type: 'Specialized Technician Diploma',
    icon: Wrench,
    degree: 'Mechanical Engineering Technology',
    institution: 'OFPPT — Morocco',
    location: 'Morocco',
    status: 'DEC Equivalent (QC)',
    statusStyle: 'bg-zinc-500/10 text-zinc-400 border-zinc-500/30',
    highlight: 'Applied mechanics, industrial equipment, technical design',
    courses: ['SolidWorks', 'AutoCAD', 'Industrial Maintenance'],
    note: 'Officially recognized in Québec as equivalent to a D.E.C. in Mechanical Engineering.',
  },
]

function TimelineItem({ item, index, total }) {
  const { ref, isVisible } = useScrollReveal()
  const Icon = item.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isVisible ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07, ease: 'easeOut' }}
      className="group relative flex gap-6"
    >
      {/* Timeline spine */}
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-orange-DEFAULT/40 bg-card group-hover:border-orange-DEFAULT group-hover:shadow-orange-sm transition-all duration-300 shrink-0 z-10">
          <Icon size={15} className="text-orange-DEFAULT" />
        </div>
        {index < total - 1 && (
          <div className="w-px flex-1 bg-gradient-to-b from-orange-DEFAULT/25 to-transparent mt-2" />
        )}
      </div>

      {/* Card */}
      <div className="flex-1 pb-8 last:pb-0">
        <div className="rounded-xl border border-border bg-card hover:border-orange-DEFAULT/30 hover:bg-card-hover transition-all duration-300 p-5 overflow-hidden relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-DEFAULT to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500" />

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
            <div>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 mb-1">
                <span className="font-mono text-[10px] text-text-muted tracking-widest uppercase">
                  {item.type}
                </span>
                <span className="text-text-muted/30">·</span>
                <span className="font-mono text-[10px] text-text-muted">{item.year}</span>
              </div>
              <h3 className="font-mono font-bold text-base text-text-primary">{item.degree}</h3>
              <p className="text-sm text-text-secondary mt-0.5">
                {item.institution}
                <span className="text-text-muted"> · {item.location}</span>
              </p>
            </div>
            <span
              className={`self-start shrink-0 px-2.5 py-1 rounded-full text-[10px] font-mono border whitespace-nowrap ${item.statusStyle}`}
            >
              {item.status}
            </span>
          </div>

          {/* Highlight */}
          <p className="text-xs text-orange-DEFAULT/70 font-medium mb-2">{item.highlight}</p>

          {/* Courses */}
          {item.courses.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-2">
              {item.courses.map((c) => (
                <span
                  key={c}
                  className="px-2 py-0.5 rounded text-[10px] font-mono text-text-muted bg-surface border border-border"
                >
                  {c}
                </span>
              ))}
            </div>
          )}

          {/* Note */}
          {item.note && (
            <p className="text-xs text-text-muted border-l-2 border-orange-DEFAULT/40 pl-3 mt-2 leading-relaxed">
              {item.note}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function Academic() {
  const { ref: headRef, isVisible: headVisible } = useScrollReveal()

  return (
    <section id="academic" className="relative py-24 lg:py-32">
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
            Credentials
          </span>
          <h2 className="font-mono font-bold text-3xl sm:text-4xl lg:text-5xl text-gradient-white mt-4 mb-6">
            Academic Excellence
          </h2>
          <p className="text-text-secondary">
            A deliberate, cross-disciplinary academic path — from applied mechanics in
            Morocco through AI, IoT, and cybersecurity to graduate-level software
            engineering in Canada.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="flex flex-col">
          {timeline.map((item, i) => (
            <TimelineItem key={item.id} item={item} index={i} total={timeline.length} />
          ))}
        </div>
      </div>
    </section>
  )
}
