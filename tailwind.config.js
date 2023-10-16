/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        unica:"'Unica One', cursive;",
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}