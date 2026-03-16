/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        surface: '#111111',
        card: '#171717',
        'card-hover': '#1e1e1e',
        border: '#262626',
        'border-bright': '#333333',
        orange: {
          DEFAULT: '#f97316',
          dim: '#c2590f',
          glow: 'rgba(249,115,22,0.15)',
        },
        text: {
          primary: '#f5f5f5',
          secondary: '#a3a3a3',
          muted: '#525252',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern': `linear-gradient(rgba(249,115,22,0.03) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(249,115,22,0.03) 1px, transparent 1px)`,
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      backgroundSize: {
        'grid': '60px 60px',
      },
      animation: {
        'pulse-orange': 'pulseOrange 2s ease-in-out infinite',
        'scan-line': 'scanLine 3s linear infinite',
        'blink': 'blink 1.2s step-end infinite',
      },
      keyframes: {
        pulseOrange: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        scanLine: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      boxShadow: {
        'orange-glow': '0 0 20px rgba(249,115,22,0.2), 0 0 40px rgba(249,115,22,0.1)',
        'orange-sm': '0 0 8px rgba(249,115,22,0.3)',
        'card': '0 4px 24px rgba(0,0,0,0.4)',
        'card-hover': '0 8px 40px rgba(0,0,0,0.6)',
      },
    },
  },
  plugins: [],
}
