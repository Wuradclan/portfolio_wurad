import { motion } from 'framer-motion'
import { GraduationCap, Award, BookOpen, Cpu, Globe, Shield, Wrench, Layers } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useLanguage } from '../contexts/LanguageContext'

const timeline = [
  {
    id: 'msc',
    year: 'Autumn 2026',
    type: 'Graduate — M.Sc.',
    icon: GraduationCap,
    degree: 'M.Sc. Software Engineering (Course-based with Internship)',
    institution: 'Université de Sherbrooke',
    location: 'Sherbrooke, QC',
    status: 'Starting Autumn 2026',
    statusStyle: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    highlight: 'Professional M.Sc. emphasizing software architecture, systems design, and applied engineering — completed with an integrated industry internship.',
    courses: [],
    note: null,
  },
  {
    id: 'ai-aec',
    year: 'Dec 2025 → 2027',
    type: 'AEC',
    icon: Cpu,
    degree: 'AEC — Artificial Intelligence',
    institution: 'Collège de Bois-de-Boulogne',
    location: 'Montréal, QC',
    status: 'In Progress',
    statusStyle: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    highlight: 'Applied ML, Computer Vision, NLP',
    courses: ['Machine Learning', 'Computer Vision', 'Natural Language Processing'],
    note: null,
  },
  {
    id: 'mcgill',
    year: 'Completed Jun 2024',
    type: 'Undergraduate Certificate',
    icon: Shield,
    degree: 'Undergraduate Certificate in Applied Cybersecurity',
    institution: 'McGill University',
    location: 'Montréal, QC',
    status: 'GPA 4.0 (Core Modules)',
    statusStyle: 'bg-orange-DEFAULT/10 text-orange-DEFAULT border-orange-DEFAULT/30',
    highlight: 'Undergraduate-level specialization focused on defending converged IT/OT environments, featuring 4.0 performance in core architectural and risk management modules.',
    courses: ['Security Architecture & Design (A)', 'Security Risk Management (A)', 'Cryptography & Network Security'],
    note: null,
  },
  {
    id: 'dess',
    year: 'Sept 2018 – Dec 2019',
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
    id: 'vr-ar-aec',
    year: '2019 – 2021',
    type: 'AEC',
    icon: Layers,
    degree: 'AEC — VR & AR Specialist',
    institution: 'Champlain College Saint-Lambert',
    location: 'Saint-Lambert, QC',
    status: 'Completed',
    statusStyle: 'bg-zinc-500/10 text-zinc-400 border-zinc-500/30',
    highlight: 'Formal foundation in real-time 3D development, spatial UI design, and immersive application architecture',
    courses: ['Unity / C#', 'Immersive UX Design', '3D Spatial Computing', 'XR Application Architecture'],
    note: 'Applied directly to BCI-VR neuro-diagnostic systems and industrial spatial awareness interfaces.',
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

const statusI18n = {
  'In Progress':          { en: 'In Progress',          fr: 'En cours' },
  'Starting Autumn 2026': { en: 'Starting Autumn 2026', fr: 'Démarrage Automne 2026' },
  'Completed':            { en: 'Completed',             fr: 'Terminé' },
  'DEC Equivalent (QC)':  { en: 'DEC Equivalent (QC)',   fr: 'Équivalent DEC (QC)' },
  'Undergraduate Certificate': { en: 'Undergraduate Certificate', fr: 'Certificat de premier cycle' },
  'GPA 4.0 (Core Modules)': { en: 'GPA 4.0 (Core Modules)', fr: 'GPA 4,0 (Modules Clés)' },
  'GPA 3.84 / 4.00':      { en: 'GPA 3.84 / 4.00',      fr: 'GPA 3,84 / 4,00' },
  'Graduated with Distinction': { en: 'Graduated with Distinction', fr: 'Diplômé avec Mention' },
}

function TimelineItem({ item, index, total }) {
  const { ref, isVisible } = useScrollReveal()
  const { lang, tr } = useLanguage()
  const Icon = item.icon
  const statusText = statusI18n[item.status]?.[lang] ?? item.status
  // Per-item translation lookups — all visible fields
  const tAcad    = tr.academicItems?.[item.id] || {}
  const typeText  = tAcad.type      || item.type
  const degreeText = tAcad.degree   || item.degree
  const yearLabel  = tAcad.yearLabel || item.year
  const location   = tAcad.location  || item.location
  const highlight  = tAcad.highlight || item.highlight
  const courses    = (tAcad.courses?.length ? tAcad.courses : null) ?? item.courses
  const note       = tAcad.note      ?? item.note

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
                  {typeText}
                </span>
                <span className="text-text-muted/30">·</span>
                <span className="font-mono text-[10px] text-text-muted">{yearLabel}</span>
              </div>
              <h3 className="font-mono font-bold text-base text-text-primary">{degreeText}</h3>
              <p className="text-sm text-text-secondary mt-0.5">
                {item.institution}
                <span className="text-text-muted"> · {location}</span>
              </p>
            </div>
            <span
              className={`self-start shrink-0 px-2.5 py-1 rounded-full text-[10px] font-mono border whitespace-nowrap ${item.statusStyle}`}
            >
              {statusText}
            </span>
          </div>

          {/* Highlight */}
          <p className="text-xs text-orange-DEFAULT/70 font-medium mb-2">{highlight}</p>

          {/* Courses */}
          {courses.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-2">
              {courses.map((c) => (
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
          {note && (
            <p className="text-xs text-text-muted border-l-2 border-orange-DEFAULT/40 pl-3 mt-2 leading-relaxed">
              {note}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function Academic() {
  const { ref: headRef, isVisible: headVisible } = useScrollReveal()
  const { tr } = useLanguage()

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
            {tr.academic.eyebrow}
          </span>
          <h2 className="font-mono font-bold text-3xl sm:text-4xl lg:text-5xl text-gradient-white mt-4 mb-6">
            {tr.academic.heading}
          </h2>
          <p className="text-text-secondary">
            {tr.academic.subheading}
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
