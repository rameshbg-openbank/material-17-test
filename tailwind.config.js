/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {},
    fontFamily: {
      primary: `'Montserrat', sans-serif`,
      secondary: `'Open Sans', sans-serif`,
    },
    colors: {
      error: {
        DEFAULT: '#AF1E1E',
      },
    },
  },
  plugins: [],
};
