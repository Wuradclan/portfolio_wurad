import { motion } from 'framer-motion'
import { MapPin, Mail, Linkedin, Github, Gitlab, ArrowUpRight, Zap } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const socials = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/wurad',
    desc: 'Professional network',
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/wurad',
    desc: 'Open source work',
  },
  {
    icon: Gitlab,
    label: 'GitLab',
    href: 'https://gitlab.com/wurad',
    desc: 'Featured projects',
  },
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:morad@wurad.dev',
    desc: 'Direct contact',
  },
]

const locations = [
  { city: 'Edmonton', region: 'Alberta, Canada', flag: '🇨🇦', primary: true },
  { city: 'Agadir', region: 'Souss-Massa, Morocco', flag: '🇲🇦', primary: false },
]

export default function Contact() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-glow rounded-full blur-[100px] opacity-20" />
      <div className="absolute inset-0 grid-overlay opacity-25" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs text-orange-DEFAULT tracking-widest uppercase">
            Let's Work Together
          </span>
          <h2 className="font-mono font-bold text-3xl sm:text-4xl lg:text-5xl text-gradient-white mt-4 mb-6">
            Open to the Right Opportunity
          </h2>
          <p className="max-w-xl mx-auto text-text-secondary">
            Whether it's a senior engineering role, research collaboration, or a stealth
            project that needs a systems mind — let's talk.
          </p>
        </motion.div>

        {/* Main CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative rounded-2xl border border-orange-DEFAULT/30 bg-card overflow-hidden mb-12 p-10 text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-orange-DEFAULT/5 via-transparent to-transparent" />
          <div className="absolute inset-0 grid-overlay opacity-30" />
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-orange-glow border border-orange-DEFAULT/30 mb-6">
              <Zap size={24} className="text-orange-DEFAULT" fill="currentColor" />
            </div>
            <p className="text-text-secondary mb-8 max-w-md mx-auto">
              Currently seeking senior roles in{' '}
              <span className="text-text-primary font-medium">Systems Architecture</span>,{' '}
              <span className="text-text-primary font-medium">Industrial AI</span>, and{' '}
              <span className="text-text-primary font-medium">Cyber-Physical Security</span>.
            </p>
            <a
              href="mailto:morad@wurad.dev"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-lg bg-orange-DEFAULT hover:bg-orange-dim text-background font-semibold shadow-orange-glow transition-all duration-200 hover:scale-105"
            >
              <Mail size={16} />
              Get in Touch
              <ArrowUpRight size={14} />
            </a>
          </div>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12"
        >
          {socials.map(({ icon: Icon, label, href, desc }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 p-5 rounded-xl border border-border bg-card hover:border-orange-DEFAULT/40 hover:bg-card-hover transition-all duration-300"
            >
              <Icon
                size={20}
                className="text-text-muted group-hover:text-orange-DEFAULT transition-colors"
              />
              <span className="text-sm font-medium text-text-secondary group-hover:text-text-primary transition-colors">
                {label}
              </span>
              <span className="text-[11px] text-text-muted">{desc}</span>
            </a>
          ))}
        </motion.div>

        {/* Locations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {locations.map(({ city, region, flag, primary }) => (
            <div
              key={city}
              className={`flex items-center gap-3 px-6 py-3.5 rounded-xl border ${
                primary
                  ? 'border-orange-DEFAULT/30 bg-orange-glow'
                  : 'border-border bg-card'
              }`}
            >
              <MapPin
                size={14}
                className={primary ? 'text-orange-DEFAULT' : 'text-text-muted'}
              />
              <div>
                <div
                  className={`font-mono font-semibold text-sm ${
                    primary ? 'text-text-primary' : 'text-text-secondary'
                  }`}
                >
                  {flag} {city}
                </div>
                <div className="text-[11px] text-text-muted">{region}</div>
              </div>
              {primary && (
                <span className="ml-2 px-2 py-0.5 rounded-full text-[10px] font-mono bg-orange-DEFAULT text-background font-semibold">
                  Primary
                </span>
              )}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Footer */}
      <div className="relative z-10 mt-20 pt-8 border-t border-border text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Zap size={14} className="text-orange-DEFAULT" fill="currentColor" />
          <span className="font-mono font-bold text-sm">
            <span className="text-gradient-orange">Wu</span>
            <span className="text-text-primary">RAD</span>
          </span>
        </div>
        <p className="text-xs text-text-muted">
          © {new Date().getFullYear()} Morad Ait (WuRAD) · Built with Vite, React &
          Framer Motion
        </p>
        <p className="text-[11px] text-text-muted/60 mt-1">
          Systems Architect & Industrial AI Specialist · Edmonton, AB · Agadir, Morocco
        </p>
      </div>
    </section>
  )
}
