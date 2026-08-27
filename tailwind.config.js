/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        body: ['"Outfit"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      colors: {
        void: '#0a0a0a',
        surface: '#111111',
        elevated: '#1a1a1a',
        cream: '#F2EDE8',
        warm: '#D4C5B2',
        muted: '#7A7268',
        cyan: {
          DEFAULT: '#1abbec',
          dark: '#0d8fb5',
          dim: 'rgba(26, 187, 236, 0.12)',
        },
      },
    },
  },
  plugins: [],
}
