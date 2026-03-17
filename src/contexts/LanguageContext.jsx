import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { translations } from '../i18n/translations'

const LanguageContext = createContext(null)

/** Determine initial language: localStorage > navigator.language > 'en' */
function detectLang() {
  const stored = localStorage.getItem('portfolio_lang')
  if (stored === 'fr' || stored === 'en') return stored
  return navigator.language?.toLowerCase().startsWith('fr') ? 'fr' : 'en'
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(detectLang)

  // Sync <html lang>, <meta description>, and localStorage on every lang change
  useEffect(() => {
    localStorage.setItem('portfolio_lang', lang)
    document.documentElement.lang = lang

    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute('content', translations[lang].about.metaDescription)
    }
  }, [lang])

  const toggle = useCallback(() => setLang(l => (l === 'en' ? 'fr' : 'en')), [])

  /** Dot-notation accessor — t('nav.about') */
  const t = useCallback(
    (key) => key.split('.').reduce((obj, k) => obj?.[k], translations[lang]) ?? key,
    [lang],
  )

  /** Direct access to the full translation object for the active language */
  const tr = translations[lang]

  return (
    <LanguageContext.Provider value={{ lang, toggle, t, tr }}>
      {children}
    </LanguageContext.Provider>
  )
}

/** Hook — throws if used outside <LanguageProvider> */
export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used inside <LanguageProvider>')
  return ctx
}
