/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0C0E12',
          surface: '#131720',
          surfaceHover: '#1B212D',
          border: '#232936',
          borderSubtle: 'rgba(255, 255, 255, 0.08)',
          ink: '#F3F4F6',
          inkSoft: '#94A3B8',
          inkMuted: '#64748B',
        },
        light: {
          bg: '#FBFBF9',
          surface: '#FFFFFF',
          surfaceHover: '#F4F3ED',
          border: '#E5E2DA',
          borderSubtle: 'rgba(0, 0, 0, 0.07)',
          ink: '#111827',
          inkSoft: '#4B5563',
          inkMuted: '#9CA3AF',
        },
        accent: {
          DEFAULT: '#14B8A6', // Restrained emerald / teal
          hover: '#0D9488',
          light: '#2DD4BF',
          glow: 'rgba(20, 184, 166, 0.14)',
          subtle: 'rgba(20, 184, 166, 0.08)',
        },
      },
      fontFamily: {
        serif: ['Newsreader', 'Playfair Display', 'Georgia', 'serif'],
        sans: [
          'Plus Jakarta Sans',
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'system-ui',
          'sans-serif',
        ],
        mono: ['JetBrains Mono', 'SF Mono', 'Menlo', 'Consolas', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      letterSpacing: {
        widest: '0.15em',
        ultra: '0.25em',
      },
    },
  },
  plugins: [],
};
