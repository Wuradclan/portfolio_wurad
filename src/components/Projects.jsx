import { motion } from 'framer-motion'
import { ExternalLink, Lock, Brain, Wrench, Activity, Code2, GitBranch, HardHat, Cpu, Radio, ChevronRight, CircuitBoard, Globe, Instagram, Store, Glasses } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useLanguage } from '../contexts/LanguageContext'

const projects = [
  {
    id: 'kinetic',
    icon: Brain,
    status: 'active',
    statusLabel: 'Active · GitLab',
    tag: 'VR · Health-Tech · Eye-Tracking · Unity',
    title: 'Kinetic Dexterity',
    subtitle: 'Clinical VR Rehabilitation — Dyspraxia (DCD)',
    description:
      'Architected a clinical Virtual Reality application to rehabilitate motor coordination (reaching, grasping, rotating) in children with Dyspraxia (DCD). The system disguises therapeutic exercises as engaging mini-games while streaming real-time biomechanical data to pediatric therapists.',
    techStack: ['Unity', 'C#', 'HTC Vive Pro', 'Eye-Tracking API', 'WebSocket', 'FastAPI', 'Python'],
    link: 'https://gitlab.com/Wurad',
    linkLabel: 'View on GitLab',
    linkIcon: ExternalLink,
    stealth: false,
    image: {
      src: '/assets/kinetic-dexterity-vr.webp',
      alt: 'Kinetic Dexterity VR gameplay interface for Dyspraxia rehabilitation.',
      label: 'Clinical VR Interface',
      sublabel: 'HTC Vive Pro · Dyspraxia Rehabilitation Session',
    },
    highlights: [
      'Engineered specifically for the HTC Vive Pro spatial computing platform for clinical-grade motion tracking.',
      'Integrated native Eye-Tracking APIs to correlate visual attention with motor response times.',
      'Built a secure therapist dashboard to visualize session telemetry and track patient progression over time.',
    ],
  },
  {
    id: 'flypass',
    icon: Globe,
    status: 'active',
    statusLabel: 'Live · Production',
    tag: 'Full-Stack · Cloud Infrastructure · CI/CD · REST API',
    title: 'FlyPass Availability Engine',
    subtitle: 'Decoupled Full-Stack Architecture · Real-Time Data Ingestion',
    description:
      'Architected a distributed cloud platform to predict flight availability for high-frequency travelers. Engineered a decoupled system featuring a high-performance React frontend (Vercel) and a robust API-driven backend (Railway) with automated real-time data ingestion pipelines.',
    techStack: ['React', 'Node.js', 'Vercel', 'Railway', 'REST API', 'Cloud Infrastructure', 'CI/CD'],
    link: 'https://allyoucanflypass.com',
    linkLabel: 'Visit Live Site',
    linkIcon: ExternalLink,
    stealth: false,
    highlights: [
      'Decoupled React frontend deployed on Vercel with automated CI/CD pipelines delivering zero-downtime releases.',
      'Node.js REST API backend on Railway with automated real-time data ingestion from live flight availability sources.',
      'Distributed cloud architecture engineered for high availability and elastic scaling under variable traffic loads.',
      'End-to-end prediction engine delivering actionable flight window recommendations to pass holders in real time.',
    ],
  },
  {
    id: 'souk-el-had',
    icon: Store,
    status: 'mvp',
    statusLabel: 'In Development · MVP Phase',
    tag: 'Digital Transformation · React · Node.js · E-Commerce · SEO',
    title: 'Souk El Had Digital Transformation',
    subtitle: 'Traditional Commerce → Scalable Digital Platform',
    description:
      'Leading the digital architecture for Africa\'s largest traditional retail hub. Architecting a scalable marketplace infrastructure to bridge 10,000+ physical merchants with a modern, high-availability digital directory.',
    techStack: ['React', 'Node.js', 'SEO', 'Digital Branding', 'Social Media Strategy'],
    link: 'https://soukelhad.ma',
    linkLabel: 'Visit Website',
    linkIcon: Globe,
    secondaryLink: {
      href: 'https://www.instagram.com/soukelhad.ma',
      label: 'Instagram',
      icon: Instagram,
    },
    stealth: false,
    image: {
      src: '/assets/soukelhad-hero.webp',
      alt: 'Souk El Had — digital marketplace for one of Africa\'s largest traditional retail hubs.',
      label: 'Souk El Had Platform',
      sublabel: 'soukelhad.ma · 10,000+ Merchants',
    },
    highlights: [
      'Architecting a scalable marketplace directory to digitise 10,000+ physical vendors within a major traditional retail hub.',
      'Developed a social media presence strategy on Instagram, connecting the physical marketplace with a digital audience.',
      'Designing a Node.js API backend to power real-time vendor listings, search, and discovery for non-technical merchants.',
      'Implemented SEO and local search optimisation to drive organic traffic to the hub\'s online presence.',
    ],
  },
  {
    id: 'longueuil-vr',
    icon: Glasses,
    status: 'finalist',
    statusLabel: 'Award-Winning · Finalist',
    tag: 'Web AR · GPS · 3D Reconstruction · Civic Tech',
    title: 'Revu | Explorez Longueuil en AR',
    subtitle: 'Défi Technologie Longueuil · Award-Winning AR Ecosystem',
    description:
      'Award-winning Web AR platform for urban innovation. Engineered a GPS-triggered ecosystem that overlays 300 years of historical heritage — including 3D reconstructions of the 18th-century Château Fort — onto modern 360° cityscapes.',
    techStack: ['Web AR', 'A-Frame', 'GPS Geofencing', '3D Reconstruction', 'Agile Development'],
    link: '/prototypes/longueuil/index.html',
    linkLabel: 'Live Prototype',
    linkIcon: ExternalLink,
    stealth: false,
    image: {
      src: '/assets/longueuil-preview.webp',
      alt: 'Revu — Web AR platform overlaying historical 360° panoramas onto the streets of Longueuil.',
      label: 'Revu AR Platform',
      sublabel: 'Défi Technologie Longueuil · Award-Winning',
    },
    highlights: [
      'Developed a Web AR civic platform during a competitive tech challenge, earning finalist / award-winning recognition.',
      'Engineered GPS-triggered 360° panoramic environments to immersively overlay 300 years of Longueuil urban history.',
      'Architected 3D reconstruction pipelines to digitally restore landmarks such as the historical Château Fort for in-place AR viewing.',
      'Implemented real-time skybox swapping via JavaScript setAttribute for seamless scene transitions without page reloads.',
    ],
  },
  {
    id: 'industrial-rd',
    icon: Lock,
    status: 'stealth',
    statusLabel: 'Stealth · NDA',
    tag: 'PROPRIETARY R&D · INDUSTRIAL SAFETY · ADVANCED INTERFACES · REAL-TIME SYSTEMS',
    title: 'WuRAD',
    subtitle: 'Confidential Architecture · Pre-Patent IP',
    stealthBadge: 'CONFIDENTIAL ARCHITECTURE',
    description:
      'Developing WuRAD — A proprietary R&D initiative focused on next-generation industrial safety interfaces. Architecting advanced situational awareness systems for high-complexity environments, leveraging custom signal processing and real-time decision-support frameworks.',
    techStack: ['Proprietary Stack', 'Classified Architecture', 'Real-Time Systems', 'Industrial Safety'],
    link: null,
    linkLabel: 'Details Under NDA',
    linkIcon: Lock,
    stealth: true,
    highlights: [
      'Advanced multi-source data integration.',
      'Optimized for mission-critical latency requirements.',
      'Compliant with industrial functional safety standards.',
      'Proprietary human-machine interface trust architecture.',
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
      'Leveraging a formal foundation in VR/AR development (AEC, Champlain College) to architect real-time spatial interfaces for industrial safety.',
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
    link: 'https://github.com/Wuradclan',
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
  {
    id: 'dragline',
    icon: HardHat,
    status: 'legacy',
    statusLabel: 'Legacy · Heavy Industry',
    tag: 'Industrial · Full-Stack · Reliability',
    title: 'Ultra-Class Dragline Maintenance Intelligence',
    subtitle: 'Full-Stack MTBF / MTTR Analytics Platform',
    description:
      'Architected and developed a full-stack web application (PHP/MySQL) to digitize maintenance tracking for ultra-class dragline excavators operating in a large-scale open-pit mining environment. The system automated critical industrial KPIs (MTBF and MTTR) by bridging physical sensor logs with a digital interface, significantly optimizing asset uptime during massive mechanical upgrades with Caterpillar.',
    techStack: ['PHP', 'MySQL', 'Data Engineering', 'Industrial Operations', 'AutoCAD'],
    link: null,
    linkLabel: 'Internal System · Heavy Industry',
    linkIcon: Lock,
    stealth: false,
    dualImages: [
      {
        src: '/assets/mtbf-dashboard.webp',
        alt: 'Custom PHP/MySQL dashboard tracking MTBF and MTTR metrics for heavy mining assets.',
        label: 'Software Layer',
        sublabel: 'PHP / MySQL · MTBF & MTTR Dashboard',
      },
      {
        src: '/assets/dragline-machine.webp',
        alt: 'Ultra-class dragline excavator undergoing structural upgrades.',
        label: 'Physical Asset',
        sublabel: 'Ultra-Class Dragline · Caterpillar Upgrade',
      },
    ],
    highlights: [
      'Developed full-stack PHP/MySQL anomaly tracking dashboard for heavy mining assets.',
      'Automated Mean Time Between Failures (MTBF) and Mean Time To Repair (MTTR) analytics.',
      'Coordinated data tracking during a major structural upgrade of an ultra-class dragline excavator by Caterpillar.',
      'Replaced manual tracking with a centralized digital Bureau de Méthodes workflow.',
    ],
  },
  {
    id: 'bci-vr',
    icon: Cpu,
    status: 'hardware',
    statusLabel: 'Hardware & Edge Integration',
    tag: 'IoT · Hardware · Neurotech · C/C++',
    title: 'Neuro-Reactive VR Architecture (BCI)',
    subtitle: 'End-to-End Brain-Computer Interface Pipeline',
    description:
      'Architected an end-to-end Brain-Computer Interface (BCI) pipeline to control Virtual Reality environments based on real-time emotional and cognitive states. The system intercepts raw neuroelectric signals from a consumer EEG headset, routes them through a custom edge-computing stack, and translates parsed frequency-band features into live state triggers inside a Unity VR environment.',
    techStack: ['C / C++', 'Arduino', 'Raspberry Pi', 'HC-06 Bluetooth', 'Processing', 'ControlP5', 'Python', 'Unity'],
    link: null,
    linkLabel: 'Private Research Build',
    linkIcon: Lock,
    stealth: false,
    featured: true,
    architectureDiagram: {
      src: '/assets/bci-architecture.webp',
      alt: 'End-to-end BCI data pipeline: MindFlex -> Arduino -> Raspberry Pi Edge Server -> Oculus Quest VR.',
      label: 'System Architecture',
      sublabel: 'End-to-end BCI data pipeline — MindFlex → Arduino → RPi → Oculus Quest VR',
    },
    images: [
      {
        src: '/assets/brain-grapher-ui.webp',
        alt: 'Real-time EEG telemetry dashboard visualizing Delta, Theta, Alpha, Beta, and Gamma frequencies.',
        label: 'Software Layer',
        sublabel: 'Processing Brain Visualizer · ControlP5 GUI',
      },
      {
        src: '/assets/bci-hardware-setup.webp',
        alt: 'Hacked MindFlex headset interfaced with an Arduino microcontroller and HC-06 Bluetooth module.',
        label: 'Hardware Layer',
        sublabel: 'MindFlex EEG · Arduino · HC-06 BT Module',
      },
    ],
    pipeline: [
      { icon: Brain,     label: 'MindFlex EEG',    sub: 'Hacked GPIO pins' },
      { icon: CircuitBoard, label: 'Arduino UNO',    sub: 'Analog signal capture' },
      { icon: Radio,     label: 'HC-06 Bluetooth',  sub: 'Wireless telemetry TX' },
      { icon: Cpu,       label: 'Raspberry Pi',     sub: 'Edge server / RX' },
      { icon: Activity,  label: 'Processing + ControlP5', sub: 'Real-time visualiser' },
      { icon: Brain,     label: 'Unity VR',         sub: 'State-change triggers' },
    ],
    highlights: [
      'Hacked a commercial MindFlex EEG headset to expose raw data pins; interfaced directly with an Arduino via GPIO for analog brainwave capture.',
      'Configured an HC-06 Bluetooth module to transmit live telemetry (Delta, Theta, Alpha, Beta, Gamma bands) wirelessly to a Raspberry Pi edge server.',
      'Built a real-time data visualization layer using the Processing Brain Visualizer and ControlP5 GUI library for frequency-band monitoring.',
      'Parsed EEG frequency bands into actionable ML feature vectors to trigger real-time cognitive-state changes within a Unity VR environment.',
    ],
  },
]

const statusStyles = {
  active:   'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
  mvp:      'bg-sky-500/10 text-sky-400 border-sky-500/30',
  stealth:  'bg-orange-DEFAULT/10 text-orange-DEFAULT border-orange-DEFAULT/30',
  past:     'bg-zinc-500/10 text-zinc-400 border-zinc-500/30',
  legacy:   'bg-amber-500/10 text-amber-400 border-amber-500/30',
  hardware: 'bg-violet-500/10 text-violet-400 border-violet-500/30',
  finalist: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
}

// Pipeline signal-chain diagram (used by BCI card)
function PipelineDiagram({ stages }) {
  return (
    <div className="overflow-x-auto pb-1 -mx-1 px-1">
      <div className="flex items-stretch gap-0 min-w-max">
        {stages.map((stage, i) => {
          const Icon = stage.icon
          return (
            <div key={stage.label} className="flex items-center gap-0">
              <div className="flex flex-col items-center gap-1.5 px-3 py-2.5 rounded-lg border border-violet-500/20 bg-violet-500/5 min-w-[100px] text-center">
                <Icon size={14} className="text-violet-400 shrink-0" />
                <span className="font-mono text-[10px] font-semibold text-text-primary leading-tight">
                  {stage.label}
                </span>
                <span className="font-mono text-[9px] text-text-muted leading-tight">
                  {stage.sub}
                </span>
              </div>
              {i < stages.length - 1 && (
                <ChevronRight size={14} className="text-violet-400/40 shrink-0 mx-0.5" />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

function ProjectCard({ project, index }) {
  const { ref, isVisible } = useScrollReveal()
  const { tr } = useLanguage()
  const tp = tr.projects
  const tItem = tr.projectItems?.[project.id] || {}
  const Icon = project.icon
  const isHardware   = project.status === 'hardware'
  const description  = tp.descriptions?.[project.id]  || project.description
  const statusLabel  = tp.statusLabels?.[project.id]  || project.statusLabel
  const subtitle     = tItem.subtitle                  || project.subtitle
  const linkLabel    = tItem.linkLabel                 || project.linkLabel
  const tag          = tItem.tag                       || project.tag
  const highlights   = tItem.highlights                || project.highlights
  const stealthBadge = project.stealthBadge ? tp.confidentialBadge : null

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (index % 2) * 0.12, ease: 'easeOut' }}
      className={`group relative flex flex-col rounded-xl border bg-card transition-all duration-300 overflow-hidden hover:shadow-card-hover ${
        isHardware
          ? 'border-violet-500/25 hover:border-violet-400/50 hover:bg-card-hover'
          : 'border-border hover:border-orange-DEFAULT/40 hover:bg-card-hover'
      }`}
    >
      {/* Status-aware shimmer line */}
      <div
        className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
          isHardware ? 'via-violet-400' : 'via-orange-DEFAULT'
        }`}
      />

      {/* Stealth overlay */}
      {project.stealth && (
        <div className="absolute inset-0 bg-gradient-to-br from-orange-DEFAULT/3 via-transparent to-transparent pointer-events-none" />
      )}

      {/* Hardware background tint */}
      {isHardware && (
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/4 via-transparent to-transparent pointer-events-none" />
      )}

      <div className="relative z-10 p-8 flex flex-col gap-5 h-full">
        {/* Top row */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div
              className={`p-2.5 rounded-lg border shrink-0 ${
                isHardware
                  ? 'bg-violet-500/10 border-violet-500/25'
                  : 'bg-orange-glow border-orange-DEFAULT/20'
              }`}
            >
              <Icon
                size={20}
                className={isHardware ? 'text-violet-400' : 'text-orange-DEFAULT'}
              />
            </div>
            <div>
              <h3 className="font-mono font-bold text-lg text-text-primary">
                {project.title}
              </h3>
              <p className="text-xs text-text-muted mt-0.5">{subtitle}</p>
            </div>
          </div>
          <span
            className={`shrink-0 px-2.5 py-1 rounded-full text-[10px] font-mono border ${
              statusStyles[project.status]
            }`}
          >
            {statusLabel}
          </span>
        </div>

        {/* Tag */}
        <div className="flex items-start gap-1.5">
          <Code2
            size={11}
            className={`mt-0.5 shrink-0 ${isHardware ? 'text-violet-400' : 'text-orange-DEFAULT'}`}
          />
          <span
            className={`font-mono text-[11px] tracking-wider uppercase leading-relaxed ${
              isHardware ? 'text-violet-400' : 'text-orange-DEFAULT'
            }`}
          >
            {tag}
          </span>
        </div>

        {/* Stealth badge — rendered for pre-patent / confidential projects */}
        {stealthBadge && (
          <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg border border-red-500/30 bg-red-500/5 w-fit">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
            </span>
            <Lock size={10} className="text-red-400/80 shrink-0" />
            <span className="font-mono text-[10px] font-bold text-red-400 tracking-[0.15em] uppercase">
              {stealthBadge}
            </span>
          </div>
        )}

        {/* Description */}
        <p className="text-sm text-text-secondary leading-relaxed">{description}</p>

        {/* Single featured image (non-BCI cards) */}
        {project.image && !project.architectureDiagram && (
          <div className="group/img relative overflow-hidden rounded-lg border border-white/10 bg-[#0f0c1a]">
            <div className="relative h-44 overflow-hidden">
              <img
                src={project.image.src}
                alt={project.image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.nextElementSibling.style.display = 'flex'
                }}
              />
              {/* Fallback */}
              <div
                className="absolute inset-0 hidden items-center justify-center bg-[#0f0c1a]"
                aria-hidden="true"
              >
                <div className="text-center px-4">
                  <div className="w-8 h-8 rounded-lg border border-orange-DEFAULT/30 bg-orange-glow flex items-center justify-center mx-auto mb-2">
                    <Brain size={14} className="text-orange-DEFAULT/60" />
                  </div>
                  <p className="font-mono text-[10px] text-text-muted">{project.image.sublabel}</p>
                  <p className="font-mono text-[9px] text-text-muted/50 mt-1">
                    Place image at public{project.image.src}
                  </p>
                </div>
              </div>
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300" />
              {/* Hover label */}
              <div className="absolute bottom-0 left-0 right-0 px-3 py-2.5 translate-y-full group-hover/img:translate-y-0 transition-transform duration-300">
                <p className="font-mono text-[11px] font-semibold text-orange-DEFAULT">{project.image.label}</p>
              </div>
            </div>
            {/* Caption bar */}
            <div className="flex items-center justify-between px-3 py-2 border-t border-white/5">
              <p className="font-mono text-[11px] font-semibold text-orange-DEFAULT">{project.image.label}</p>
              <p className="font-mono text-[10px] text-text-muted">{project.image.sublabel}</p>
            </div>
          </div>
        )}

        {/* Dual-image grid — standard (non-hardware) cards, e.g. Dragline */}
        {project.dualImages && (
          <div className="grid grid-cols-2 gap-3">
            {project.dualImages.map((img) => (
              <div
                key={img.label}
                className="group/img relative overflow-hidden rounded-lg border border-white/10 bg-[#0f0c1a]"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover grayscale-[50%] hover:grayscale-0 transition-all duration-300 group-hover/img:scale-105"
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                      e.currentTarget.nextElementSibling.style.display = 'flex'
                    }}
                  />
                  {/* Fallback placeholder */}
                  <div
                    className="absolute inset-0 hidden items-center justify-center bg-[#0f0c1a]"
                    aria-hidden="true"
                  >
                    <div className="text-center px-3">
                      <div className="w-7 h-7 rounded-lg border border-amber-500/30 bg-amber-400/10 flex items-center justify-center mx-auto mb-1.5">
                        <HardHat size={12} className="text-amber-400/60" />
                      </div>
                      <p className="font-mono text-[9px] text-text-muted leading-tight">{img.sublabel}</p>
                      <p className="font-mono text-[8px] text-text-muted/40 mt-1">
                        Place at public{img.src}
                      </p>
                    </div>
                  </div>
                  {/* Hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300" />
                  {/* Slide-up label on hover */}
                  <div className="absolute bottom-0 left-0 right-0 px-2.5 py-2 translate-y-full group-hover/img:translate-y-0 transition-transform duration-300">
                    <p className="font-mono text-[10px] font-semibold text-amber-300">{img.label}</p>
                  </div>
                </div>
                {/* Static caption */}
                <div className="flex items-center justify-between px-2.5 py-2 border-t border-white/5">
                  <p className="font-mono text-[10px] font-semibold text-amber-400">{img.label}</p>
                  <p className="font-mono text-[9px] text-text-muted">{img.sublabel}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Hardware pipeline diagram */}
        {project.pipeline && (
          <div className="rounded-lg border border-violet-500/15 bg-[#0f0c1a] p-3">
            <p className="font-mono text-[10px] text-violet-400/60 tracking-widest uppercase mb-2.5">
              Signal Chain Architecture
            </p>
            <PipelineDiagram stages={project.pipeline} />
          </div>
        )}

        {/* ── Visual Evidence Block ── */}
        {(project.architectureDiagram || project.images) && (
          <div className="flex flex-col gap-3">

            {/* 1 — Featured architecture diagram */}
            {project.architectureDiagram && (() => {
              const diag = project.architectureDiagram
              return (
                <div className="group/diag relative overflow-hidden rounded-xl border border-violet-500/20 bg-white/5 backdrop-blur-sm">
                  {/* Label bar */}
                  <div className="flex items-center justify-between px-3 py-2 border-b border-violet-500/15">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-400 shadow-[0_0_6px_rgba(167,139,250,0.8)]" />
                      <span className="font-mono text-[11px] font-semibold text-violet-400 tracking-wider uppercase">
                        {diag.label}
                      </span>
                    </div>
                    <span className="font-mono text-[10px] text-text-muted">{diag.sublabel}</span>
                  </div>

                  {/* Diagram image */}
                  <div className="relative overflow-hidden bg-white/[0.03]">
                    <img
                      src={diag.src}
                      alt={diag.alt}
                      className="w-full object-contain max-h-64 transition-transform duration-500 group-hover/diag:scale-[1.02]"
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                        e.currentTarget.nextElementSibling.style.display = 'flex'
                      }}
                    />
                    {/* Fallback */}
                    <div
                      className="hidden h-48 items-center justify-center"
                      aria-hidden="true"
                    >
                      <div className="text-center px-6">
                        <div className="flex items-center justify-center gap-2 mb-3 opacity-40">
                          {[Brain, ChevronRight, CircuitBoard, ChevronRight, Cpu, ChevronRight, Brain].map((Icon, i) => (
                            <Icon key={i} size={i % 2 === 1 ? 10 : 16} className="text-violet-400" />
                          ))}
                        </div>
                        <p className="font-mono text-[10px] text-text-muted">{diag.sublabel}</p>
                        <p className="font-mono text-[9px] text-text-muted/50 mt-1">
                          Place diagram at public{diag.src}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })()}

            {/* 2 — Supporting thumbnails (software + hardware side-by-side) */}
            {project.images && (
              <div className="grid grid-cols-2 gap-3">
                {project.images.map((img) => (
                  <div
                    key={img.label}
                    className="group/img relative overflow-hidden rounded-lg border border-white/10 bg-[#0f0c1a]"
                  >
                    <div className="relative h-32 overflow-hidden">
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                        loading="lazy"
                        decoding="async"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none'
                          e.currentTarget.nextElementSibling.style.display = 'flex'
                        }}
                      />
                      {/* Fallback */}
                      <div
                        className="absolute inset-0 hidden items-center justify-center bg-[#0f0c1a]"
                        aria-hidden="true"
                      >
                        <div className="text-center px-3">
                          <div className="w-7 h-7 rounded-lg border border-violet-500/30 bg-violet-500/10 flex items-center justify-center mx-auto mb-1.5">
                            <Cpu size={12} className="text-violet-400/60" />
                          </div>
                          <p className="font-mono text-[9px] text-text-muted leading-tight">{img.sublabel}</p>
                        </div>
                      </div>
                      {/* Hover gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300" />
                      {/* Hover label */}
                      <div className="absolute bottom-0 left-0 right-0 px-2.5 py-2 translate-y-full group-hover/img:translate-y-0 transition-transform duration-300">
                        <p className="font-mono text-[10px] font-semibold text-violet-300">{img.label}</p>
                      </div>
                    </div>
                    {/* Static caption */}
                    <div className="px-2.5 py-1.5 border-t border-white/5">
                      <p className="font-mono text-[10px] font-semibold text-violet-400">{img.label}</p>
                      <p className="font-mono text-[9px] text-text-muted mt-0.5 leading-tight">{img.sublabel}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>
        )}

        {/* Highlights */}
        <ul className="grid grid-cols-1 gap-1.5">
          {highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-xs text-text-secondary">
              <span
                className={`mt-1.5 shrink-0 w-1 h-1 rounded-full ${
                  isHardware ? 'bg-violet-400/60' : 'bg-orange-DEFAULT/60'
                }`}
              />
              {h}
            </li>
          ))}
        </ul>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className={`px-2.5 py-1 rounded text-[11px] font-mono bg-surface border ${
                isHardware
                  ? 'text-violet-400/70 border-violet-500/20 hover:border-violet-400/40'
                  : 'text-text-muted border-border'
              } transition-colors`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="pt-2 flex flex-wrap items-center gap-4">
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-orange-DEFAULT hover:text-orange-dim transition-colors group/link"
            >
              <project.linkIcon size={14} />
              {linkLabel}
              <ExternalLink
                size={11}
                className="opacity-0 group-hover/link:opacity-100 transition-opacity"
              />
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-text-muted cursor-default">
              <project.linkIcon size={14} />
              {linkLabel}
            </span>
          )}

          {/* Secondary link (e.g. Instagram, docs, demo) */}
          {project.secondaryLink && (() => {
            const SIcon = project.secondaryLink.icon
            return (
              <a
                href={project.secondaryLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-text-muted hover:text-pink-400 transition-colors group/sec"
              >
                <SIcon size={14} />
                {project.secondaryLink.label}
                <ExternalLink
                  size={11}
                  className="opacity-0 group-hover/sec:opacity-100 transition-opacity"
                />
              </a>
            )
          })()}
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const { ref: headRef, isVisible: headVisible } = useScrollReveal()
  const { tr } = useLanguage()

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
            {tr.projects.eyebrow}
          </span>
          <h2 className="font-mono font-bold text-3xl sm:text-4xl lg:text-5xl text-gradient-white mt-4 mb-6">
            {tr.projects.heading}
          </h2>
          <p className="max-w-2xl mx-auto text-text-secondary">
            {tr.experience.subheading}
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className={project.featured ? 'md:col-span-2' : ''}
            >
              <ProjectCard project={project} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
