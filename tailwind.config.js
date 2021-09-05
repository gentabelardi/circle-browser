module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    backgroundColor: theme => ({
      ...theme('colors'),
      'dark-primary': '#181B24',
     })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
