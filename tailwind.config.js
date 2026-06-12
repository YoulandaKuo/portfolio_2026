/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#f1e8d6',
        'canvas-2': '#ece1cb',
        'canvas-3': '#e4d8be',
        ink: '#2c3e44',
        'ink-soft': '#5a6b71',
        rust: '#c95c2a',
        'rust-deep': '#a44820',
        porter: '#2c4a52',
        rule: 'rgba(44,62,68,0.18)',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Cormorant', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
