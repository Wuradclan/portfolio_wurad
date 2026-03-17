export const translations = {
  // ═══════════════════════════════════════════════════════════════
  //  ENGLISH
  // ═══════════════════════════════════════════════════════════════
  en: {
    nav: {
      about:      'About',
      experience: 'Experience',
      projects:   'Projects',
      academic:   'Academic',
      contact:    'Contact',
      hireMe:     'Hire Me',
    },

    hero: {
      identityTag:       'Lead Architect | Intelligent & Secured Industrial Ecosystems',
      identityTagSuffix: '(AI\u00a0•\u00a0XR\u00a0•\u00a0IIoT)',
      typedStrings: [
        'Systems Architect',
        'Industrial AI Specialist',
        'XR Architect',
        'Cyber-Physical Security',
        'Reliability Engineer',
      ],
      headline: {
        pre: 'Architecting at the intersection of', h1: 'Heavy Industry',
        mid: 'and', h2: 'Intelligent Software',
        pre2: '. From ultra-class', h3: 'mechanical reliability',
        mid2: 'to secure', h4: 'edge AI', mid3: 'and', h5: 'spatial computing',
      },
      quote: {
        pre: 'A unique systems perspective that bridges the gap between',
        h1: 'mechanical gear constraints', mid: 'and', h2: 'low-latency digital signals',
      },
      badges: {
        location: 'Canada\u00a0·\u00a0Open to Remote Roles',
        degree:   'M.Sc. Software Engineering\u00a0·\u00a0UdeS',
        security: 'McGill Applied Cybersecurity',
      },
      cta: { projects: 'View Projects', connect: "Let's Connect", cv: '\u2193\u00a0Download CV', scroll: 'Scroll' },
    },

    about: {
      eyebrow:   'About the Architect',
      nameplate: 'Lead Architect',
      bioSegments: [
        { text: 'A multidisciplinary ' },
        { text: 'Systems Architect', type: 'primary' },
        { text: ' with a rare duality: ' },
        { text: '11 years of operational grit', type: 'orange' },
        { text: ' in heavy industry coupled with advanced research in ' },
        { text: 'Software Engineering', type: 'primary' },
        { text: ' and ' },
        { text: 'Cybersecurity', type: 'primary' },
        { text: '. My expertise spans the full stack\u2014from simulating ' },
        { text: 'mechanical constraints', type: 'primary' },
        { text: ' in remote industrial camps to architecting cutting-edge ' },
        { text: 'Edge AI', type: 'orange' },
        { text: ' and ' },
        { text: 'neuro-reactive VR interfaces', type: 'orange' },
        { text: '. I specialize in bridging the physical layer and the digital frontier, ensuring ' },
        { text: 'high-availability systems', type: 'primary' },
        { text: ' are as resilient on the ground as they are secure in the cloud.' },
      ],
      available: 'Available',
      subLabel:  'AI\u00a0•\u00a0XR\u00a0•\u00a0IIoT',
      tags: ['Industrial Reliability', 'Edge AI', 'Spatial Computing', 'Cybersecurity', 'VR/AR Development', 'Systems Architecture'],
      stats: [
        { label: '11\u00a0yrs', sub: 'Heavy Industry Operations' },
        { label: 'Edge AI',   sub: 'Spatial & Embedded Systems' },
        { label: 'Cyber',     sub: 'IT/OT Security Architecture' },
        { label: 'M.Sc.',     sub: 'Software Engineering\u00a0·\u00a0UdeS' },
      ],
      metaDescription: 'Portfolio of a Lead Systems Architect specializing in Intelligent Industrial Ecosystems, IIoT, Edge AI, and XR Spatial Computing. Bridging heavy industry and digital innovation.',
    },

    pillars: {
      eyebrow:    'Core Competencies',
      heading:    'The\u00a0Three Pillars',
      subheading: 'A rare convergence of industrial operations experience, Cybersecurity architecture, and AI/XR development — all within a single systems mindset.',
      items: {
        reliability: {
          tag:         '01 — INDUSTRIAL',
          title:       'Reliability & OT Operations',
          subtitle:    'Reliability & OT Operations',
          description: 'Specialist in industrial asset reliability with hands-on deployment experience in Tier-1 global mining. Translating raw operational telemetry into actionable maintenance intelligence.',
          skills: [
            { label: 'MTTR / MTBF Optimization',  desc: 'Mean-time analytics driving heavy machinery uptime' },
            { label: 'DuPont Safety Culture',      desc: 'HSE Coordination trained by global safety frameworks' },
            { label: 'Reliability Engineering',    desc: 'Structured SOP and digital workflow deployment in complex physical operations' },
          ],
          stat:      { value: '99.2%', label: 'Asset Uptime Target' },
          siteReady: { label: 'Canadian Industrial Site-Ready', certs: 'CSO\u00a0·\u00a0H2S\u00a0·\u00a0CSTS 2020' },
        },
        security: {
          tag:         '02 — SECURITY',
          title:       'Cyber-Physical Security',
          subtitle:    'Cyber-Physical Security',
          description: 'Architecting robust cyber defenses for converged IT/OT environments where software vulnerabilities have immediate physical-world consequences. McGill-certified in Applied Cybersecurity.',
          skills: [
            { label: 'Security Architecture & Design', desc: 'Building resilient, fault-tolerant network topologies' },
            { label: 'Enterprise Risk Management',     desc: 'Systemic risk mapping and threat modeling' },
            { label: 'Secure IoT / ICS',               desc: 'Hardening industrial control systems and edge-sensor networks' },
          ],
          stat: { value: 'IT/OT', label: 'Convergence Specialization' },
        },
        intelligence: {
          tag:         '03 — INTELLIGENCE & ARCHITECTURE',
          title:       'Spatial Computing & AI',
          subtitle:    'Spatial Computing & AI Pipelines',
          description: 'Building next-generation diagnostic systems. Fusing predictive AI with immersive XR interfaces, grounded in a formal AEC in VR & AR Specialist and backed by master\'s-level software engineering methodologies.',
          skills: [
            { label: 'Data Engineering & Big Data',       desc: 'Architecting scalable data warehousing pipelines' },
            { label: 'XR Architecture & Spatial Computing', desc: 'Formal AEC credential applied to BCI-VR neuro-diagnostics and industrial spatial UI' },
            { label: 'Predictive ML Models',              desc: 'Deploying AI for industrial failure prediction and clinical rehabilitation' },
            { label: 'Enterprise Systems Analysis',       desc: 'End-to-end software architecture and lifecycle management' },
          ],
          stat: { value: 'HA', label: 'High-Availability Systems' },
        },
      },
    },

    projects: {
      eyebrow: 'Stealth & Featured Projects',
      heading: 'Selected\u00a0Work',
      confidentialBadge: 'CONFIDENTIAL ARCHITECTURE',
      stealthMode:       'STEALTH MODE',
      viewOnGitlab:  'View on GitLab',
      visitSite:     'Visit Website',
      visitLive:     'Visit Live Site',
      livePrototype: 'Live Prototype',
      internalSystem: 'Internal System · Heavy Industry',
      privateResearch: 'Private Research Build',
      privateCompany:  'Private Company',
      ndaLabel:       'Details Under NDA',
      statusLabels: {
        kinetic:        'Active · GitLab',
        flypass:        'Live · Production',
        'souk-el-had':  'In Development · MVP Phase',
        'longueuil-vr': 'Award-Winning · Finalist',
        'industrial-rd': 'Stealth · NDA',
        cognixr:        'Past · Health-Tech',
        toolmanager:    'Open Source · GitHub',
        dragline:       'Legacy · Heavy Industry',
        bci:            'Research · Hardware',
      },
      descriptions: {
        kinetic:
          'Architected a clinical Virtual Reality application to rehabilitate motor coordination (reaching, grasping, rotating) in children with Dyspraxia (DCD). The system disguises therapeutic exercises as engaging mini-games while streaming real-time biomechanical data to pediatric therapists.',
        flypass:
          'Architected a distributed cloud platform to predict flight availability for high-frequency travelers. Engineered a decoupled system featuring a high-performance React frontend (Vercel) and a robust API-driven backend (Railway) with automated real-time data ingestion pipelines.',
        'souk-el-had':
          'Leading the digital architecture for Africa\'s largest traditional retail hub. Architecting a scalable marketplace infrastructure to bridge 10,000+ physical merchants with a modern, high-availability digital directory.',
        'longueuil-vr':
          'Award-winning Web AR platform for urban innovation. Engineered a GPS-triggered ecosystem that overlays 300 years of historical heritage — including 3D reconstructions of the 18th-century Château Fort — onto modern 360° cityscapes.',
        'industrial-rd':
          'Developing WuRAD — A proprietary R&D initiative focused on next-generation industrial safety interfaces. Architecting advanced situational awareness systems for high-complexity environments, leveraging custom signal processing and real-time decision-support frameworks.',
        cognixr:
          'Led technical strategy and architecture as Acting CTO for a health-tech startup. Managed investor-mandated technical roadmaps, architected the XR diagnostic platform, and built cross-functional engineering teams.',
        toolmanager:
          'A full-stack monorepo system for tracking, maintenance scheduling, and lifecycle management of industrial tools and equipment. Built with a microservices architecture for deployment in mining and heavy-industry environments.',
        dragline:
          'Architected and developed a full-stack web application (PHP/MySQL) to digitize maintenance tracking for ultra-class dragline excavators. The system automated critical industrial KPIs (MTBF and MTTR) by bridging physical sensor logs with a digital interface.',
        bci:
          'Architected an end-to-end Brain-Computer Interface (BCI) pipeline to control Virtual Reality environments based on real-time emotional and cognitive states.',
      },
    },

    experience: {
      eyebrow:    'Professional Journey',
      heading:    'Experience\u00a0Timeline',
      subheading: 'From heavy-industry field operations to software engineering research — a decade of building at the intersection of physical and digital systems.',
      present:    'Present',
      active:     'Active',
      phases: {
        phase4: { phase: 'Present',   label: 'Independent Research & Consulting' },
        phase3: { phase: 'Phase 3',   label: 'The Cyber-Physical & Neurotech Edge' },
        phase2: { phase: 'Phase 2',   label: 'The Enterprise Software Bridge' },
        phase1: { phase: 'Phase 1',   label: 'The Industrial Foundation' },
      },
    },

    industrialOps: {
      eyebrow:         'Field Operations',
      eyebrowEmployer: 'Global Tier-1 Mining Corporation\u00a0·\u00a0North Africa\u00a0·\u00a0 2006\u00a0–\u00a02017',
      heading:    'Industrial Operations\u00a0& Maintenance Architecture',
      subheading: 'Hands-on deployment of digital systems in demanding Tier-1 mining environments — bridging physical engineering with data-driven operations.',
      kpi: [
        { value: '99.2%', label: 'Asset Uptime' },
        { value: '11+',   label: 'Years Field Ops' },
        { value: 'T1',    label: 'Mining Grade' },
        { value: '4/4',   label: 'GPA · Key Modules' },
      ],
      certsHeading: 'Certifications & Credentials',
      highlights: {
        dragline: {
          title: 'Ultra-Class Dragline Structural Upgrade',
          label: 'Caterpillar Contract · Maintenance Planner',
          body:  'Certified Maintenance Planner for a major structural overhaul of ultra-class mining assets. Coordinated downtime windows, multi-team resource allocation, and end-to-end technical tracking across the upgrade lifecycle.',
        },
        terex: {
          title: 'Heavy Asset Integration',
          label: 'Terex MT3300 AC Haul Trucks',
          body:  'Led the technical planning and site-level execution of the mounting and commissioning of Terex MT3300 AC mining haul trucks — one of the highest-payload ultra-class vehicles in production mining fleets.',
        },
        kpi: {
          title: 'KPI & Data Architecture',
          label: 'Bureau de Méthodes · Digital Workflows',
          body:  'Developed digital "Bureau de Méthodes" workflows to automate the tracking and calculation of MTBF and MTTR across the heavy asset fleet. Produced weekly and monthly executive-level maintenance performance reports.',
        },
        hse: {
          title: 'Safety & Compliance',
          label: 'DuPont HSE Methodology · Electrical Risk',
          body:  'Enforced and audited rigorous Health, Safety & Environment protocols under global DuPont HSE frameworks. Certified in Electrical Risk Management for high-voltage industrial environments.',
        },
      },
    },

    endorsements: {
      eyebrow:    'Professional Endorsements',
      heading:    'Voices\u00a0from the Field',
      context:    'Coaching context',
      sourceNote: 'All endorsements sourced from LinkedIn\u00a0·\u00a0Names and titles reproduced with permission',
      categories: {
        ouazzani: 'Executive Leadership & Risk',
        draifi:   'Operational Excellence',
        dabounou: 'Academic Distinction',
      },
    },

    academic: {
      eyebrow:    'Academic Credentials',
      heading:    'Academic\u00a0Excellence',
      subheading: 'A continuous trajectory — from applied industrial engineering to graduate-level software architecture and Cybersecurity.',
      inProgress:      'In Progress',
      startingAutumn:  'Starting Autumn 2026',
      completed:       'Completed',
      courses:         'Key Courses',
      researchFocus:   'Research focus',
    },

    contact: {
      eyebrow:    "Let's Work Together",
      heading:    'Open to the Right\u00a0Opportunity',
      subheading: "Whether it's a senior engineering role, research collaboration, or a stealth project that needs a systems mind — let's talk.",
      ctaBody:    'Currently seeking senior roles in Systems Architecture, Industrial AI, and Cyber-Physical Security.',
      ctaButton:  'Get in Touch',
      primary:    'Primary',
      socialDescs: {
        linkedin: 'Professional network',
        github:   'Open source work',
        gitlab:   'Featured projects',
        email:    'Direct contact',
      },
      locations: {
        canada:     { region: 'Open to Remote Roles' },
        northAfrica: { region: 'Remote-Friendly' },
      },
      footer: 'Systems Architect & Industrial AI Specialist\u00a0·\u00a0Canada\u00a0·\u00a0Open to Remote Roles',
    },

    // ── Per-role experience data ────────────────────────────────────────────────
    experienceRoles: {
      consulting: {
        title: 'Systems Architect & Technical Consultant (Freelance)',
        yoe: 'Active',
        operationalContext: null,
        impact: [
          'Architecting highly available systems and providing technical oversight for industrial digital transformation projects.',
          'Developing WuRAD — a proprietary R&D initiative focused on next-generation industrial safety interfaces and advanced situational awareness systems for high-complexity environments.',
          'Engineering a real-time data-scraping and predictive engine for flight availability optimization, demonstrating production-grade streaming ingestion and low-latency decision pipelines.',
        ],
        mandateLabel: null,
        mandateContext: null,
        mandateHighlights: [],
      },
      cognixr: {
        title: 'CTO Advisor & Technical Consultant',
        yoe: '+3 yrs',
        operationalContext: null,
        impact: [
          'Mandated to provide high-level architectural oversight and technical roadmapping for a health-tech XR platform.',
          'Advised on BCI-VR integration strategies and clinical engineering workflows, translating investor-driven product requirements into actionable technical specifications.',
          'Engineered real-time visualization of raw EEG brain signals to trigger in-scene therapeutic responses within Unity VR environments.',
          'Integrated VR applications with backend APIs for autonomous headset deployment workflows.',
        ],
        mandateLabel: null,
        mandateContext: null,
        mandateHighlights: [],
      },
      ibm: {
        title: 'Fullstack Software Engineer',
        yoe: '+2 yrs',
        operationalContext: null,
        impact: [
          'Developed Java Spring Boot applications and RESTful APIs powering Industry 4.0 smart manufacturing.',
          'Maintained enterprise-scale architecture through strict Agile/Scrum sprint cadences.',
        ],
        mandateLabel: null,
        mandateContext: null,
        mandateHighlights: [],
      },
      auger: {
        title: 'Industrial Software Developer (C#)',
        yoe: null,
        operationalContext: null,
        impact: [
          'Built a mobile industrial maintenance management app using C#, WPF, and .NET Core.',
          'Designed OOP libraries and integrated SSRS reporting for client operational analytics.',
        ],
        mandateLabel: null,
        mandateContext: null,
        mandateHighlights: [],
      },
      simfusion: {
        title: 'Unity C# Developer',
        yoe: '+1 yr',
        operationalContext: null,
        impact: [
          'Designed interactive 3D VR applications for clinical environments with immersive therapeutic UX.',
          'Optimised performance across macOS and iOS deployment targets.',
        ],
        mandateLabel: null,
        mandateContext: null,
        mandateHighlights: [],
      },
      ocp: {
        title: 'Lead Reliability Engineer & Field Supervisor',
        yoe: '11 yrs',
        operationalContext: '📍 Remote Desert Operations · FIFO (30/30 Rotation)',
        impact: [
          'Deployed in a remote desert camp under a rigorous Fly-In-Fly-Out (FIFO) schedule (70-hour work weeks), providing technical oversight of cross-functional mechanical and systems teams while designing resilient IT/OT systems capable of surviving extreme environmental and operational stress.',
          'Managed and led a high-performance team of mechanical maintenance technicians in the field, coordinating complex dragline workshop operations and ensuring zero-incident safety compliance under high-pressure 24/7 schedules.',
          'Architected and developed a full-stack web application (PHP/MySQL) to digitize maintenance tracking and reliability metrics for ultra-class mining assets.',
          'Replaced manual tracking systems with a centralized digital dashboard, automating the calculation of critical industrial KPIs including Mean Time Between Failures (MTBF) and Mean Time To Repair (MTTR).',
          'Bridged physical sensor logs with a digital interface to significantly optimize asset uptime during massive mechanical and structural upgrades.',
          'Acted as the technical liaison between floor execution teams and the Reliability Engineering Department, ensuring strict adherence to digitized Standard Operating Procedures (SOPs) and safety protocols.',
        ],
        mandateLabel: 'Engineering Probation (Approbation) Mandate',
        mandateContext: '6-month specialized engineering deployment following 1 year of advanced corporate technical training',
        mandateHighlights: [
          'Mechanical Digital Twin & FEA Simulation: Engineered a high-precision 3D digital twin of a dragline orientation gear system in SolidWorks; conducted advanced Finite Element Analysis (FEA) and constraint simulations to validate alternative bearing models, translating American technical specifications into French industrial standards (denture corrigée).',
          'Full-Stack EDMS Development: Designed and deployed a secure PHP/MySQL intranet application for the Engineering Office (Bureau d\'Études) to centralize AutoCAD blueprint repositories and technical schemas, enabling structured cross-departmental access and version control.',
        ],
      },
    },

    // ── Per-project data overrides ──────────────────────────────────────────────
    projectItems: {
      kinetic:        { subtitle: 'Clinical VR Rehabilitation — Dyspraxia (DCD)',           linkLabel: 'View on GitLab' },
      flypass:        { subtitle: 'Decoupled Full-Stack Architecture · Real-Time Data Ingestion', linkLabel: 'Visit Live Site' },
      'souk-el-had':  { subtitle: 'Traditional Commerce → Scalable Digital Platform',       linkLabel: 'Visit Website' },
      'longueuil-vr': { subtitle: 'Défi Technologie Longueuil · Award-Winning AR Ecosystem', linkLabel: 'Live Prototype' },
      'industrial-rd': { subtitle: 'Confidential Architecture · Pre-Patent IP',             linkLabel: 'Details Under NDA' },
      cognixr:        { subtitle: 'Acting CTO · Investor-Mandated Roadmap',                 linkLabel: 'Private Company' },
      toolmanager:    { subtitle: 'Industrial Asset Tracking Monorepo',                     linkLabel: 'View Repository' },
      dragline:       { subtitle: 'Full-Stack MTBF / MTTR Analytics Platform',              linkLabel: 'Internal System · Heavy Industry' },
      'bci-vr':       { subtitle: 'End-to-End Brain-Computer Interface Pipeline',           linkLabel: 'Private Research Build' },
    },

    // ── Per-academic-entry data ─────────────────────────────────────────────────
    academicItems: {
      msc: {
        type: 'Graduate — M.Sc.', yearLabel: 'Autumn 2026', location: 'Sherbrooke, QC',
        degree: 'M.Sc. Software Engineering (Course-based with Internship)',
        highlight: 'Professional M.Sc. emphasizing software architecture, systems design, and applied engineering — completed with an integrated industry internship.',
        courses: [], note: null,
      },
      'ai-aec': {
        type: 'AEC', yearLabel: 'Dec 2025 → 2027', location: 'Montréal, QC',
        degree: 'AEC — Artificial Intelligence',
        highlight: 'Applied ML, Computer Vision, NLP',
        courses: ['Machine Learning', 'Computer Vision', 'Natural Language Processing'], note: null,
      },
      mcgill: {
        type: 'Undergraduate Certificate', yearLabel: 'Completed Jun 2024', location: 'Montréal, QC',
        degree: 'Undergraduate Certificate in Applied Cybersecurity',
        highlight: 'Undergraduate-level specialization focused on defending converged IT/OT environments, featuring 4.0 performance in core architectural and risk management modules.',
        courses: ['Security Architecture & Design (A)', 'Security Risk Management (A)', 'Cryptography & Network Security'], note: null,
      },
      dess: {
        type: 'Graduate Certificate — D.E.S.S.', yearLabel: 'Sept 2018 – Dec 2019', location: 'Sherbrooke, QC',
        degree: 'D.E.S.S. — Information Technology',
        highlight: 'Graduated with Distinction',
        courses: ['Software Architecture', 'Systems Analysis', 'Data Engineering'], note: null,
      },
      'iot-aec': {
        type: 'AEC', yearLabel: 'Completed Apr 2023', location: 'Saint-Lambert, QC',
        degree: 'AEC — Industrial Internet of Things',
        highlight: 'Industrial IoT, Embedded Systems & Edge Computing',
        courses: ['Embedded C', 'MQTT / CoAP Protocols', 'Edge Computing'], note: null,
      },
      'vr-ar-aec': {
        type: 'AEC', yearLabel: '2019 – 2021', location: 'Saint-Lambert, QC',
        degree: 'AEC — VR & AR Specialist',
        highlight: 'Formal foundation in real-time 3D development, spatial UI design, and immersive application architecture',
        courses: ['Unity / C#', 'Immersive UX Design', '3D Spatial Computing', 'XR Application Architecture'],
        note: 'Applied directly to BCI-VR neuro-diagnostic systems and industrial spatial awareness interfaces.',
      },
      'bac-morocco': {
        type: 'Baccalauréat', yearLabel: 'Morocco', location: 'Settat, Morocco',
        degree: 'B.Sc. — Multimedia & Web Technologies',
        highlight: 'Web development, multimedia systems, digital media design',
        courses: [], note: null,
      },
      'mec-diploma': {
        type: 'Specialized Technician Diploma', yearLabel: 'Morocco', location: 'Morocco',
        degree: 'Mechanical Engineering Technology',
        highlight: 'Applied mechanics, industrial equipment, technical design',
        courses: ['SolidWorks', 'AutoCAD', 'Industrial Maintenance'],
        note: 'Officially recognized in Québec as equivalent to a D.E.C. in Mechanical Engineering.',
      },
    },
  },

  // ═══════════════════════════════════════════════════════════════
  //  FRENCH  (technical guardrail: Edge AI, IIoT, XR, Cloud,
  //           Cybersecurity, Spatial Computing, H2S, CSTS, CSO,
  //           WHMIS, Full Stack — never translated)
  // ═══════════════════════════════════════════════════════════════
  fr: {
    nav: {
      about:      'À Propos',
      experience: 'Expérience',
      projects:   'Projets',
      academic:   'Parcours',
      contact:    'Contact',
      hireMe:     'Engagez-moi',
    },

    hero: {
      identityTag:       'Architecte en Chef | Écosystèmes Industriels Intelligents & Sécurisés',
      identityTagSuffix: '(IA\u00a0•\u00a0XR\u00a0•\u00a0IIoT)',
      typedStrings: [
        'Architecte de Systèmes',
        'Spécialiste IA Industrielle',
        'Architecte XR',
        'Sécurité Cyber-Physique',
        'Ingénieur de Fiabilité',
      ],
      headline: {
        pre: 'À l\'intersection de', h1: 'l\'Industrie Lourde',
        mid: 'et du', h2: 'Logiciel Intelligent',
        pre2: '. De la', h3: 'fiabilité mécanique',
        mid2: 'à la sécurisation de l\'', h4: 'IA de périphérie', mid3: 'et du', h5: 'calcul spatial',
      },
      quote: {
        pre: 'Une perspective systémique unique qui comble le fossé entre les',
        h1: 'contraintes mécaniques', mid: 'et les', h2: 'signaux numériques à faible latence',
      },
      badges: {
        location: 'Canada\u00a0·\u00a0Ouvert aux rôles à distance',
        degree:   'M.Sc. Génie Logiciel\u00a0·\u00a0UdeS',
        security: 'Cybersécurité Appliquée\u00a0·\u00a0McGill',
      },
      cta: { projects: 'Voir les Projets', connect: 'Me Contacter', cv: '\u2193\u00a0Télécharger CV', scroll: 'Défiler' },
    },

    about: {
      eyebrow:   'À Propos de l\'Architecte',
      nameplate: 'Architecte en Chef',
      bioSegments: [
        { text: 'Un ' },
        { text: 'Architecte de Systèmes', type: 'primary' },
        { text: ' multidisciplinaire avec une dualité rare\u00a0: ' },
        { text: '11\u00a0ans de rigueur opérationnelle', type: 'orange' },
        { text: ' dans l\'industrie lourde couplés à une recherche avancée en Génie Logiciel et Cybersécurité. Mon expertise couvre l\'ensemble de la pile — de la simulation des contraintes mécaniques dans des camps industriels isolés à l\'architecture Edge AI de pointe et d\'' },
        { text: 'interfaces VR neuro-réactives', type: 'orange' },
        { text: '. Je me spécialise dans le pont entre la couche physique et la frontière numérique, garantissant que les ' },
        { text: 'systèmes à haute disponibilité', type: 'primary' },
        { text: ' sont aussi résilients sur le terrain qu\'ils sont sécurisés dans le Cloud.' },
      ],
      available: 'Disponible',
      subLabel:  'IA\u00a0•\u00a0XR\u00a0•\u00a0IIoT',
      tags: ['Fiabilité Industrielle', 'Edge AI', 'Spatial Computing', 'Cybersécurité', 'Développement VR/AR', 'Architecture Systèmes'],
      stats: [
        { label: '11\u00a0ans', sub: 'Opérations Industrie Lourde' },
        { label: 'Edge AI',    sub: 'Systèmes Spatiaux & Embarqués' },
        { label: 'Cyber',      sub: 'Architecture Sécurité IT/OT' },
        { label: 'M.Sc.',      sub: 'Génie Logiciel\u00a0·\u00a0UdeS' },
      ],
      metaDescription: 'Portfolio d\'un Architecte en Chef spécialisé en Écosystèmes Industriels Intelligents, IIoT, Edge AI et XR Spatial Computing. À la frontière de l\'industrie lourde et de l\'innovation numérique.',
    },

    pillars: {
      eyebrow:    'Compétences Clés',
      heading:    'Les\u00a0Trois Piliers',
      subheading: 'Une convergence rare d\'expérience opérationnelle industrielle, d\'architecture Cybersécurité et de développement IA/XR — le tout dans une seule vision systémique.',
      items: {
        reliability: {
          tag:         '01 — INDUSTRIEL',
          title:       'Fiabilité & Opérations OT',
          subtitle:    'Fiabilité & Opérations OT',
          description: 'Spécialiste en fiabilité des actifs industriels avec une expérience terrain dans les mines Tier-1 mondiales. Transformation de la télémétrie opérationnelle brute en intelligence de maintenance actionnable.',
          skills: [
            { label: 'Optimisation MTTR / MTBF',    desc: 'Analyses mean-time pour maximiser la disponibilité des équipements lourds' },
            { label: 'Culture HSE DuPont',           desc: 'Coordination HSE formée par les référentiels de sécurité industrielle mondiaux' },
            { label: 'Ingénierie de Fiabilité',      desc: 'Déploiement de SOP structurés et workflows numériques dans des opérations physiques complexes' },
          ],
          stat:      { value: '99,2%', label: 'Cible Disponibilité Actifs' },
          siteReady: { label: 'Prêt pour les sites industriels canadiens', certs: 'CSO\u00a0·\u00a0H2S\u00a0·\u00a0CSTS 2020' },
        },
        security: {
          tag:         '02 — SÉCURITÉ',
          title:       'Sécurité Cyber-Physique',
          subtitle:    'Sécurité Cyber-Physique',
          description: 'Architecture de défenses cyber robustes pour les environnements IT/OT convergés où les vulnérabilités logicielles ont des conséquences physiques immédiates. Certifié McGill en Cybersecurity Appliquée.',
          skills: [
            { label: 'Architecture & Conception Sécurité', desc: 'Construction de topologies réseau résilientes et tolérantes aux pannes' },
            { label: 'Gestion des Risques Entreprise',     desc: 'Cartographie systémique des risques et modélisation des menaces' },
            { label: 'IIoT / ICS Sécurisé',               desc: 'Durcissement des systèmes de contrôle industriels et réseaux de capteurs edge' },
          ],
          stat: { value: 'IT/OT', label: 'Spécialisation Convergence' },
        },
        intelligence: {
          tag:         '03 — INTELLIGENCE & ARCHITECTURE',
          title:       'Spatial Computing & IA',
          subtitle:    'Spatial Computing & Pipelines IA',
          description: 'Construction de systèmes de diagnostic nouvelle génération. Fusion d\'IA prédictive avec des interfaces XR immersives, ancrée dans un AEC en Spécialiste VR & AR et soutenue par des méthodologies de génie logiciel de niveau master.',
          skills: [
            { label: 'Ingénierie des Données & Big Data',  desc: 'Architecture de pipelines d\'entreposage de données scalables' },
            { label: 'Architecture XR & Spatial Computing', desc: 'Credential AEC appliqué aux neuro-diagnostics BCI-VR et interfaces spatiales industrielles' },
            { label: 'Modèles ML Prédictifs',              desc: 'Déploiement d\'IA pour la prédiction de pannes industrielles et la rééducation clinique' },
            { label: 'Analyse des Systèmes Entreprise',    desc: 'Architecture logicielle end-to-end et gestion du cycle de vie' },
          ],
          stat: { value: 'HA', label: 'Systèmes Haute Disponibilité' },
        },
      },
    },

    projects: {
      eyebrow: 'Projets Phares & Confidentiels',
      heading: 'Travaux\u00a0Sélectionnés',
      confidentialBadge: 'ARCHITECTURE CONFIDENTIELLE',
      stealthMode:       'MODE FURTIF',
      viewOnGitlab:   'Voir sur GitLab',
      visitSite:      'Visiter le site',
      visitLive:      'Visiter le site',
      livePrototype:  'Prototype en direct',
      internalSystem: 'Système interne · Industrie lourde',
      privateResearch: 'Recherche privée',
      privateCompany:  'Entreprise privée',
      ndaLabel:        'Détails sous NDA',
      statusLabels: {
        kinetic:        'Actif · GitLab',
        flypass:        'En Production',
        'souk-el-had':  'En Développement · Phase MVP',
        'longueuil-vr': 'Primé · Finaliste',
        'industrial-rd': 'Confidentiel · NDA',
        cognixr:        'Passé · Health-Tech',
        toolmanager:    'Open Source · GitHub',
        dragline:       'Héritage · Industrie Lourde',
        bci:            'Recherche · Matériel',
      },
      descriptions: {
        kinetic:
          'Application de Réalité Virtuelle clinique conçue pour rééduquer la coordination motrice chez les enfants atteints de Dyspraxie (TAC). Le système déguise les exercices thérapeutiques en mini-jeux immersifs tout en transmettant en temps réel les données biomécaniques aux thérapeutes pédiatriques.',
        flypass:
          'Plateforme Cloud distribuée pour prédire la disponibilité des vols pour les voyageurs haute fréquence. Système découplé avec un frontend React haute performance (Vercel) et un backend API (Railway) avec des pipelines d\'ingestion de données en temps réel.',
        'souk-el-had':
          'Interface spatiale immersive et interactive pour l\'exploration de marchés historiques. Architecture Full Stack pour connecter 10\u00a0000+ marchands physiques à un répertoire numérique moderne et un écosystème social.',
        'longueuil-vr':
          'Plateforme Web AR primée pour l\'innovation urbaine. Écosystème déclenché par GPS superposant 300\u00a0ans de patrimoine historique — incluant des reconstructions 3D du Château Fort du XVIIIe siècle — sur des panoramas urbains 360° modernes.',
        'industrial-rd':
          'Système de sécurité audio 3D en Réalité Augmentée pour environnements industriels critiques. Initiative R&D propriétaire axée sur les interfaces de sécurité industrielle nouvelle génération et les systèmes de conscience situationnelle avancés.',
        cognixr:
          'Direction de la stratégie technique et de l\'architecture en tant que CTO Conseiller pour une startup health-tech XR. Gestion des feuilles de route techniques mandatées par les investisseurs et développement des équipes d\'ingénierie transversales.',
        toolmanager:
          'Monorepo Full Stack pour le suivi, la planification de maintenance et la gestion du cycle de vie des équipements industriels. Architecture microservices pour le déploiement en milieux miniers et industrie lourde.',
        dragline:
          'Application web Full Stack (PHP/MySQL) pour numériser le suivi de maintenance des excavatrices dragline ultra-classe. Automatisation des KPI industriels critiques (MTBF et MTTR) en connectant les journaux de capteurs physiques à une interface numérique.',
        bci:
          'Pipeline Brain-Computer Interface (BCI) de bout en bout pour contrôler des environnements de Réalité Virtuelle basé sur les états émotionnels et cognitifs en temps réel.',
      },
    },

    experience: {
      eyebrow:    'Parcours Professionnel',
      heading:    'Chronologie\u00a0d\'Expérience',
      subheading: 'Des opérations terrain dans l\'industrie lourde à la recherche en génie logiciel — une décennie à construire à l\'intersection des systèmes physiques et numériques.',
      present:    'Aujourd\'hui',
      active:     'Actif',
      phases: {
        phase4: { phase: 'Aujourd\'hui', label: 'Recherche Indépendante & Conseil' },
        phase3: { phase: 'Phase 3',      label: 'La Frontière Cyber-Physique & Neurotech' },
        phase2: { phase: 'Phase 2',      label: 'Le Pont Logiciel Entreprise' },
        phase1: { phase: 'Phase 1',      label: 'Les Fondations Industrielles' },
      },
    },

    industrialOps: {
      eyebrow:         'Opérations Terrain',
      eyebrowEmployer: 'Société Minière Tier-1 Mondiale\u00a0·\u00a0Afrique du Nord\u00a0·\u00a0 2006\u00a0–\u00a02017',
      heading:    'Opérations Industrielles\u00a0& Architecture de Maintenance',
      subheading: 'Déploiement terrain de systèmes numériques dans des environnements miniers Tier-1 exigeants — combler le fossé entre l\'ingénierie physique et les opérations pilotées par les données.',
      kpi: [
        { value: '99,2%', label: 'Disponibilité Actifs' },
        { value: '11+',   label: 'Ans Opérations Terrain' },
        { value: 'T1',    label: 'Grade Minier' },
        { value: '4/4',   label: 'GPA · Modules Clés' },
      ],
      certsHeading: 'Certifications & Accréditations',
      highlights: {
        dragline: {
          title: 'Modernisation Structurelle Dragline Ultra-Classe',
          label: 'Contrat Caterpillar · Planificateur de Maintenance',
          body:  'Planificateur de Maintenance certifié pour une refonte structurelle majeure des actifs miniers ultra-classe. Coordination des fenêtres d\'arrêt, allocation des ressources multi-équipes et suivi technique end-to-end.',
        },
        terex: {
          title: 'Intégration d\'Actifs Lourds',
          label: 'Camions Terex MT3300 AC',
          body:  'Direction de la planification technique et de l\'exécution terrain pour le montage et la mise en service des camions miniers Terex MT3300 AC — l\'un des véhicules ultra-classe à plus haute charge utile en production.',
        },
        kpi: {
          title: 'Architecture KPI & Données',
          label: 'Bureau de Méthodes · Workflows Numériques',
          body:  'Développement de workflows numériques "Bureau de Méthodes" pour automatiser le suivi et le calcul du MTBF et MTTR sur l\'ensemble de la flotte. Rapports exécutifs hebdomadaires et mensuels sur la performance de maintenance.',
        },
        hse: {
          title: 'Sécurité & Conformité',
          label: 'Méthodologie HSE DuPont · Risque Électrique',
          body:  'Application et audit rigoureux des protocoles HSE sous les référentiels DuPont mondiaux. Certifié en Gestion des Risques Électriques pour environnements industriels haute tension.',
        },
      },
    },

    endorsements: {
      eyebrow:    'Témoignages Professionnels',
      heading:    'Voix\u00a0du Terrain',
      sourceNote: 'Tous les témoignages proviennent de LinkedIn\u00a0·\u00a0Noms et titres reproduits avec permission',
      categories: {
        ouazzani: 'Leadership Exécutif & Gestion des Risques',
        draifi:   'Excellence Opérationnelle',
        dabounou: 'Distinction Académique',
      },
    },

    academic: {
      eyebrow:    'Parcours Académique',
      heading:    'Excellence\u00a0Académique',
      subheading: 'Une trajectoire continue — de l\'ingénierie industrielle appliquée à l\'architecture logicielle de niveau graduate et à la Cybersecurity.',
      inProgress:     'En cours',
      startingAutumn: 'Démarrage Automne 2026',
      completed:      'Terminé',
      courses:        'Cours Clés',
      researchFocus:  'Axe de recherche',
    },

    contact: {
      eyebrow:    'Travaillons Ensemble',
      heading:    'Ouvert à la Bonne\u00a0Opportunité',
      subheading: 'Qu\'il s\'agisse d\'un rôle senior en ingénierie, d\'une collaboration de recherche ou d\'un projet confidentiel nécessitant une vision systémique — parlons-en.',
      ctaBody:    'À la recherche de rôles senior en Architecture de Systèmes, IA Industrielle et Sécurité Cyber-Physique.',
      ctaButton:  'Me Contacter',
      primary:    'Prioritaire',
      socialDescs: {
        linkedin: 'Réseau professionnel',
        github:   'Projets open source',
        gitlab:   'Projets phares',
        email:    'Contact direct',
      },
      locations: {
        canada:      { region: 'Ouvert aux rôles à distance' },
        northAfrica: { region: 'Flexible à distance' },
      },
      footer: 'Architecte de Systèmes & Spécialiste IA Industrielle\u00a0·\u00a0Canada\u00a0·\u00a0Ouvert aux rôles à distance',
    },

    // ── Rôles Expérience (FR) ──────────────────────────────────────────────────
    experienceRoles: {
      consulting: {
        title: 'Architecte de Systèmes & Consultant Technique (Freelance)',
        yoe: 'Actif',
        operationalContext: null,
        impact: [
          'Architecture de systèmes à haute disponibilité et supervision technique pour des projets de transformation numérique industrielle.',
          'Développement de WuRAD — une initiative R&D propriétaire axée sur les interfaces de sécurité industrielle nouvelle génération et les systèmes avancés de conscience situationnelle pour environnements complexes.',
          'Conception d\'un moteur de scraping temps réel et de prédiction pour l\'optimisation de la disponibilité des vols, démontrant une ingestion de flux en production et des pipelines de décision à faible latence.',
        ],
        mandateLabel: null,
        mandateContext: null,
        mandateHighlights: [],
      },
      cognixr: {
        title: 'Conseiller CTO & Consultant Technique',
        yoe: '+3 ans',
        operationalContext: null,
        impact: [
          'Mandaté pour fournir une supervision architecturale de haut niveau et la feuille de route technique d\'une plateforme XR de health-tech.',
          'Conseillé sur les stratégies d\'intégration BCI-VR et les workflows d\'ingénierie clinique, traduisant les exigences produit des investisseurs en spécifications techniques actionnables.',
          'Développé la visualisation en temps réel des signaux cérébraux EEG bruts pour déclencher des réponses thérapeutiques en scène dans des environnements Unity VR.',
          'Intégré des applications VR avec des API backend pour des workflows de déploiement autonome de casques.',
        ],
        mandateLabel: null,
        mandateContext: null,
        mandateHighlights: [],
      },
      ibm: {
        title: 'Ingénieur Logiciel Full Stack',
        yoe: '+2 ans',
        operationalContext: null,
        impact: [
          'Développé des applications Java Spring Boot et des API RESTful pour l\'Industrie 4.0 et la fabrication intelligente.',
          'Maintenu une architecture à l\'échelle entreprise via des cycles de sprint Agile/Scrum stricts.',
        ],
        mandateLabel: null,
        mandateContext: null,
        mandateHighlights: [],
      },
      auger: {
        title: 'Développeur Logiciel Industriel (C#)',
        yoe: null,
        operationalContext: null,
        impact: [
          'Développé une application mobile de gestion de maintenance industrielle avec C#, WPF et .NET Core.',
          'Conçu des bibliothèques OOP et intégré le reporting SSRS pour les analyses opérationnelles clients.',
        ],
        mandateLabel: null,
        mandateContext: null,
        mandateHighlights: [],
      },
      simfusion: {
        title: 'Développeur Unity C#',
        yoe: '+1 an',
        operationalContext: null,
        impact: [
          'Conçu des applications VR 3D interactives pour des environnements cliniques avec une UX thérapeutique immersive.',
          'Optimisé les performances sur les cibles de déploiement macOS et iOS.',
        ],
        mandateLabel: null,
        mandateContext: null,
        mandateHighlights: [],
      },
      ocp: {
        title: 'Ingénieur de Fiabilité Principal & Superviseur Terrain',
        yoe: '11 ans',
        operationalContext: '📍 Opérations Désert Isolé · FIFO (Rotation 30/30)',
        impact: [
          'Déployé dans un camp désertique isolé sous un planning FIFO rigoureux (semaines de 70h), assurant la supervision technique d\'équipes mécaniques et systèmes transversales tout en concevant des systèmes IT/OT résilients capables de résister au stress environnemental et opérationnel extrême.',
          'Géré et dirigé une équipe haute performance de techniciens de maintenance mécanique sur le terrain, coordonnant des opérations de workshop sur dragline complexes et assurant la conformité sécurité zéro incident sous des plannings 24/7 haute pression.',
          'Architecturé et développé une application web Full Stack (PHP/MySQL) pour numériser le suivi de maintenance et les métriques de fiabilité des actifs miniers ultra-classe.',
          'Remplacé les systèmes de suivi manuels par un tableau de bord numérique centralisé, automatisant le calcul des KPI industriels critiques (MTBF et MTTR).',
          'Connecté les journaux de capteurs physiques à une interface numérique pour optimiser significativement la disponibilité des actifs lors des mises à niveau mécaniques et structurelles massives.',
          'Assuré la liaison technique entre les équipes d\'exécution terrain et le Département d\'Ingénierie de Fiabilité, garantissant le strict respect des Procédures Opérationnelles Standardisées (SOP) numérisées et des protocoles de sécurité.',
        ],
        mandateLabel: 'Mandat d\'Ingénierie d\'Approbation',
        mandateContext: 'Déploiement d\'ingénierie spécialisé de 6 mois suite à 1 an de formation technique avancée en entreprise',
        mandateHighlights: [
          'Jumeau Numérique Mécanique & Simulation FEA\u00a0: Ingénierie d\'un jumeau numérique 3D haute précision d\'un système d\'engrenages d\'orientation de dragline dans SolidWorks\u00a0; analyses FEA avancées et simulations de contraintes pour valider des modèles de roulements alternatifs, traduisant les normes techniques américaines en standards industriels français (denture corrigée).',
          'Développement Full Stack EDMS\u00a0: Conception et déploiement d\'une application intranet PHP/MySQL sécurisée pour le Bureau d\'Études, centralisant les référentiels AutoCAD de plans et schémas techniques, avec contrôle d\'accès structuré interdépartemental et gestion des versions.',
        ],
      },
    },

    // ── Données par projet (FR) ────────────────────────────────────────────────
    projectItems: {
      kinetic: {
        subtitle:  'Rééducation Clinique VR — Dyspraxie (TAC)',
        linkLabel: 'Voir sur GitLab',
        tag:       'VR · Health-Tech · Eye-Tracking · Unity',
        highlights: [
          'Conçu spécifiquement pour la plateforme HTC Vive Pro pour un suivi du mouvement clinique de précision.',
          'API Eye-Tracking natives intégrées pour corréler l\'attention visuelle avec les temps de réponse motrice.',
          'Tableau de bord thérapeute sécurisé pour visualiser la télémétrie des séances et suivre la progression des patients.',
        ],
      },
      flypass: {
        subtitle:  'Architecture Full Stack Découplée · Ingestion Temps Réel',
        linkLabel: 'Visiter le site',
        tag:       'Full-Stack · Cloud Infrastructure · CI/CD · REST API',
        highlights: [
          'Frontend React découplé déployé sur Vercel avec pipelines CI/CD automatisés garantissant des déploiements zéro interruption.',
          'API REST Node.js sur Railway avec ingestion de données en temps réel depuis les sources de disponibilité de vols en direct.',
          'Architecture cloud distribuée conçue pour la haute disponibilité et le scaling élastique sous des charges variables.',
          'Moteur de prédiction bout-en-bout délivrant des recommandations de fenêtres de vol actionnables aux détenteurs de pass en temps réel.',
        ],
      },
      'souk-el-had': {
        subtitle:  'Commerce Traditionnel → Plateforme Numérique Scalable',
        linkLabel: 'Visiter le site',
        tag:       'Transformation Numérique · React · Node.js · E-Commerce · SEO',
        highlights: [
          'Architecture d\'un répertoire marketplace scalable pour numériser 10\u00a0000+ marchands physiques au sein d\'un grand hub commercial traditionnel.',
          'Stratégie de présence Instagram développée pour connecter le marché physique à un public numérique.',
          'API backend Node.js conçue pour les listings marchands en temps réel, la recherche et la découverte.',
          'Implémentation du SEO et de l\'optimisation pour la recherche locale afin de générer du trafic organique.',
        ],
      },
      'longueuil-vr': {
        subtitle:  'Défi Technologie Longueuil · Écosystème AR Primé',
        linkLabel: 'Prototype en direct',
        tag:       'Web AR · GPS · Reconstruction 3D · Tech Civique',
        highlights: [
          'Plateforme Web AR civique développée lors d\'un défi technologique compétitif, ayant obtenu une reconnaissance finaliste.',
          'Panoramas 360° déclenchés par GPS pour superposer immersivemment 300 ans d\'histoire urbaine de Longueuil.',
          'Pipelines de reconstruction 3D pour restaurer numériquement le Château Fort historique pour une visualisation AR sur place.',
          'Permutation de skybox en temps réel via JavaScript setAttribute pour des transitions de scène fluides sans rechargement.',
        ],
      },
      'industrial-rd': {
        subtitle:  'Architecture Confidentielle · IP Pré-Brevet',
        linkLabel: 'Détails sous NDA',
        tag:       'R&D PROPRIÉTAIRE · SÉCURITÉ INDUSTRIELLE · INTERFACES AVANCÉES · SYSTÈMES TEMPS RÉEL',
        highlights: [
          'Intégration avancée de données multi-sources.',
          'Optimisé pour les exigences de latence mission-critique.',
          'Conforme aux normes de sécurité fonctionnelle industrielle.',
          'Architecture de confiance interface homme-machine propriétaire.',
        ],
      },
      cognixr: {
        subtitle:  'CTO par Intérim · Feuille de Route Mandatée par Investisseurs',
        linkLabel: 'Entreprise privée',
        tag:       'Health-Tech · Leadership',
        highlights: [
          'Gestion complète de la feuille de route technique sous la surveillance des investisseurs.',
          'Architecture du MVP de diagnostic XR en santé.',
          'Constitution et direction d\'une équipe d\'ingénierie transversale.',
          'Pont entre les exigences cliniques et la livraison technique.',
          'Exploitation d\'une formation formelle en développement VR/AR (AEC, Champlain College) pour architecturer des interfaces spatiales temps réel.',
        ],
      },
      toolmanager: {
        subtitle:  'Suivi d\'Actifs Industriels — Monorepo',
        linkLabel: 'Voir le Référentiel',
        tag:       'Full-Stack · Industriel · DevOps',
        highlights: [
          'Gestion complète du cycle de vie des actifs (CRUD).',
          'Moteur de planification de maintenance prédictive.',
          'Accès basé sur les rôles pour les utilisateurs terrain et bureau.',
          'Architecture monorepo avec types partagés.',
        ],
      },
      dragline: {
        subtitle:  'Plateforme d\'Analyse MTBF / MTTR Full Stack',
        linkLabel: 'Système interne · Industrie Lourde',
        tag:       'Industriel · Full-Stack · Fiabilité',
        highlights: [
          'Développement d\'un tableau de bord PHP/MySQL Full Stack de suivi des anomalies pour les actifs miniers lourds.',
          'Automatisation des analyses Mean Time Between Failures (MTBF) et Mean Time To Repair (MTTR).',
          'Coordination du suivi de données lors d\'une modernisation structurelle majeure d\'une excaveuse ultra-classe par Caterpillar.',
          'Remplacement du suivi manuel par un workflow numérique centralisé "Bureau de Méthodes".',
        ],
      },
      'bci-vr': {
        subtitle:  'Pipeline BCI de Bout en Bout',
        linkLabel: 'Recherche Privée',
        tag:       'IoT · Matériel · Neurotech · C/C++',
        highlights: [
          'Modification d\'un casque EEG MindFlex commercial pour exposer les broches de données brutes\u00a0; interfacé directement avec un Arduino via GPIO.',
          'Module Bluetooth HC-06 configuré pour transmettre la télémétrie en direct (Delta, Thêta, Alpha, Bêta, Gamma) vers un serveur edge Raspberry Pi.',
          'Couche de visualisation temps réel construite avec Processing Brain Visualizer et la bibliothèque GUI ControlP5.',
          'Bandes de fréquences EEG analysées en vecteurs de caractéristiques ML pour déclencher des changements d\'état cognitif dans Unity VR.',
        ],
      },
    },

    // ── Données par entrée académique (FR) ────────────────────────────────────
    academicItems: {
      msc: {
        type: 'Master — M.Sc.', yearLabel: 'Automne 2026', location: 'Sherbrooke, QC',
        degree: 'M.Sc. en Génie Logiciel (Type cours avec stage)',
        highlight: 'M.Sc. professionnel axé sur l\'architecture logicielle, la conception de systèmes et l\'ingénierie appliquée — complété par un stage en industrie intégré.',
        courses: [], note: null,
      },
      'ai-aec': {
        type: 'AEC', yearLabel: 'Déc 2025 → 2027', location: 'Montréal, QC',
        degree: 'AEC — Intelligence Artificielle',
        highlight: 'ML appliqué, Vision par Ordinateur, Traitement du Langage Naturel',
        courses: ['Apprentissage Automatique', 'Vision par Ordinateur', 'Traitement du Langage Naturel'], note: null,
      },
      mcgill: {
        type: 'Certificat de premier cycle', yearLabel: 'Terminé Juin 2024', location: 'Montréal, QC',
        degree: 'Certificat de premier cycle en Cybersécurité Appliquée',
        highlight: 'Spécialisation de premier cycle axée sur la défense des environnements IT/OT convergés, avec 4,0 en modules architecturaux et de gestion des risques.',
        courses: ['Architecture & Conception Sécurité (A)', 'Gestion des Risques Sécurité (A)', 'Cryptographie & Sécurité Réseau'], note: null,
      },
      dess: {
        type: 'Certificat Graduate — D.E.S.S.', yearLabel: 'Sept 2018 – Déc 2019', location: 'Sherbrooke, QC',
        degree: 'D.E.S.S. en Technologies de l\'Information',
        highlight: 'Diplômé avec Mention',
        courses: ['Architecture Logicielle', 'Analyse des Systèmes', 'Ingénierie des Données'], note: null,
      },
      'iot-aec': {
        type: 'AEC', yearLabel: 'Terminé Avr 2023', location: 'Saint-Lambert, QC',
        degree: 'AEC en Internet des Objets (IIoT)',
        highlight: 'IIoT industriel, Systèmes embarqués & Edge Computing',
        courses: ['C Embarqué', 'Protocoles MQTT / CoAP', 'Edge Computing'], note: null,
      },
      'vr-ar-aec': {
        type: 'AEC', yearLabel: '2019 – 2021', location: 'Saint-Lambert, QC',
        degree: 'AEC — Spécialiste VR & AR',
        highlight: 'Formation formelle en développement 3D temps réel, conception d\'interface spatiale et architecture d\'applications immersives',
        courses: ['Unity / C#', 'Conception UX Immersive', '3D Spatial Computing', 'Architecture Applications XR'],
        note: 'Appliqué directement aux systèmes de neuro-diagnostic BCI-VR et aux interfaces de conscience situationnelle industrielle.',
      },
      'bac-morocco': {
        type: 'Baccalauréat', yearLabel: 'Maroc', location: 'Settat, Maroc',
        degree: 'Licence — Multimédia & Technologies Web',
        highlight: 'Développement web, systèmes multimédia, conception de médias numériques',
        courses: [], note: null,
      },
      'mec-diploma': {
        type: 'Diplôme de Technicien Spécialisé', yearLabel: 'Maroc', location: 'Maroc',
        degree: 'Techniques de Génie Mécanique',
        highlight: 'Mécanique appliquée, équipements industriels, conception technique',
        courses: ['SolidWorks', 'AutoCAD', 'Maintenance Industrielle'],
        note: 'Reconnu officiellement au Québec comme équivalent au D.E.C. en Techniques de Génie Mécanique.',
      },
    },
  },
}
