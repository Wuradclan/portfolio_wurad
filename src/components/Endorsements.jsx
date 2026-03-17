import { motion } from 'framer-motion'
import { Quote, Linkedin } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useLanguage } from '../contexts/LanguageContext'

// ─── Data ─────────────────────────────────────────────────────────────────────

const endorsements = [
  {
    id: 'ouazzani',
    category: 'Executive Leadership & Risk',
    quote:
      'Mr. [Wurad A.] was a member of a PHA team I\'ve coached, he was excited about the challenge, that\'s what made his participation & contribution outstanding. His leading team spirit, and his decision making ability can let him drive SHE projects successfully.',
    author: 'Pierre-Edouard OUAZZANI',
    title: 'Founder & CEO',
    org: 'Architect of the DTIFM™ Ecosystem',
    credentials: 'MIT · Oxford · Yale',
    context: 'Process Hazard Analysis (PHA) Coaching',
  },
  {
    id: 'draifi',
    category: 'Operational Excellence',
    quote:
      "J'ai eu la chance de travailler avec [Wurad] à plusieurs reprises sur des missions de coaching en Sécurité de travail. [Wurad] a un contact facile avec les gens et sait être direct quand il le faut. Ses qualités lui permettent d'animer facilement auprès des équipes sur plusieurs sujets Sécurité est ainsi être efficace dans la transmission des règles à respecter.",
    author: 'Amine DRAIFI',
    title: 'Operational Excellence Consultant',
    org: null,
    credentials: null,
    context: 'Workplace Safety Coaching Missions',
  },
  {
    id: 'dabounou',
    category: 'Academic Distinction',
    quote:
      'Il se distingue par un dynamisme exceptionnel, une excellente capacité de communication… et une assiduité qui m\'a souvent étonné. Il suivait les cours le weekend à la ville de Settat, alors qu\'il habitait la ville d\'Agadir. Les bons résultats qu\'il a obtenus témoignent du potentiel dont il dispose à faire évoluer ses compétences encore plus haut.',
    author: 'Pr. Jaouad DABOUNOU',
    title: 'Professor & Programme Coordinator',
    org: 'FST de Settat — Université Hassan 1er',
    credentials: null,
    context: 'Academic Performance Assessment',
  },
]

// ─── Sub-components ────────────────────────────────────────────────────────────

function EndorsementCard({ item, index }) {
  const { ref, isVisible } = useScrollReveal(0.1)
  const { tr } = useLanguage()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.13, ease: 'easeOut' }}
      className="group relative bg-[#171717]/70 backdrop-blur-md border border-white/5 hover:border-orange-DEFAULT/25 rounded-xl p-6 flex flex-col gap-5 transition-all duration-300 hover:shadow-card-hover overflow-hidden"
    >
      {/* Hover shimmer */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-DEFAULT/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Corner grid decoration */}
      <div className="absolute bottom-0 right-0 w-24 h-24 grid-overlay opacity-20 rounded-tl-3xl" />

      {/* Large background quote mark — purely decorative */}
      <Quote
        size={80}
        className="absolute top-3 right-4 text-orange-500/10 pointer-events-none select-none"
        aria-hidden="true"
      />

      {/* Category chip */}
      <div className="relative z-10">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase border border-orange-DEFAULT/20 bg-orange-DEFAULT/8 text-orange-DEFAULT/70">
          <span className="w-1 h-1 rounded-full bg-orange-DEFAULT/60" />
          {tr.endorsements.categories[item.id] || item.category}
        </span>
      </div>

      {/* Quote text */}
      <blockquote className="relative z-10 flex-1">
        {/* Small inline opening quote icon */}
        <Quote
          size={14}
          className="inline-block text-orange-500/40 mr-1 mb-0.5 shrink-0"
          aria-hidden="true"
        />
        <p className="inline text-sm text-text-secondary leading-relaxed italic">
          {item.quote}
        </p>
      </blockquote>

      {/* Context badge */}
      <div className="relative z-10">
        <span className="font-mono text-[10px] text-text-muted border-l-2 border-orange-DEFAULT/30 pl-2">
          {item.context}
        </span>
      </div>

      {/* Divider */}
      <div className="relative z-10 h-px bg-gradient-to-r from-orange-DEFAULT/20 via-border to-transparent" />

      {/* Author block */}
      <div className="relative z-10 flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          {/* Avatar initials */}
          <div className="flex items-center gap-3 mb-1.5">
            <div className="w-8 h-8 rounded-full bg-orange-DEFAULT/10 border border-orange-DEFAULT/20 flex items-center justify-center shrink-0">
              <span className="font-mono text-[11px] font-bold text-orange-DEFAULT">
                {item.author
                  .split(' ')
                  .filter((_, i, arr) => i === 0 || i === arr.length - 1)
                  .map((n) => n[0])
                  .join('')}
              </span>
            </div>
            <div className="min-w-0">
              <p className="font-mono font-bold text-sm text-text-primary truncate">
                {item.author}
              </p>
              <p className="text-xs text-text-secondary truncate">{item.title}</p>
            </div>
          </div>

          {item.org && (
            <p className="text-[11px] text-text-muted ml-11">{item.org}</p>
          )}
          {item.credentials && (
            <p className="font-mono text-[10px] text-orange-DEFAULT/60 ml-11 mt-0.5">
              {item.credentials}
            </p>
          )}
        </div>

        {/* LinkedIn icon — decorative signal of professional source */}
        <Linkedin
          size={16}
          className="shrink-0 mt-1 text-text-muted/30 group-hover:text-[#0077b5]/60 transition-colors duration-300"
          aria-hidden="true"
        />
      </div>
    </motion.div>
  )
}

// ─── Main Component ────────────────────────────────────────────────────────────

export default function Endorsements() {
  const { ref: headRef, isVisible: headVisible } = useScrollReveal()
  const { tr } = useLanguage()

  return (
    <section id="endorsements" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-20 pointer-events-none" />

      {/* Subtle warm glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] rounded-full bg-orange-DEFAULT/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* ── Section header ── */}
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="font-mono text-xs text-orange-DEFAULT tracking-widest uppercase">
            {tr.endorsements.eyebrow}
          </span>
          <h2 className="font-mono font-bold text-3xl sm:text-4xl lg:text-5xl text-gradient-white mt-4 mb-6">
            {tr.endorsements.heading}
          </h2>
          <p className="max-w-2xl mx-auto text-text-secondary">
            {tr.academic.subheading}
          </p>
        </motion.div>

        {/* ── Cards grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {endorsements.map((item, i) => (
            <EndorsementCard key={item.id} item={item} index={i} />
          ))}
        </div>

        {/* ── Source note ── */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={headVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center text-[11px] text-text-muted font-mono mt-10"
        >
          {tr.endorsements.sourceNote}
        </motion.p>
      </div>
    </section>
  )
}
