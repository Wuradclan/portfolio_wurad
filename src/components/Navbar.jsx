import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Zap } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { lang, toggle, tr }        = useLanguage()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { label: tr.nav.about,      href: '#pillars'    },
    { label: tr.nav.experience, href: '#experience' },
    { label: tr.nav.projects,   href: '#projects'   },
    { label: tr.nav.academic,   href: '#academic'   },
    { label: tr.nav.contact,    href: '#contact'    },
  ]

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMobileOpen(false)
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glassmorphism shadow-[0_2px_20px_rgba(0,0,0,0.6)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-2 group"
        >
          <div className="relative flex items-center justify-center w-8 h-8">
            <Zap
              size={18}
              className="text-orange-DEFAULT drop-shadow-[0_0_6px_rgba(249,115,22,0.8)] group-hover:scale-110 transition-transform"
              fill="currentColor"
            />
          </div>
          <span className="font-mono font-bold text-lg tracking-tight">
            <span className="text-gradient-orange">Wu</span>
            <span className="text-text-primary">RAD</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className="relative px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors duration-200 group"
              >
                {label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-orange-DEFAULT group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}

          {/* Language toggle */}
          <li className="ml-1">
            <button
              onClick={toggle}
              aria-label={lang === 'en' ? 'Passer en français' : 'Switch to English'}
              className="flex items-center gap-0.5 px-3 py-1.5 rounded-md font-mono text-xs font-semibold text-text-muted hover:text-text-primary border border-border hover:border-orange-DEFAULT/40 transition-all duration-200"
            >
              <span className={lang === 'fr' ? 'text-orange-DEFAULT' : 'text-text-muted'}>FR</span>
              <span className="text-text-muted/40 mx-0.5">|</span>
              <span className={lang === 'en' ? 'text-orange-DEFAULT' : 'text-text-muted'}>EN</span>
            </button>
          </li>

          <li className="ml-1">
            <a
              href="mailto:wurad.ait@gmail.com"
              className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-4 py-2 rounded-md transition-all duration-200 font-semibold text-sm"
            >
              {tr.nav.hireMe}
            </a>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-2">
          {/* Language toggle — mobile */}
          <button
            onClick={toggle}
            aria-label={lang === 'en' ? 'Passer en français' : 'Switch to English'}
            className="flex items-center gap-0.5 px-2.5 py-1.5 rounded-md font-mono text-[10px] font-semibold border border-border hover:border-orange-DEFAULT/40 transition-all duration-200"
          >
            <span className={lang === 'fr' ? 'text-orange-DEFAULT' : 'text-text-muted'}>FR</span>
            <span className="text-text-muted/40 mx-0.5">|</span>
            <span className={lang === 'en' ? 'text-orange-DEFAULT' : 'text-text-muted'}>EN</span>
          </button>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="text-text-secondary hover:text-text-primary p-2 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden glassmorphism border-t border-border overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-4 gap-1">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={(e) => handleNavClick(e, href)}
                    className="block py-3 text-sm font-medium text-text-secondary hover:text-orange-DEFAULT transition-colors border-b border-border last:border-0"
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li className="pt-3">
                <a
                  href="mailto:wurad.ait@gmail.com"
                  className="block text-center py-2.5 text-sm font-semibold border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white rounded-md transition-all duration-200"
                >
                  {tr.nav.hireMe}
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
