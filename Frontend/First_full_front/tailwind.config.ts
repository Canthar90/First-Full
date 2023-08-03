/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans]
      },
      boxShadow: {
        brown: '0 0 3px 3px #65451F',
        gold: '0 1px 3px 0 #EAC696'
      }
    }
  },
  plugins: []
}
