/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
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
  plugins: [
    require('flowbite/plugin')
  ],
}

