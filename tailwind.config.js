/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        background: "url('./src/assets/background/background.svg')"
      },
      colors: {
        'e-cyan': '#4dd0e1',
        'e-magenta': '#ec407a',
        'e-yellow': '#ffff00'
      }
    }
  },
  plugins: []
}
