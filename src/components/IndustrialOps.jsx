import { motion } from 'framer-motion'
import { HardHat, Activity, Database, Shield, Wrench, Award, ChevronRight } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

// ─── Highlight cards ──────────────────────────────────────────────────────────

const highlights = [
  {
    id: 'dragline',
    icon: Wrench,
    title: 'Ultra-Class Dragline Structural Upgrade',
    label: 'Caterpillar Contract · Maintenance Planner',
    body: 'Certified Maintenance Planner for a major structural overhaul of ultra-class mining assets. Coordinated downtime windows, multi-team resource allocation, and end-to-end technical tracking across the upgrade lifecycle.',
    tags: ['Caterpillar', 'Maintenance Planning', 'Downtime Coordination'],
  },
  {
    id: 'terex',
    icon: HardHat,
    title: 'Heavy Asset Integration',
    label: 'Terex MT3300 AC Haul Trucks',
    body: 'Led the technical planning and site-level execution of the mounting and commissioning of Terex MT3300 AC mining haul trucks — one of the highest-payload ultra-class vehicles in production mining fleets.',
    tags: ['Terex MT3300 AC', 'Asset Commissioning', 'Site Engineering'],
  },
  {
    id: 'kpi',
    icon: Database,
    title: 'KPI & Data Architecture',
    label: 'Bureau de Méthodes · Digital Workflows',
    body: 'Developed digital "Bureau de Méthodes" workflows to automate the tracking and calculation of MTBF and MTTR across the heavy asset fleet. Produced weekly and monthly executive-level maintenance performance reports used by plant management.',
    tags: ['MTBF / MTTR', 'Data Architecture', 'Executive Reporting'],
  },
  {
    id: 'hse',
    icon: Shield,
    title: 'Safety & Compliance',
    label: 'DuPont HSE Methodology · Electrical Risk',
    body: 'Enforced and audited rigorous Health, Safety & Environment protocols under global DuPont HSE frameworks. Certified in Electrical Risk Management for high-voltage industrial environments.',
    tags: ['DuPont HSE', 'Electrical Risk Mgmt', 'Compliance Audit'],
  },
]

// ─── Certifications ───────────────────────────────────────────────────────────

const certs = [
  { id: 'capm',    label: 'CAPM®',                       issuer: 'PMI',                icon: Award   },
  { id: 'cso',     label: 'Common Safety Orientation',   issuer: 'Energy Safety Canada', icon: Shield  },
  { id: 'h2s',     label: 'H2S Awareness',               issuer: 'Energy Safety Canada', icon: Shield  },
  { id: 'csts',    label: 'CSTS 2020 · WHMIS',           issuer: 'ACSA',               icon: Shield  },
  { id: 'bigdata1',label: 'Big Data Foundations L1',     issuer: 'IBM',                icon: Database },
  { id: 'bigdata2',label: 'Big Data Foundations L2',     issuer: 'IBM',                icon: Database },
  { id: 'hadoop',  label: 'Hadoop Administration',       issuer: 'IBM',                icon: Database },
  { id: 'spark',   label: 'Spark (Level 1)',              issuer: 'IBM',                icon: Activity },
  { id: 'sql',     label: 'SQL Fundamentals',             issuer: 'Sololearn',          icon: Database },
]

// ─── Sub-components ───────────────────────────────────────────────────────────

function HighlightCard({ item, index }) {
  const { ref, isVisible } = useScrollReveal(0.1)
  const Icon = item.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1, ease: 'easeOut' }}
      className="group relative rounded-xl border border-amber-500/15 bg-[#131108] hover:border-amber-500/35 hover:bg-[#181408] transition-all duration-300 overflow-hidden"
    >
      {/* Hover shimmer */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      {/* Corner grid */}
      <div className="absolute top-0 right-0 w-28 h-28 grid-overlay opacity-30 rounded-bl-3xl" />

      <div className="relative z-10 p-6 flex flex-col gap-4">
        {/* Header */}
        <div className="flex items-start gap-3">
          <div className="shrink-0 p-2.5 rounded-lg bg-amber-400/10 border border-amber-400/20">
            <Icon size={18} className="text-amber-400" />
          </div>
          <div>
            <h4 className="font-mono font-bold text-sm text-text-primary leading-snug">
              {item.title}
            </h4>
            <p className="text-[11px] text-amber-400/70 font-mono mt-0.5">{item.label}</p>
          </div>
        </div>

        {/* Body */}
        <p className="text-sm text-text-secondary leading-relaxed">{item.body}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-amber-500/10">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded text-[10px] font-mono text-amber-400/60 bg-amber-400/5 border border-amber-400/15"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

function CertBadge({ cert }) {
  const Icon = cert.icon
  return (
    <div className="flex-shrink-0 flex items-center gap-2.5 px-4 py-2.5 rounded-lg border border-amber-500/20 bg-amber-400/5 hover:border-amber-400/40 hover:bg-amber-400/10 transition-all duration-200 cursor-default">
      <Icon size={13} className="text-amber-400 shrink-0" />
      <div>
        <p className="font-mono text-xs font-semibold text-text-primary whitespace-nowrap">
          {cert.label}
        </p>
        <p className="font-mono text-[10px] text-amber-400/60">{cert.issuer}</p>
      </div>
    </div>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function IndustrialOps() {
  const { ref: headRef, isVisible: headVisible } = useScrollReveal()

  // Duplicate certs for seamless marquee loop
  const marqueeItems = [...certs, ...certs]

  return (
    <section
      id="industrial-ops"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Distinct background — very subtle warm tint vs pure black */}
      <div className="absolute inset-0 bg-[#0c0b08]" />
      <div className="absolute inset-0 grid-overlay opacity-40" />
      {/* Amber glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full bg-amber-400/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">

        {/* ── Section header ── */}
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-400/25 bg-amber-400/8 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_6px_rgba(251,191,36,0.8)]" />
            <span className="font-mono text-[11px] text-amber-400 tracking-widest uppercase">
              Global Tier-1 Mining Corporation · North Africa · 2006 – 2017
            </span>
          </div>

          <h2 className="font-mono font-bold text-3xl sm:text-4xl lg:text-5xl text-gradient-white mb-6">
            Industrial Operations &<br className="hidden sm:block" /> Maintenance Architecture
          </h2>

          <p className="max-w-2xl mx-auto text-text-secondary">
            Supervised mechanical engineering projects and technical design using{' '}
            <span className="text-text-primary font-medium">SolidWorks</span> and{' '}
            <span className="text-text-primary font-medium">AutoCAD</span> within the global
            mining sector. Implemented digital tools to optimize industrial maintenance
            workflows, focusing on equipment availability and{' '}
            <span className="text-amber-400 font-medium">MTTR / MTBF</span> metrics.
          </p>
        </motion.div>

        {/* ── KPI strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={headVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-14"
        >
          {[
            { value: '11 yrs', label: 'Field Operations' },
            { value: 'Tier-1', label: 'Global Mining Corporation' },
            { value: 'CAPM®', label: 'PMI Certified' },
            { value: 'DuPont', label: 'HSE Methodology' },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="rounded-lg border border-amber-500/15 bg-amber-400/5 p-4 text-center"
            >
              <div className="font-mono font-bold text-xl text-amber-400">{value}</div>
              <div className="text-[11px] text-text-muted mt-1">{label}</div>
            </div>
          ))}
        </motion.div>

        {/* ── Highlight cards 2×2 grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
          {highlights.map((item, i) => (
            <HighlightCard key={item.id} item={item} index={i} />
          ))}
        </div>

        {/* ── Certifications ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={headVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {/* Sub-header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px bg-gradient-to-r from-amber-400/30 to-transparent" />
            <div className="flex items-center gap-2">
              <Award size={14} className="text-amber-400" />
              <span className="font-mono text-xs text-amber-400 tracking-widest uppercase">
                Certifications
              </span>
            </div>
            <div className="flex-1 h-px bg-gradient-to-l from-amber-400/30 to-transparent" />
          </div>

          {/* Scrolling marquee */}
          <div className="relative overflow-hidden rounded-xl border border-amber-500/15 bg-[#131108] py-4">
            {/* Fade masks */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#131108] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#131108] to-transparent z-10 pointer-events-none" />

            <div className="flex animate-marquee gap-4 px-4">
              {marqueeItems.map((cert, i) => (
                <CertBadge key={`${cert.id}-${i}`} cert={cert} />
              ))}
            </div>
          </div>

          {/* Static fallback grid for reduced-motion / accessibility */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
            {certs.map((cert) => {
              const Icon = cert.icon
              return (
                <div
                  key={cert.id}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-lg border border-amber-500/15 bg-amber-400/5"
                >
                  <Icon size={12} className="text-amber-400 shrink-0" />
                  <div>
                    <p className="font-mono text-[11px] font-semibold text-text-primary">
                      {cert.label}
                    </p>
                    <p className="font-mono text-[10px] text-amber-400/50">{cert.issuer}</p>
                  </div>
                  <ChevronRight size={10} className="text-text-muted ml-auto shrink-0" />
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
