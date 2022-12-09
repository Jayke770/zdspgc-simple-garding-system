// import konstaConfig config
const konstaConfig = require('konsta/config')
// wrap config with konstaConfig config
module.exports = konstaConfig({
  konsta: {
    colors: {
      'brand-primary': '#049243',
      'brand-secondary': '#086435',
      'brand-blue': '#1D4ED8',
      'brand-amber': '#b45309'
    }
  },
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'class'
  theme: {
    extend: {
      colors: {
        "primary": '#049243',
        "secondary": '#086435'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
})