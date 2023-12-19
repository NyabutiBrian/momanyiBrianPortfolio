/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins']
      },
      colors: {
        primary: '#B38B59',
        secondary: '#999D9E',
        whity: '#E9EAEB',
        darky: '#262626',
      },
    },
  },
  plugins: [],
}

