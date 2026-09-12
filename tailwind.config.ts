import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: '#0A0D11',
          panel: '#12161C',
          line: '#1F252D',
        },
        ink: {
          DEFAULT: '#E9EDF1',
          muted: '#8B96A3',
          faint: '#5B6672',
        },
        signal: {
          DEFAULT: '#4FC9E0',
          dim: '#2E7A8A',
          bright: '#7EDCEF',
        },
        amber: {
          DEFAULT: '#E0A458',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"IBM Plex Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      maxWidth: {
        prose: '68ch',
      },
      keyframes: {
        flow: {
          '0%': { strokeDashoffset: '240' },
          '100%': { strokeDashoffset: '0' },
        },
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        rise: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        flow: 'flow 2.4s linear infinite',
        blink: 'blink 1s step-end infinite',
        rise: 'rise 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
    },
  },
  plugins: [],
} satisfies Config
